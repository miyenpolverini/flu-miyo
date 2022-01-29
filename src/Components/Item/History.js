import React, { useContext } from 'react'
import cartContext from '../../Context/cartContext'

const History = ({ historia }) => {

    const { parseNumber } = useContext(cartContext)

    return (
        <>
            <h2 className='order-tit mt-5'>Historia clínica del paciente {historia.name}</h2>
            <div className="order">
                <li key={historia.id} className='titOrder'>
                    <div>
                        <p className="detalleOrderDate">Fecha: {historia.fechaFormat}</p>
                        <p className="detalleOrder">DNI: {historia.dni}</p>
                        <p className="detalleOrder">Tel: {historia.phone}</p>
                        <p className="detalleOrder">Obra social: {historia.osocial}</p>
                        <p className="detalleOrder">Nro afiliado: {historia.nroafiliado}</p>
                    </div>
                </li>
            </div>
        </>
    )
}

export default History
