import React from 'react'
import { Input,Button } from 'antd'
import { mapActions, mapGetters } from "../../../store/reex";

export default function ListeCircuitPageAccueil() {
  const ListeCircuitsPrincipal = mapGetters('circuit/ListeCircuitsPrincipal');
  console.log(ListeCircuitsPrincipal)
  const onDeleteAcuueil = ()=>{

  }
  return (
    <div >
        
        <div className='my-4'>
        <Button className='btn btn-info text-align-center' disabled>TOTAL = {ListeCircuitsPrincipal.length} </Button>
        
        </div>

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
          {ListeCircuitsPrincipal.map((itm, idx) => {
            return <tr key={idx}>
              <td>{itm.nom}</td>
              <td>{itm.dureeCircuit} jours</td>
              <td>{itm.dateDebut}</td>
              <td>{itm.dateFin}</td>
              <td>{itm.prixEnfant}</td>
              <td>{itm.prixAdulte}</td>
              
              <td>
                <Button onClick={()=> onDeleteAcuueil(itm)}>Supprimer de la page d'accueil </Button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
