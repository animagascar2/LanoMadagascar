import axios from 'axios'
export function AddUser ({ commit, getState }, v) {
    commit('set_AddUser', v)
}
export function setIndiceUser ({ commit, getState }, v) {
    commit('set_indiceUser', v)
}
export function delUser ({ commit, getState }, v) {
    commit('set_delUser', v)
}
export function postUser ({ commit, getState }, v) {
    console.log('vvvvv', v)
    return new Promise((resolve, reject) => {
        axios
            .post('/add',v)
            .then((response) => {
                console.log(response.data)
                resolve(response.data);
            })
    })
}
export function getList ({ commit, getState }, v) {
    return new Promise((resolve, reject) => {
        axios.get('/lists')
        .then((response) => {
            commit('setList', response.data)
            resolve(response.data);
        })
    })
}
export function listRech ({ commit, getState }, v) {
    return new Promise((resolve, reject) => {
        axios.get(`/rech/${v}`)
        .then((response) => {
            resolve(response.data );
        })
    })
}
export function deleteUser ({ commit, getState }, v) {
    return new Promise((resolve, reject) => {
        axios
            .delete(`/delete/${v}`)
            .then((response) => {
                console.log(response.data)
                resolve(response.data);
            })
    })
}
export function updateUser ({ commit, getState }, v) {
    return new Promise((resolve, reject) => {
        axios
            .put(`/update/${v[0]}`, v[1] )
            .then((response) => {
                console.log(response.data)
                resolve(response.data);
            })
        
    })
}