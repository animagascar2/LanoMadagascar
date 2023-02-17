import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListeCircuitPageAcuueil from './GESTIONCIRCUIT/ListeCircuitPageAcuueil';
import ListeCircuit from './GESTIONCIRCUIT/ListeCircuit'; 

import AddCircuit from './GESTIONCIRCUIT/AddCircuit';

function PageAdmin() {
  return (
    <Tabs
      defaultActiveKey="Liste"
      id="fill-tab-example"
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
  );
}

export default PageAdmin;