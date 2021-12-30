import React, { useContext } from 'react'
import cartContext from '../../Context/cartContext'
import './PurchaseCompleted.scss'

const PurchaseCompleted = () => {

    const { order } = useContext(cartContext)

    return (
        <div className='container-compra'>
            <h4 className='detail-compra'>¡Su compra fue realizada con éxito!</h4>
            <h5 className='detail-compra mt-5'>ID # {order}</h5>
            <h6 className='detail-compra mt-5'>Gracias por su compra, enviaremos el comprobante por mail</h6>
        </div>
    )
}

export default PurchaseCompleted
