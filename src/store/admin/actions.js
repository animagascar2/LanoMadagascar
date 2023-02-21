export function AddAdmin ({ commit, getState }, v) {
    commit('set_AddAdmin', v)
}
export function setIndiceAdmin ({ commit, getState }, v) {
    commit('set_indiceAdmin', v)
}
export function deleteAdmin ({ commit, getState }, v) {
    commit('set_deleteAdmin', v)
}
export function updateAdmin ({ commit, getState },{ v,x}) {
    commit('set_updateAdmin',{ v,x})
}