import React, {} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import GestionCircuit from './GESTIONCIRCUIT/GestionCircuit';

function PageAdmin (props) {

    return <div className='row p-2 pb-0' >        
        <div className='col-lg-11 '>
            <Tabs defaultActiveKey="Circuit">
                <Tab eventKey="Circuit" title="Gestion Circuit">
                    <GestionCircuit/>
                </Tab>
                <Tab eventKey="Product" title="Gestion Product">
                    {/* <GestionProduct /> */}
                </Tab>
                <Tab eventKey="Admin" title="Gestion admin">
                    {/* <GestionAdmin /> */}
                </Tab>
            </Tabs>
        </div>
        <Link className='col-lg-1' to={'/'} >
            <Button  className='btn-primary'>Log Out <i className="fa fa-user"></i></Button>
        </Link>   
            
    </div>
}
export default PageAdmin;