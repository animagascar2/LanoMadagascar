import React, { useState, useRef, useEffect, useCallback } from 'react';

export let STORES = {};
export let STATES = {};
export let GETTERS = {};
export let SETTERS = {};
export let MUTATIONS = {};
export let USESTATE = {};
export let _STATES_ = {};
export let _USESTATE_ = {};
export let INIT = () => null;
export let _STORES_ = {};
export let SMOUNTED = {};
export let HOOKS = {};
export let STORAGE = {
  get: async key => {},
  store: async (key, value) => {},
  merge: async (key, value1, value2) => {},
  remove: async key => {},
  getAllKeys: async () => {},
  getAll: async (keys = []) => {},
  storeMultiple: async arrayValues => {},
  mergeMultiple: async (arrayValues1, arrayValues2) => {},
  removeMultiple: async keys => {},
  clear: async () => {}
};

export let PREVSTATES = {};

function isClassComponent (component) {
  return (
    component &&
    typeof component === 'function' &&
    !!component.prototype.isReactComponent
  );
}

export function useIsMounted () {
  const isMounted = useRef(false);
  const [, reload] = useState();

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  return isMounted.current;
}

function isFunctionComponent (component) {
  return (
    component &&
    typeof component === 'function' &&
    String(component).includes('return React.createElement')
  );
}

function isReactComponent (component) {
  return (
    (component && isClassComponent(component)) || isFunctionComponent(component)
  );
}

function isElement (element) {
  return element && React.isValidElement(element);
}

function isDOMTypeElement (element) {
  return element && isElement(element) && typeof element.type === 'string';
}

function isCompositeTypeElement (element) {
  return element && isElement(element) && typeof element.type === 'function';
}

function objectDiff (obj1, obj2) {
  // Make sure an object to compare is provided
  if (!obj2 || Object.prototype.toString.call(obj2) !== '[object Object]') {
    return obj1;
  }

  if (
    isClassComponent(obj2) ||
    isFunctionComponent(obj2) ||
    isReactComponent(obj2) ||
    isElement(obj2) ||
    isDOMTypeElement(obj2) ||
    isCompositeTypeElement(obj2)
  ) {
    return obj2;
  }

  //
  // Variables
  //

  var diffs = {};
  var key;

  var arraysMatch = function (arr1, arr2) {
    // Check if the arrays are the same length
    if (arr1.length !== arr2.length) return false;

    // Check if all items exist and are in the same order
    for (var i = 0; i < arr1.length; i++) {
      let t1 = Object.prototype.toString.call(arr1[i]);
      let t2 = Object.prototype.toString.call(arr2[i]);
      if (arr1[i] !== arr2[i]) {
        if (t1 == t2) {
          if (t1 == '[object Object]' && t2 == '[object Object]') {
            if(!objectEquals(arr1[i], arr2[i])) {
              return false;
            }
          } else if (t1 == '[object Array]' && t2 == '[object Array]') {
            return arraysMatch(arr1[i], arr2[i]);
          }
        }

        return false;
      }
    }

    // Otherwise, return true
    return true;
  };

  //
  // Compare our objects
  //
  var compare = function (item1, item2, key) {
    // Get the object type
    var type1 = Object.prototype.toString.call(item1);
    var type2 = Object.prototype.toString.call(item2);

    // If type2 is undefined it has been removed
    if (type2 === '[object Undefined]') {
      diffs[key] = null;
      return;
    }

    // If items are different types
    if (type1 !== type2) {
      diffs[key] = item2;
      return;
    }

    // If an object, compare recursively
    if (type1 === '[object Object]') {
      var objDiff = objectDiff(item1, item2);
      if (Object.keys(objDiff).length > 0) {
        diffs[key] = objDiff;
      }
      return;
    }

    // If an array, compare
    if (type1 === '[object Array]') {
      if (!arraysMatch(item1, item2)) {
        diffs[key] = item2;
      }
      return;
    }

    // Else if it's a function, convert to a string and compare
    // Otherwise, just compare
    if (type1 === '[object Function]') {
      if (item1.toString() !== item2.toString()) {
        diffs[key] = item2;
      }
    } else {
      if (item1 !== item2) {
        diffs[key] = item2;
      }
    }
  };

  // Loop through the first object
  for (key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      compare(obj1[key], obj2[key], key);
    }
  }

  // Loop through the second object and find missing items
  for (key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (!obj1[key] && obj1[key] !== obj2[key]) {
        diffs[key] = obj2[key];
      }
    }
  }

  // Return the object of differences
  return diffs;
}

function clone (item) {
  if (!item) {
    return item;
  } // null, undefined values check

  if (
    isClassComponent(item) ||
    isFunctionComponent(item) ||
    isReactComponent(item) ||
    isElement(item) ||
    isDOMTypeElement(item) ||
    isCompositeTypeElement(item)
  ) {
    return item;
  }

  var types = [Number, String, Boolean],
    result;

  // normalizing primitives if someone did new String('aaa'), or new Number('444');
  types.forEach(function (type) {
    if (item instanceof type) {
      result = type(item);
    }
  });

  if (typeof result == 'undefined') {
    if (Object.prototype.toString.call(item) === '[object Array]') {
      result = [];
      item.forEach(function (child, index, array) {
        result[index] = clone(child);
      });
    } else if (typeof item == 'object') {
      // testing that this is DOM
      if (item.nodeType && typeof item.cloneNode == 'function') {
        result = item.cloneNode(true);
      } else if (!item.prototype) {
        // check that this is a literal
        if (item instanceof Date) {
          result = new Date(item);
        } else {
          // it is an object literal
          result = {};
          for (var i in item) {
            result[i] = clone(item[i]);
          }
        }
      } else {
        // depending what you would like here,
        // just keep the reference, or create new object
        if (false && item.constructor) {
          // would not advice to do that, reason? Read below
          result = new item.constructor();
        } else {
          result = item;
        }
      }
    } else {
      result = item;
    }
  }

  return result;
}

function objectEquals (x, y) {
  if (x === null || x === undefined || y === null || y === undefined) {
    return x === y;
  }

  if (x.constructor !== y.constructor) {
    return false;
  }

  if (x instanceof Function) {
    return x === y;
  }

  if (x instanceof RegExp) {
    return x === y;
  }

  if (x === y || x.valueOf() === y.valueOf()) {
    return true;
  }

  if (Array.isArray(x) && x.length !== y.length) {
    return false;
  }

  if (x instanceof Date) {
    return false;
  }

  if (!(x instanceof Object)) {
    return false;
  }

  if (!(y instanceof Object)) {
    return false;
  }

  var p = Object.keys(x);

  return (
    Object.keys(y).every(function (i) {
      return p.indexOf(i) !== -1;
    }) &&
    p.every(function (i) {
      return objectEquals(x[i], y[i]);
    })
  );
}

export const genState = function (statename, full) {
  let res = null;
  if (full) {
    res = STATES[statename];
  } else {
    let statenameArr = statename.split('/');
    if (statenameArr.length === 2) {
      let storename = statenameArr[0];
      let statename = statenameArr[1];
      if (STATES[storename]) {
        if (!(statename in STATES[storename])) {
          console.warn(
            'Warning: ',
            `State ${statename} not exist in ${storename} store`
          );
          res = null;
        } else {
          res = STATES[storename][statename];
        }
      } else {
        console.warn('Warning: ', `State ${storename} not found`);
      }
    } else {
      if (!(statename in STATES.main)) {
        console.warn('Warning: ', `State ${statename} not exist in main store`);
        res = null;
      } else {
        // console.log(state.main)
        res = STATES.main[statename];
      }
    }
  }

  return res;
};

function genGetter (gettername) {
  let getternameArr = gettername.split('/');
  let res = null;
  if (getternameArr.length === 2) {
    let storename = getternameArr[0];
    let gettername = getternameArr[1];
    if (GETTERS[storename]) {
      if (
        !(gettername in GETTERS[storename]) ||
        typeof GETTERS[storename][gettername] != 'function'
      ) {
        console.error(
          'Warning: ',
          `Getter ${gettername} not exist in ${storename} store`
        );
        res = null;
      } else {
        res = GETTERS[storename][gettername](STATES[storename]);
      }
    } else {
      console.error('Warning: ', `Store ${storename} not found`);
    }
  } else {
    if (
      !(gettername in GETTERS.main) ||
      typeof GETTERS.main[gettername] != 'function'
    ) {
      console.error(
        'Warning: ',
        `Getter ${gettername} not exist in main store`
      );
      res = null;
    } else {
      // console.log(GETTERS.main, gettername, GETTERS.main[gettername](STATES.main))
      res = GETTERS.main[gettername](STATES.main);
    }
  }

  return res;
}

function genSetter (settername) {
  let setternameArr = settername.split('/');
  let res = null;
  if (setternameArr.length === 2) {
    let storename = setternameArr[0];
    let settername = setternameArr[1];
    if (SETTERS[storename]) {
      if (
        !(settername in SETTERS[storename]) ||
        typeof SETTERS[storename][settername] != 'function'
      ) {
        console.error(
          'Warning: ',
          `Setter ${settername} not exist in ${storename} store`
        );
        res = () => null;
      } else {
        let { commit, _getState, dispatch, state } = generateCDGS(storename);
        res = v => {
          return SETTERS[storename][settername](
            {
              commit: commit,
              getState: _getState,
              state: state,
              dispatch: dispatch
            },
            v
          );
        };
      }
    } else {
      console.error('Warning: ', `Store ${storename} not found`);
    }
  } else {
    // console.log(SETTERS.main, settername);
    if (
      !(settername in SETTERS.main) ||
      typeof SETTERS.main[settername] != 'function'
    ) {
      console.error(
        'Warning: ',
        `Setter ${settername} not exist in main store`
      );
      res = () => null;
    } else {
      let { commit, _getState, dispatch, state } = generateCDGS('main');

      res = v => {
        return SETTERS.main[settername](
          {
            commit: commit,
            getState: _getState,
            state: state,
            dispatch: dispatch
          },
          v
        );
      };
    }
  }

  return res;
}

function genMutation (mutationName) {
  let mutationNameArr = mutationName.split('/');
  let res = () => null;
  if (mutationNameArr.length === 2) {
    let storename = mutationNameArr[0];
    let mutationName = mutationNameArr[1];
    if (MUTATIONS[storename]) {
      if (
        !(mutationName in MUTATIONS[storename]) ||
        typeof MUTATIONS[storename][mutationName] != 'function'
      ) {
        console.error(
          'Warning: ',
          `Mutation ${mutationName} not exist in ${storename} store`
        );
        res = () => null;
      } else {
        res = v => Promise.resolve(mutate(storename, mutationName, v));
      }
    } else {
      console.error('Warning: ', `Store ${storename} not found`);
    }
  } else {
    // console.log(MUTATIONS.main, mutationName);
    if (
      !(mutationName in MUTATIONS.main) ||
      typeof MUTATIONS.main[mutationName] != 'function'
    ) {
      console.error(
        'Warning: ',
        `Mutation ${mutationName} not exist in main store`
      );
      res = () => null;
    } else {
      res = v => Promise.resolve(mutate('main', mutationName, v));
    }
  }

  return res;
}

let mutate = async (storename, _type, payload) => {
  if (
    !(
      MUTATIONS[storename][_type] ||
      typeof MUTATIONS[storename][_type] == 'function'
    )
  ) {
    return console.error(
      'Warning: ',
      `Mutation ${_type} not found in ${storename} Store`
    );
  }

  let state = STATES[storename];
  let saveState = clone(state);
  let { commit, _getState, dispatch, state: _state } = generateCDGS(storename);

  if (
    HOOKS[storename] &&
    HOOKS[storename].beforeUpdate &&
    typeof HOOKS[storename].beforeUpdate == 'function'
  ) {
    await HOOKS[storename].beforeUpdate(state, genState);
  }

  let r = await MUTATIONS[storename][_type](state, payload, {
    commit: commit,
    getState: _getState,
    state: _state,
    dispatch: dispatch
  });

  let isEqual = objectEquals(saveState, state);

  // console.log(2, 'prnt', isEqual, saveState, state);

  if (!isEqual) {
    let diff = objectDiff(saveState, state);

    console.log('prnt', isEqual, diff);
    // alert(JSON.stringify({ isEqual, diff }));

    for (let k in diff) {
      if (
        HOOKS[storename] &&
        HOOKS[storename][k] &&
        typeof HOOKS[storename][k] == 'function'
      ) {
        await HOOKS[storename][k](state, genState);
      }
    }

    if (
      HOOKS[storename] &&
      HOOKS[storename].afterUpdate &&
      typeof HOOKS[storename].afterUpdate == 'function'
    ) {
      await HOOKS[storename].afterUpdate(state, genState);
    }
    // for(let key in SMOUNTED){
    // 	for(let cname in USESTATE){
    // 		if(cname != key){
    // 			delete USESTATE[cname]['getter'];
    // 		}
    // 	}
    // }

    for (let name in diff) {
      let key = storename + '/' + name;
      genSetState(key)(state[name]);

      STORAGE.store(
        'bagheram',
        JSON.stringify(STATES, function (key, value) {
          if (typeof value === 'function') {
            return value.toString();
          } else {
            return value;
          }
        })
      );

      // console.log( key, USESTATE);

      for (let cname in USESTATE) {
        // console.log(USESTATE[cname], cname, state[name]);
        // console.log('prnt', {SMOUNTED, USESTATE, cname});
        if (
          /*SMOUNTED[cname] && */ USESTATE[cname]['getter'] &&
          USESTATE[cname]['getter'][key]
        ) {
          //mutation
          // console.log('prnt', '>>>>>>>>>>>>>>>>' , {SMOUNTED, cname, USESTATE, key, name, value: state[name]});
          try {
            throw USESTATE[cname]['getter'][key](state[name]);
          } catch (e) {
            // console.log('prnt',{eeeeeeee: e});
          }
        }

        // for(let _callerName in USESTATE){
        // 	if( !(_callerName in SMOUNTED) ){
        // 		delete USESTATE[_callerName];
        // 	}
        // }

        // console.log('prnt', '::::::::::::::' , USESTATE);
      }
    }
  }

  return r;
};

function generateCDGS (storename) {
  let commit = (_type, payload, option) => {
    if (option && option.root) {
      let dispatchSplit = _type.split('/');

      if (dispatchSplit.length === 2) {
        let storename = dispatchSplit[0];
        let mutationName = dispatchSplit[1];

        if (!MUTATIONS[storename] || !(mutationName in MUTATIONS[storename])) {
          console.error(
            'Warning: ',
            `Mutation ${mutationName} not found in ${storename} Store`
          );
        } else {
          return Promise.resolve(mutate(storename, mutationName, payload));
        }
      } else {
        if (!MUTATIONS.main || !(_type in MUTATIONS.main[_type])) {
          console.error(
            'Warning: ',
            `Mutation ${_type} not found in main Store`
          );
        }

        return Promise.resolve(mutate('main', _type, payload));
      }
    } else {
      return Promise.resolve(mutate(storename, _type, payload));
    }
  };

  let _getState = (_state, option) => {
    if (option && option.root) {
      return genState(_state, option.full);
    } else {
      return genState(storename + '/' + _state);
    }
  };

  let dispatch = (_setter, payload, option) => {
    if (option && option.root) {
      return Promise.resolve(genSetter(_setter)(payload));
    } else {
      return Promise.resolve(genSetter(storename + '/' + _setter)(payload));
    }
  };

  let state = STATES[storename];

  return {
    commit,
    _getState,
    dispatch,
    state
  };
}

function genSetState (statename) {
  let statenameArr = statename.split('/');
  let res = null;
  if (statenameArr.length === 2) {
    let storename = statenameArr[0];
    let statename = statenameArr[1];
    if (STATES[storename]) {
      if (!(statename in STATES[storename])) {
        console.error(
          'Warning: ',
          `State ${statename} not exist in ${storename} store`
        );
        res = null;
      } else {
        res = v => (STATES[storename][statename] = v);
      }
    } else {
      console.error('Warning: ', `State ${storename} not found`);
    }
  } else {
    if (!(statename in STATES.main)) {
      console.error('Warning: ', `State ${statename} not exist in main store`);
      res = null;
    } else {
      // console.log(state.main)
      res = v => (STATES.main[statename] = v);
    }
  }

  return res;
}

function uuidv4 () {
  return 'xyxy'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function formatStates (states) {
  let res = { ...states, ...states.main };
  delete res.main;

  return res;
}

export const useHstate = (name, funcName, sep, useGetters = true) => {
  let state,
    setState,
    set,
    _name_ = name;

  if (name.split('/').length == 1) {
    _name_ = 'main/' + name;
  }

  if (!USESTATE[funcName]) {
    USESTATE[funcName] = {};
    _STATES_[funcName] = {};
    _USESTATE_[funcName] = {};
  }

  if (!USESTATE[funcName][sep]) {
    USESTATE[funcName][sep] = {};
    _STATES_[funcName][sep] = {};
    _USESTATE_[funcName][sep] = {};
  }

  if (!USESTATE[funcName][sep]) {
    USESTATE[funcName][sep] = {};
    _STATES_[funcName][sep] = {};
    _USESTATE_[funcName][sep] = {};
  }

  [state, setState] = useState(useGetters ? genGetter(name) : genState(name));
  set = genSetState(name);

  let mounted = false;
  let index = -1;

  useEffect(() => {
    mounted = true;

    if (!USESTATE[funcName][sep][_name_]) {
      USESTATE[funcName][sep][_name_] = setState;
      _STATES_[funcName][sep][_name_] = state;
    }

    if (!_USESTATE_[funcName][sep][_name_]) {
      _USESTATE_[funcName][sep][_name_] = [];
    } else {
      _USESTATE_[funcName][sep][_name_].push(setState);
      index = _USESTATE_[funcName][sep][_name_].length - 1;
    }

    // console.log('prnt', '>>>>>>>>>> MOUNTED >>>>>>>>>>', funcName, _name_, _STATES_[funcName]['getter'][_name_], _USESTATE_[funcName][sep][_name_], {fffff: USESTATE[funcName][sep][_name_]});

    if (_USESTATE_[funcName][sep][_name_].length > 0) {
      let _setState = USESTATE[funcName][sep][_name_];

      USESTATE[funcName][sep][_name_] = v => {
        for (let index in _USESTATE_[funcName][sep][_name_]) {
          let fn = _USESTATE_[funcName][sep][_name_][index];
          fn(v);
        }

        _setState(v);
      };
    }

    return () => {
      mounted = false;
      if (
        index > -1 &&
        _USESTATE_[funcName][sep][_name_] &&
        _USESTATE_[funcName][sep][_name_].length > 0
      ) {
        _USESTATE_[funcName][sep][_name_].splice(index, 1);

        let _setState = USESTATE[funcName][sep][_name_];

        USESTATE[funcName][sep][_name_] = v => {
          for (let index in _USESTATE_[funcName][sep][_name_]) {
            let fn = _USESTATE_[funcName][sep][_name_][index];
            fn(v);
          }

          _setState(v);
        };

        index = 0;
      } else {
        delete USESTATE[funcName][sep][_name_];
        // _STATES_[funcName][sep][_name_] = null;
        delete _USESTATE_[funcName][sep][_name_];
      }

      // console.log('prnt', {index},'>>>>>>>>>> DESTROY >>>>>>>>>>', funcName, _name_, _STATES_[funcName]['getter'][_name_]);
    };
  }, []);

  return [
    state,
    v => {
      set(v);
      for (let cname in USESTATE) {
        // console.log(USESTATE[cname], cname, sep, name, USESTATE[cname][sep] && USESTATE[cname][sep][name]);
        if (USESTATE[cname]['getter'] && USESTATE[cname]['getter'][name]) {
          //mutation
          console.log(USESTATE[cname]['getter']);
          USESTATE[cname]['getter'][name](v);
        }
      }
    }
  ];
};

export const mapStates = stateDemand => {
  stateDemand = stateDemand || 'main';
  let res = {};
  let type = Object.prototype.toString.call(stateDemand);
  let callerName;
  try {
    throw new Error();
  } catch (e) {
    var re = /(.+?)@|at (.+?) \(/g,
      st = e.stack,
      m;
    // var re = /(\w+)@|at (\w+) \(/g, st = e.stack, m;
    re.exec(st);
    m = re.exec(st);
    callerName = m[1] || m[2];
  }

  // callerName = callerName + '_' + uuidv4();

  if (type == '[object Object]') {
    res = Object.entries(stateDemand).reduce(
      (acc, [key, state]) => ({
        ...acc,
        [key]: useHstate(state, callerName, 'getter', false)[0]
      }),
      {}
    );
  } else if (type == '[object Array]') {
    res = stateDemand.reduce((acc, state) => {
      acc.push(useHstate(state, callerName, 'getter', false)[0]);
      return acc;
    }, []);
  } else if (type == '[object String]') {
    if (stateDemand in STATES) {
      res = Object.entries(STATES[stateDemand]).reduce(
        (acc, [key, state]) => ({
          ...acc,
          [key]: useHstate(
            stateDemand + '/' + key,
            callerName,
            'getter',
            false
          )[0]
        }),
        []
      );
    } else {
      res = [stateDemand].reduce((acc, state) => {
        acc.push(useHstate(state, callerName, 'getter', false)[0]);
        return acc;
      }, [])[0];
    }
  }

  return res;
};

export const mapActions = actionDemand => {
  actionDemand = actionDemand || 'main';
  let res = {};
  let type = Object.prototype.toString.call(actionDemand);
  let callerName;
  try {
    throw new Error();
  } catch (e) {
    var re = /(.+?)@|at (.+?) \(/g,
      st = e.stack,
      m;
    // var re = /(\w+)@|at (\w+) \(/g, st = e.stack, m;
    re.exec(st);
    m = re.exec(st);
    callerName = m[1] || m[2];
  }

  // callerName = callerName + '_' + uuidv4();

  if (type == '[object Object]') {
    res = Object.entries(actionDemand).reduce(
      (acc, [key, action]) => ({
        ...acc,
        [key]: genSetter(action)
      }),
      {}
    );
  } else if (type == '[object Array]') {
    res = actionDemand.reduce((acc, action) => {
      acc.push(genSetter(action));
      return acc;
    }, []);
  } else if (type == '[object String]') {
    if (actionDemand in SETTERS) {
      res = Object.entries(SETTERS[actionDemand]).reduce(
        (acc, [key, action]) => ({
          ...acc,
          [key]: genSetter(actionDemand + '/' + key)
        }),
        []
      );
    } else {
      res = genSetter(actionDemand);
    }
  }

  return res;
};

export const mapMutations = mutationDemand => {
  mutationDemand = mutationDemand || 'main';
  let res = {};
  let type = Object.prototype.toString.call(mutationDemand);
  let callerName;
  try {
    throw new Error();
  } catch (e) {
    var re = /(.+?)@|at (.+?) \(/g,
      st = e.stack,
      m;
    // var re = /(\w+)@|at (\w+) \(/g, st = e.stack, m;
    re.exec(st);
    m = re.exec(st);
    callerName = m[1] || m[2];
  }

  // callerName = callerName + '_' + uuidv4();

  if (type == '[object Object]') {
    res = Object.entries(mutationDemand).reduce(
      (acc, [key, mutation]) => ({
        ...acc,
        [key]: genMutation(mutation)
      }),
      {}
    );
  } else if (type == '[object Array]') {
    res = mutationDemand.reduce((acc, mutation) => {
      acc.push(genMutation(mutation));
      return acc;
    }, []);
  } else if (type == '[object String]') {
    if (mutationDemand in MUTATIONS) {
      res = Object.entries(MUTATIONS[mutationDemand]).reduce(
        (acc, [key, mutation]) => ({
          ...acc,
          [key]: genMutation(mutationDemand + '/' + key)
        }),
        {}
      );
    } else {
      res = [mutationDemand].reduce((acc, mutation) => {
        acc.push(genMutation(mutation));
        return acc;
      }, [])[0];
    }
  }

  return res;
};

export const mapGetters = getterDemand => {
  getterDemand = getterDemand || 'main';
  let res = {};
  let type = Object.prototype.toString.call(getterDemand);
  let callerName;
  try {
    throw new Error();
  } catch (e) {
    var re = /(.+?)@|at (.+?) \(/g,
      st = e.stack,
      m;
    // var re = /(\w+)@|at (\w+) \(/g, st = e.stack, m;
    re.exec(st);
    m = re.exec(st);
    callerName = m[1] || m[2];
  }

  // callerName = callerName + '_' + uuidv4();

  if (type == '[object Object]') {
    res = Object.entries(getterDemand).reduce(
      (acc, [key, gettername]) => ({
        ...acc,
        [key]: useHstate(gettername, callerName, 'getter')[0]
      }),
      {}
    );
  } else if (type == '[object Array]') {
    res = getterDemand.reduce((acc, gettername) => {
      acc.push(useHstate(gettername, callerName, 'getter')[0]);
      return acc;
    }, []);
  } else if (type == '[object String]') {
    if (getterDemand in GETTERS) {
      res = Object.entries(GETTERS[getterDemand]).reduce(
        (acc, [key, gettername]) => ({
          ...acc,
          [key]: useHstate(getterDemand + '/' + key, callerName, 'getter')[0]
        }),
        {}
      );
    } else {
      res = [getterDemand].reduce((acc, gettername) => {
        acc.push(useHstate(gettername, callerName, 'getter')[0]);
        return acc;
      }, [])[0];
    }
  }

  return res;
};

export const dispatch = (_setter, payload) => {
  if (_setter.split('/').length == 1) {
    _setter = 'main/' + _setter;
  }

  return Promise.resolve(genSetter(_setter)(payload));
};

export const commit = (_type, payload) => {
  let dispatchSplit = _type.split('/');

  if (dispatchSplit.length === 2) {
    let storename = dispatchSplit[0];
    let mutationName = dispatchSplit[1];

    if (!MUTATIONS[storename] || !(mutationName in MUTATIONS[storename])) {
      console.error(
        'Warning: ',
        `Mutation ${mutationName} not found in ${storename} Store`
      );
    } else {
      return Promise.resolve(mutate(storename, mutationName, payload));
    }
  } else {
    if (!MUTATIONS.main || !(_type in MUTATIONS.main[_type])) {
      console.error('Warning: ', `Mutation ${_type} not found in main Store`);
    }

    return Promise.resolve(mutate('main', _type, payload));
  }
};

export const state = { ...formatStates(STATES) };

function loadStore (_stores_) {
  _STORES_ = _stores_;
  STORES = {
    main: _stores_,
    ...(_stores_.modules || {})
  };

  for (let name in STORES) {
    if (STORES[name].hooks) {
      HOOKS[name] = {};

      for (let key in STORES[name].hooks) {
        HOOKS[name][key] = state => STORES[name].hooks[key](state, genState);
      }

      if (STORES[name].hooks.afterUpdate) {
        HOOKS[name].afterUpdate = state =>
          STORES[name].hooks.afterUpdate(state, genState);
      }

      if (STORES[name].hooks.beforeUpdate) {
        HOOKS[name].beforeUpdate = state =>
          STORES[name].hooks.beforeUpdate(state, genState);
      }
    }
    if (STORES[name].getters) {
      GETTERS[name] = {};

      for (let key in STORES[name].getters) {
        GETTERS[name][key] = state =>
          STORES[name].getters[key](state, genState);
      }
    }
    if (typeof STORES[name].state == 'function') {
      STATES[name] = STORES[name].state();
    } else {
      STATES[name] = STORES[name].state;
    }

    SETTERS[name] = STORES[name].actions;
    MUTATIONS[name] = STORES[name].mutations;
  }

  if (STORAGE.use) {
    STORAGE.store(
      'bagheram',
      JSON.stringify(STATES, function (key, value) {
        if (typeof value === 'function') {
          return value.toString();
        } else {
          return value;
        }
      })
    );
  }
}

const store = _stores_ => {
  loadStore(_stores_);
  return Provider;
};

export function useForceUpdate () {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick(tick => tick + 1);
  }, []);
  return update;
}

export function init (OBJ = {}, cb) {
  // USESTATE = {};
  console.log('::::::>>>>>>>::::::>>>>>>:::::', { OBJ });
  STORES = {
    main: _STORES_,
    ...(_STORES_.modules || {})
  };

  for (let name in STORES) {
    if (STORES[name].hooks) {
      HOOKS[name] = {};

      for (let key in STORES[name].hooks) {
        HOOKS[name][key] = state => STORES[name].hooks[key](state, genState);
      }

      if (STORES[name].hooks.afterUpdate) {
        HOOKS[name].afterUpdate = state =>
          STORES[name].hooks.afterUpdate(state, genState);
      }

      if (STORES[name].hooks.beforeUpdate) {
        HOOKS[name].beforeUpdate = state =>
          STORES[name].hooks.beforeUpdate(state, genState);
      }
    }
    if (STORES[name].getters) {
      GETTERS[name] = {};

      for (let key in STORES[name].getters) {
        GETTERS[name][key] = state =>
          STORES[name].getters[key](state, genState);
      }
    }

    if (OBJ == true) {
      console.log(
        '++++++++ //////// ++++++++',
        name,
        typeof STORES[name].state == 'function'
          ? STORES[name].state()
          : STORES[name].state
      );
      STATES[name] = {
        ...(typeof STORES[name].state == 'function'
          ? STORES[name].state()
          : STORES[name].state)
      };
    } else {
      if (typeof STORES[name].state == 'function') {
        STATES[name] =
          OBJ[name] && OBJ[name].state && typeof OBJ[name].state == 'function'
            ? OBJ[name].state()
            : STORES[name].state();
      } else {
        STATES[name] =
          OBJ[name] && OBJ[name].state
            ? OBJ[name] && OBJ[name].state
            : STORES[name].state;
      }
    }
    SETTERS[name] = STORES[name].actions;
    MUTATIONS[name] = STORES[name].mutations;
  }
  console.log('prnt', { USESTATE, STATES });
  if (typeof cb == 'function') {
    cb();
  }
}

const Provider = props => {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    INIT = OBJ => init(OBJ, forceUpdate);
  }, []);

  console.log('Init Reex Component');

  return <>{props.children}</>;
};

const usePersist = async AsyncStorage => {
  if (!AsyncStorage) {
    console.warn('Warning: ', `AsyncStorage required argument 0`);
    return;
  }
  STORAGE = {
    use: true,
    get: async key => {
      try {
        return await AsyncStorage.getItem(key);
      } catch (e) {
        // read error
      }

      console.log('Done.');
    },
    store: async (key, value) => {
      try {
        const jsonValue =
          typeof value === 'object' ? JSON.stringify(value) : value;
        await AsyncStorage.setItem(key, jsonValue);
      } catch (e) {
        // save error
      }
    },
    merge: async (key, value1, value2) => {
      try {
        await AsyncStorage.setItem(key, JSON.stringify(value1));

        await AsyncStorage.mergeItem(key, JSON.stringify(value2));

        const newValue = await AsyncStorage.getItem(key);

        console.log(newValue);
      } catch (e) {}
    },
    remove: async key => {
      try {
        await AsyncStorage.removeItem(key);
      } catch (e) {
        // remove error
      }

      console.log('Done.');
    },
    getAllKeys: async () => {
      let keys = [];
      try {
        keys = await AsyncStorage.getAllKeys();
      } catch (e) {
        // read key error
      }

      console.log(keys);
    },
    getAll: async (keys = []) => {
      let values;
      try {
        values = await AsyncStorage.multiGet(keys);
      } catch (e) {
        // read error
      }
      console.log(values);
    },
    storeMultiple: async arrayValues => {
      try {
        await AsyncStorage.multiSet(arrayValues);
      } catch (e) {
        //save error
      }

      console.log('Done.');
    },
    mergeMultiple: async (arrayValues1, arrayValues2) => {
      let currentlyMerged;

      try {
        await AsyncStorage.multiSet(arrayValues1);
        await AsyncStorage.multiMerge(arrayValues2);
        currentlyMerged = await AsyncStorage.multiGet(
          arrayValues1.map(v => v[0])
        );
      } catch (e) {
        // error
      }

      console.log(currentlyMerged);
    },
    removeMultiple: async keys => {
      try {
        await AsyncStorage.multiRemove(keys);
      } catch (e) {
        // remove error
      }

      console.log('Done');
    },
    clear: async () => {
      try {
        await AsyncStorage.clear();
      } catch (e) {
        // clear error
      }

      console.log('Done.');
    }
  };
  try {
    PREVSTATES = await STORAGE.get('bagheram');
    PREVSTATES = JSON.parse(PREVSTATES);
    STATES = PREVSTATES;
  } catch (e) {
    PREVSTATES = {};
  }
};

export default {
  store,
  usePersist,
  mapStates,
  mapActions,
  mapMutations,
  mapGetters,
  dispatch,
  getState: genState,
  commit,
  state,
  useIsMounted,
  init: init
};
