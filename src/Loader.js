import React from 'react';
import './Loader.css'

const Loader = (props) => {
    return (
        <>
            <div className="loader"></div>
            {props.tipo === 'preparando' ? <h3 className="loaderDesc">Preparando todo para tu compra...</h3> 
            : props.tipo === 'comprando' ? <h3 className="loaderDesc">Finalizando tu compra...</h3> 
            : <h3 className="loaderDesc">Cargando...</h3>}
        </>
    )
}

export default Loader;