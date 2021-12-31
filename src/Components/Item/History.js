import React from 'react'

const History = ({ orden }) => {

    console.log(orden)
    return (
        <div className="tarjetas">
            <div className="tarjeta">
                <div>
           
                    <p className="detalleProd">ID {orden.id}</p>
                    <p className="detalleProd">$ {orden.total}</p>
                </div>
            </div>
        </div>
    )
}

export default History
