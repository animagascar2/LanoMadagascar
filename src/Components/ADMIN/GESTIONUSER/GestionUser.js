import React, { useRef, useState } from 'react';
import { mapGetters } from '../../../store/reex';
import ListUser from './ListUser';

function GestionUser (props) {
    const user = mapGetters('user/ListUser');
    const inputSearch = useRef();
    const [valueSearch, setvalueSearch ] = useState("");

    function search(){
        setvalueSearch(inputSearch.current.value);
    }
    return (
        <div className='m-5'>
            <div className='row'>
                <h1 className='col-2 mx-1 text-info'>USER</h1>
                <div className='col-4 m-2 d-flex '>
                    <input className='form-control border border-danger' onChange={search} ref={inputSearch} type='text' placeholder='search' ></input><button className='btn btn-danger disabled'><i className="fa fa-search "></i></button>
                </div>
            </div>
            <div className='col-lg-6 p-2'>
                <table className='table table-dark table-striped'>
                    <thead><tr><th>Name</th><th>Password</th><th>Action</th></tr></thead>
                        <tbody id="table">
                            {user.map( (user1, i) => {
                                if(valueSearch !== ""){
                                    var tname = user[i].nameU;
                                    tname = tname.toLowerCase();
                                    var texteSearch = valueSearch.toLowerCase();
                                    if(tname.indexOf(texteSearch) > -1){
                                        return <ListUser user={user1} indice={i}  key={i}  />
                                    }
                                }else{
                                    return <ListUser user={user1} indice={i}  key={i}  />
                                }
                                return null;
                            })}
                        </tbody>
                </table>
            </div>
        </div>
    );
}
export default GestionUser ;