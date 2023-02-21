import React, {} from 'react';
import { mapGetters, mapActions } from '../../../store/reex';
import { Link } from 'react-router-dom';

function ListAdmin (props) {
    const setIndiceAdmin = mapActions('admin/setIndiceAdmin');
    const deleteAdmin = mapActions('admin/deleteAdmin');
    
    function funcDelAdmin(v){
        setIndiceAdmin(v);
        deleteAdmin(v);
        props.setNameA ("");
        props.setMtpA ("");
        console.log(v)
    }
    function update(indice) {
        setIndiceAdmin(indice);
        props.setNameA (props.admin.nameA) 
        props.setMtpA (props.admin.mtpA)
    }
    return <tr>
                <td>{props.admin.nameA}</td>
                <td >{props.admin.mtpA}</td>
                <td>
                     <div className="btn btn-success mx-2" onClick={()=>update(props.indice)}>update</div>
                    <div className="btn btn-danger" onClick={()=>funcDelAdmin(props.indice)} ><i className="fa fa-trash"></i>delete</div>
                </td>
            </tr>
}
export default ListAdmin;