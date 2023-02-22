import './App.css';
import { Routes, Route } from 'react-router-dom';
import Accueil from './Components/ACCUEIL/Accueil';
import Paquets from './Components/PAQUETS/Paquets';
import Shop from './Components/SHOP/Shop';
import Shopproduct from './Components/SHOPPRODUCT/Shopproduct'
import Apropos from './Components/APROPOS/Apropos';
import DetailsProduct from './Components/SHOPPRODUCT/DetailsProduct';
import ContacterNous from './Components/APROPOS/ContacterNous';
import Detailsdestination from './Components/DETAILSDESTINATION/Detailsdestination';
import {
  NativeBaseProvider,
} from "native-base";
import Connexion from './Components/CONNEXION/Connexion';
import AOS from 'aos';
import Inscription from './Components/CONNEXION/Inscription';
import PageAdmin from './Components/ADMIN/PageAdmin';
import 'aos/dist/aos.css';
import axios from 'axios';

function App() {
  AOS.init({
    duration: 1200,
  })
  
  return (
    <NativeBaseProvider>
      
      <Routes>
        <Route path="/" element={<Accueil active="Accueil"/>} />
        <Route path="/Connexion" element={<Connexion/>} />
        <Route path="/Inscription" element={<Inscription/>} />
        <Route path="paquets" element={<Paquets active='Paquets' />} />
        <Route path="shop" element={<Shop active='Shop' />} />
        <Route path="/Shopproduct" element={<Shopproduct active='Shop'/>} />
        <Route path="/Shop/DetailsProduct" element={<DetailsProduct active='Shop'/>} />
        <Route path="/Apropos" element={<Apropos active='Apropos'/>} />
        <Route path="/Apropos/ContacterNous" element={<ContacterNous active='Apropos'/>} />
        <Route path="/:id" element={<Detailsdestination/>} />
        <Route path="Admin" element={<PageAdmin />} />
      </Routes>
      </NativeBaseProvider>

  );
}

export default App;

// // import React, { useState, useRef } from 'react';
// // import { mapGetters } from './store/reex';
// // import Modal from 'react-bootstrap/Modal';
// // // import Inscription from './Inscription';

// // function App (props) {
// //     const [showInscri, setShowInscri] = useState(false);
// //     const inputNameU = useRef();
// //     const ListUser = mapGetters('user/ListUser');
// //     const ListAdmin = mapGetters('admin/admin');
// //     const inputMtp = useRef();

// //     function FuncLogIn(){
// //         if ( (inputNameU.current.value !== "" && (inputMtp.current.value !== "" )) ){
// //             for( var i = 0; i < ListUser.length ; i++ ){
// //                 if(ListUser[i].nameU === inputNameU.current.value && ListUser[i].mtp === inputMtp.current.value){
// //                     props.setShowConnex(false)
// //                     alert('You are connected')
// //                 }else{
// //                     // alert('vous n\'êtes pas encore inscris')
// //                     for( var i = 0; i < ListAdmin.length ; i++ ){
// //                         if(ListAdmin[i].nameA === inputNameU.current.value && ListAdmin[i].mtpA === inputMtp.current.value){
// //                             props.setShowConnex(false)
// //                             window.open("/PageAdmin",'_blank');
// //                             alert('Admin access')
// //                         }else{
// //                             alert('vous n\'êtes pas encore inscris')
// //                         }  
// //                     }
// //                 }
// //             }
// //         }else{
// //             alert('Enter user name and password!')
// //         }
// //     }

// //     return ( 
// //         <Modal show ={true} onHide={() => props.setShowConnex(false)} >
// //             <Modal.Body >
// //                 <div className='d-flex justify-content-end'>
// //                     <div className="btn btn-danger mx-5 " onClick={() => props.setShowConnex(false)}><i className="fa fa-times"></i></div>
// //                 </div>
// //                 <h1 className='text-center text-danger'><b>Connexion</b> <i className="fa fa-user"></i></h1>
// //                 <form className='text-center m-5'>
// //                     <div className='form-group'>
// //                         <input type='text' ref={inputNameU} className='form-control' placeholder='User'/>
// //                     </div>
// //                     <div className='form-group my-4'>
// //                         <input type='password'ref={inputMtp} className='form-control' placeholder='Password'/>
// //                     </div>
// //                     <div className='form-group my-4'>
// //                         <span onClick={FuncLogIn} className='btn btn-danger form-control'>Log in</span>
// //                     </div>
// //                     <div className='form-group my-4'>
// //                         <span className='btn btn-success' onClick={() => setShowInscri(true)} >Inscription</span>
// //                     </div>
// //                 </form >
// //                 {/* <Inscription showInscri={showInscri} onHide={() => setShowInscri(false)} setShowInscri = {setShowInscri} setShowConnex = {props.setShowConnex}/> */}
// //             </Modal.Body >
// //         </Modal>
// //     );
// // }
// // export default App ;

// import React, { useState } from "react";
// import FileUploaded from './FileUploaded'

// const App = () => {
//   const [name, setName] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);

//   const submitForm = () => {
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("file", selectedFile);
    
//     console.log(formData)
//     // axios
//     //   .post(UPLOAD_URL, formData)
//     //   .then((res) => {
//     //     alert("File Upload success");
//     //   })
//     //   .catch((err) => alert("File Upload Error"));
//   };

//   const handleFileInput = (e) => {
//     // handle validations
//     const file = e.target.files[0];
//     console.log(file)
//     // if (file.size > 1024)
//     //   onFileSelectError({ error: "File size cannot exceed more than 1MB" });
//     // else onFileSelectSuccess(file);
//   };

//   return (
//     <div className="App">
//       <form>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <FileUploaded
//           onFileSelectSuccess={(file) => setSelectedFile(file)}
//           onFileSelectError={({ error }) => alert(error)}
//         />

//         <button onClick={submitForm}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

