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
      <table className="table table-striped">
        <thead style={{background:'rgb(110, 231, 183)',color:'white'}}>
          <tr>
            <th>Nom</th>
            <th>Durée</th>
            <th>Date Début</th>
            <th>Date Fin</th>
            <th>Prix Enfant</th>
            <th>Prix Adulte</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ListeCircuits.map((itm, idx) => {
            return <tr key={idx}>
              <td>{itm.nom}</td>
              <td>{itm.dureeCircuit} jours</td>
              <td>{itm.dateDebut}</td>
              <td>{itm.dateFin}</td>
              <td>{itm.prixEnfant}</td>
              <td>{itm.prixAdulte}</td>
              
              <td>
                <Button onClick={()=>Modifier(itm)}>Modifier</Button>
                <Button onClick={()=> onDelete(itm)}>Supprimer </Button>
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