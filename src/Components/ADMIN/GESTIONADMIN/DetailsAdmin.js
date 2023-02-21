import React from 'react';
import { Link } from 'react-router-dom';
import { mapGetters } from '../../../store/reex';


function DetailsAdmin (props) {
    const indice = mapGetters('produit/indice');
    const arr = mapGetters('produit/arr');
    return (
        <div className='container'>
            <div className='d-flex m-5 align-items-center card'>
                <Link to='/PageAdmin'><div className="btn btn-danger m-2 "><i className="fa fa-times"></i></div></Link>
                <div className='p-5'><img src={arr[indice].new ? arr[indice].img : require('../assets/images/'+arr[indice].img)} width="450px" alt=""/></div>
                <div className='bg-dark text-white p-5'>
                    <h2 className='text-info text-center' >Name : {arr[indice].name} / Price: {arr[indice].price} $ / Promotion: {arr[indice].prom} %</h2><br/>
                    <h3>A propos :</h3>
                     <p className='text-justify'> {arr[indice].det}</p>
                </div>

            </div>
        </div>
    );
}

export default DetailsAdmin ;