import React, {} from 'react';
import { mapActions } from '../../../store/reex';

function ListUser (props) {
    const setIndiceUser = mapActions('user/setIndiceUser');
    const DeleteUser = mapActions('user/delUser');
    function funcDelUser(v){
        setIndiceUser(v);
        DeleteUser(v);
        alert('supression success');
    }
    return <tr>
                <td>{props.user.nameU}</td>
                <td >{props.user.mtp}</td>
                <td>
                    <div className="btn btn-danger" onClick={()=>funcDelUser(props.indice)}><i className="fa fa-trash"></i></div>
                </td>
            </tr>
}
export default ListUser;