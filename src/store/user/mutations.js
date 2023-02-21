export function set_AddUser(state,v) {
    const ListUser = [...state.ListUser];
    ListUser.push(v);
    state.ListUser = [...ListUser];
    console.log(ListUser)
}
export function set_indiceUser(state,v) {
    state.set_indiceUser = v;
}
export function set_delUser(state,v) {
    const ListUser = [...state.ListUser];
    ListUser.splice(v,1);
    state.ListUser = [...ListUser];
}
export function setList(state, v) {
    state.ListUser = [...v];
}
