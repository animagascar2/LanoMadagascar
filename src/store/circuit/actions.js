import axios from 'axios'
export function getConvertCurrency ({ commit, getState }, v) {

    return new Promise((resolve, reject) => {
        axios.get('https://api.fastforex.io/convert?from=USD&to='+v+'&amount=1&api_key=cce299f959-06bef9d9f9-rq8822')
        .then((response) => {
            const result = response.data.result
            resolve(result); 
        })
    })
}
export function setMoneyCurrent ({ commit }, v) {
    commit('set_MoneyCurrent', v)
}

export function getList ({ commit, getState }, v) {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost/LANO/Liste.php')
        .then((response) => {
            commit('setListCircuit', response.data)
            resolve(response.data);
        })
    })
}
export function postModifCircuit ({ commit, getState }, v) {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost/LANO/Modif.php',v)
        .then((response) => {
            resolve(response.data);
        })
    })
}
export function postCircuit ({ commit, getState }, v) {
    return new Promise((resolve, reject) => {
        axios
            .post('http://localhost/LANO/Add.php',v)
            .then((response) => {
                console.log(response.data)
                resolve(response.data);
            })
    })
}
export function postCircuitPrincipal ({ commit, getState }, v) {
    return new Promise((resolve, reject) => {
        axios
            .post('http://localhost/LANO/AddCircuitPrincipal.php',v)
            .then((response) => {
                resolve(response.data);
            })
    })
}
export function getListPrincipal ({ commit, getState }, v) {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost/LANO/ListePrincipal.php')
        .then((response) => {
            commit('setListCircuitPrincipal', response.data)
            resolve(response.data);
        })
    })
}
export function deleteCircuit ({ commit, getState }, v) {
    return new Promise((resolve, reject) => {
        axios
            .post('http://localhost/LANO/Delete.php',v)
            .then((response) => {
                resolve(response.data);
            })
    })
}