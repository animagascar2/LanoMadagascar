import React, { useRef, useState } from 'react';
import { mapGetters, mapActions } from '../../../store/reex';
import ListAdmin from './ListAdmin';

function GestionAdmin (props) {
    const admin = mapGetters('admin/admin');
    const [ nameA, setNameA ] = useState("");
    const [ mtpA, setMtpA ] = useState("");
    const [ modif, setModif ] = useState(false);
    const inputNameAdmin = useRef();
    const inputPasswordAdmin = useRef();
    const AddAdmin = mapActions('admin/AddAdmin');
    const updateAdmin = mapActions('admin/updateAdmin');
    const IndiceAdmin = mapGetters('admin/IndiceAdmin');
    const inputSearch = useRef();
    const [valueSearch, setvalueSearch ] = useState("");
    function search(){
        setvalueSearch(inputSearch.current.value);
    }
    function fsaveAdmin(){
        if (modif) {
            modifier();
        }else{
            ajouter();
        }
    }
    function ajouter(){
        if ( (inputNameAdmin.current.value !== "") && (inputPasswordAdmin.current.value !== "") ){
            alert('ampidirina')
            const AdminAd = {};
            AdminAd.nameA = inputNameAdmin.current.value;
            AdminAd.mtpA = inputPasswordAdmin.current.value;
            AddAdmin(AdminAd);
            inputNameAdmin.current.value = "";
            inputPasswordAdmin.current.value = "";
        }else{
            alert('complete')
        }
    }
    function modifier() {
        const adminUp = [...admin] ;
        adminUp[IndiceAdmin].nameA = inputNameAdmin.current.value;
        adminUp[IndiceAdmin].mtpA = inputPasswordAdmin.current.value;
        updateAdmin({v: IndiceAdmin, x: adminUp[IndiceAdmin]});
        inputNameAdmin.current.value = "";
        inputPasswordAdmin.current.value = "";
        alert("modified")
        setModif(false)
    }
    function annuler(){
        inputNameAdmin.current.value = "";
        inputPasswordAdmin.current.value = "";
    }

    return (
        <div className='row m-5'>
            <div className='p-2'>
                <div className='d-flex'>
                    <h1 className='text-info'>ADMIN</h1>
                    <div className='col-3  m-2 d-flex '>
                        <input className='form-control border border-danger' onChange={search} ref={inputSearch} type='text' placeholder='search' ></input><button className='btn btn-danger disabled'><i className="fa fa-search">search</i></button>
                    </div>
                </div>
                <form className='col-lg-6 my-2'>
                    <div className='form-group my-4'>
                        <input type="text" ref={inputNameAdmin} defaultValue={nameA} className="form-control mx-2"placeholder='Enter name'/>
                    </div>
                    <div className='form-group my-4'>
                        <input type="text" ref={inputPasswordAdmin} defaultValue={mtpA} className="form-control mx-2" placeholder='Enter password' />
                    </div>
                    <span className='d-flex'>
                        <div className="btn btn-success" onClick={fsaveAdmin} > Save <i className="fa fa-save"></i></div>
                        <div className="btn btn-danger mx-5" onClick={annuler} >Cancel</div>
                    </span>
                </form >
            </div>
            <div className='p-2'>
                <table className='table table-dark table-striped'>
                    <thead><tr><th>Name</th><th>Password</th><th>Action</th></tr></thead>
                        <tbody id="table">
                            {admin.map( (admin1, i) => {
                                if(valueSearch !== ""){
                                    var tname = admin[i].nameA;
                                    tname = tname.toLowerCase();
                                    var texteSearch = valueSearch.toLowerCase();
                                    if(tname.indexOf(texteSearch) > -1){
                                        return <ListAdmin admin ={admin1} indice={i}  key={i} setNameA = {(v) => {setModif(true); inputNameAdmin.current.value =v ; setNameA(v)}} setMtpA = {(v) => {setModif(true); inputPasswordAdmin.current.value =v ; setMtpA(v)}}  />
                                    }
                                }else{
                                    return <ListAdmin admin ={admin1} indice={i}  key={i} setNameA = {(v) => {setModif(true); inputNameAdmin.current.value =v ; setNameA(v)}} setMtpA = {(v) => {setModif(true); inputPasswordAdmin.current.value =v ; setMtpA(v)}}  />
                                }
                            })}
                        </tbody>
                </table>
            </div>
        </div>
            
    );
}

export default GestionAdmin ;