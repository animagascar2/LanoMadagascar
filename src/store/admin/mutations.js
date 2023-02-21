export function set_AddAdmin(state,v) {
    const admin = [...state.admin];
    admin.push(v);
    state.admin = [...admin];
    console.log(state.admin);
}
export function set_indiceAdmin(state,v) {
    state.IndiceAdmin = v;
}
export function set_deleteAdmin(state,v) {
    const admin = [...state.admin];
    admin.splice(v,1);
    state.admin = [...admin];
}
export function set_updateAdmin(state,{v,x}) {
    const admin = [...state.admin];
    admin[v] = x;
    state.admin = [...admin];
    console.log(state.admin);
}