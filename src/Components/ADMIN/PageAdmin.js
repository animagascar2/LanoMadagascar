import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Box,Heading } from 'native-base';

import ListeCircuitPageAcuueil from './GESTIONCIRCUIT/ListeCircuitPageAcuueil';
import ListeCircuit from './GESTIONCIRCUIT/ListeCircuit'; 

import AddCircuit from './GESTIONCIRCUIT/AddCircuit';
import GestionAdmin from './GESTIONADMIN/GestionAdmin';
import GestionUser from './GESTIONUSER/GestionUser';
import './Admin.css'

function PageAdmin() {
  return (
    <Box>
      <Box width="200px" bg='darkBlue.900' position='fixed' height="100%">
          <Box my='4'>
              <img src={require("../../Image/logo.png")} alt="" width={150}  />
          </Box>
          <Box py='10px' bg='tertiary.300'>
              
              <Heading fontWeight="500"
                      fontSize="16"
                      ml="20px"
                      lineHeight="24 px"
                      color="white"><i className="fa fa-pencil "></i> Gestion Circuit</Heading>
          </Box>
          <Box py='10px' bg='blueGray.700'>
              <Heading fontWeight="500"
                      fontSize="16"
                      lineHeight="24 px"
                      ml="20px"
                      color="white">Gestion Admin</Heading>
          </Box>
          <Box py='10px' bg='blueGray.700'>
              <Heading fontWeight="500"
                      fontSize="16"
                      lineHeight="24 px"
                      ml="20px"
                      color="white">Gestion User</Heading>
          </Box>
      </Box>
      <Box ml="200px" pl="4" zIndex={3} shadow={3}>
      <Tabs
          id = "tableau"
          defaultActiveKey="Liste"
          className="mb-3"
          fill
          
        >
          <Tab eventKey="insert" title="Nouveau">
            <AddCircuit />
          </Tab>
          <Tab eventKey="Liste" title="Listes">
            
            <ListeCircuit />
          </Tab>
          <Tab eventKey="Page d'accueil" title="Liste Accueil">
            <ListeCircuitPageAcuueil />
          </Tab>
        </Tabs>
      </Box>
    </Box>
  );
}

export default PageAdmin;