import axios from 'axios'

export function getList ({ commit, getState }, v) {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost/LANO/')
        .then((response) => {
            commit('setListCircuit', response.data)
            resolve(response.data);
        })
    })
}
export function postCircuit ({ commit, getState }, v) {
    return new Promise((resolve, reject) => {
        axios
            .post('http://localhost/LANO/',v)
            .then((response) => {
                console.log(response.data)
                resolve(response.data);
            })
    })
}