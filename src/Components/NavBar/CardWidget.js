import { Link } from 'react-router-dom';
import { useContext } from 'react';
import cartContext from '../../Context/cartContext'
import './NavBar.scss';

const CardWidget = () => {

    const { calculateCantTotal } = useContext(cartContext)

    return (
        <>
            <Link className='cajitaContainer' to={'/cart'}>
                <img className='cajita' src='https://res.cloudinary.com/dw94zgfgu/image/upload/v1648159953/cajas-de-regalo-png-png-image-233094_dz6i2t.png'></img>
                <h5 className='cantCarrito'>{calculateCantTotal()}</h5>
            </Link >
        </>

    )
}

export default CardWidget




