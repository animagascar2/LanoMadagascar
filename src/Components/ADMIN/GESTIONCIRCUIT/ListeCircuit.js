import React, { useEffect, useState } from "react";
import { Button} from "antd";
import { mapActions, mapGetters } from "../../../store/reex";
import ModalModif from './ModalModif';
import { useNavigate } from "react-router-dom";

function ListeCircuit() {
  const ListeCircuits = mapGetters("circuit/ListeCircuits");
  const getList = mapActions('circuit/getList'); 
  const getListPrincipal = mapActions('circuit/getListPrincipal');
  const postCircuitPrincipal = mapActions('circuit/postCircuitPrincipal');
  const [listeP, setListeP]= useState({})
  const navigate = useNavigate();
  
  const deleteCircuit = mapActions("circuit/deleteCircuit");
  const [modalShow, setModalShow] = useState(false);
  const [item, setItem] = useState(ListeCircuits[0]);

 
  useEffect(() => {
    getList();
    getListPrincipal()
    .then((response) => {
      setListeP(response)
  })
  }, []);

  const Swal = require('sweetalert2');
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  const Modifier = (data) => {
    setModalShow(true);
    setItem(data);
  }

  const onDelete = (data) =>{
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCircuit(data)
        .then((result) =>{
          if (result=='deletesuccess'){
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            getList();
          }
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  
  const AddAcueil = (nomCircuit) =>{
    

//   if((listeP.length) === 0 ){
//     postCircuitPrincipal(nomCircuit)
//     .then((response) => {
//       if(response=='success'){
//         alert('eto ambony success');
//       }
//     })
//   }else if((listeP.length) > 0 && (listeP.length) < 13){
//     for( var i = 0; i < listeP.length ; i++ ){
//       if(listeP[i].nom === nomCircuit){
//           alert('exist');
//       }else{
//         postCircuitPrincipal(nomCircuit)
//         .then((response) => {
//           if(response=='success'){
//             alert('eto ambany success');
//           }
//         })
//       }
//      }
// }
const isFound = listeP.some(element => {
  if (element.nom === nomCircuit) {
    return true;
  }

  return false;
});
if(listeP.length < 13){
  if (isFound) {
    Swal.fire({
      title: 'ERREUR',
      text: "Ce circuit est déja ajouter à la page d'accueil",
      icon: 'warning',
      confirmButtonColor: '#3085d6'
    })
  }else{
        postCircuitPrincipal(nomCircuit)
          .then((response) => {
            if(response=='success'){
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Circuit ajouter à la page d'accueil",
                showConfirmButton: false,
                timer: 2000
              })
            }
            navigate(0)
          })
  }
}else{

}

  
    
  }
  return (
    <div className="p-5">
      <table className="table table-striped ">
        <thead className="bg-primary">
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Date Début</th>
            <th>Date Fin</th>
            <th>Durée</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ListeCircuits.map((itm, idx) => {
            return <tr key={idx}>
              <td>{itm.nom}</td>
              <td>{itm.descriptionC}</td>
              <td>{itm.dateDebut}</td>
              <td>{itm.dateFin}</td>
              <td>{itm.dureeCircuit}</td>
              <td>
                <Button>Détails</Button>
                <Button onClick={()=>Modifier(itm)}>Modifier</Button>
                <Button onClick={()=> onDelete(itm)}>Supprimer</Button>
                <Button onClick={()=> AddAcueil(itm.nom)}>Ajouter à l'accueil</Button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
      <ModalModif 
              show={modalShow}
              itm={item}
              onHide={() => setModalShow(false)}
              />
      
    </div>
  );
}

export default ListeCircuit;