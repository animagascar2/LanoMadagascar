import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Box } from 'native-base';

import ListeCircuitPageAcuueil from './GESTIONCIRCUIT/ListeCircuitPageAcuueil';
import ListeCircuit from './GESTIONCIRCUIT/ListeCircuit'; 

import AddCircuit from './GESTIONCIRCUIT/AddCircuit';
import GestionAdmin from './GESTIONADMIN/GestionAdmin';
import GestionUser from './GESTIONUSER/GestionUser'

function PageAdmin() {
  return (
    <Box >
      <Tabs
      defaultActiveKey="circuit"
      className="mb-3"
      fill
    >
      <Tab eventKey="circuit" title="Gestion Circuit">
          <Tabs
          defaultActiveKey="Liste"
          className="mb-3"
          fill
        >
          <Tab eventKey="insert" title="Insertion nouveau Circuit">
            <AddCircuit />
          </Tab>
          <Tab eventKey="Liste" title="Liste Circuit">
            
            <ListeCircuit />
          </Tab>
          <Tab eventKey="Page d'accueil" title="Page d'accueil">
            <ListeCircuitPageAcuueil />
          </Tab>
        </Tabs>
      </Tab>
      <Tab eventKey="admin" title="Gestion Admin">
        
        <GestionAdmin />
      </Tab>
      <Tab eventKey="user" title="Gestion User">
        
        <GestionUser />
      </Tab>
    </Tabs>

    </Box>
  );
}

export default PageAdmin;