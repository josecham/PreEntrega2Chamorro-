import Form from './Form'
import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import { Link } from 'react-router-dom'
import Loader from './Loader';


const Cart = () => {
  const { carrito, removeItem } = useContext(CartContext);
  
  
  const total = carrito.reduce((acc, producto) => {
    const precioTotalProducto = producto.precio * producto.cantidad;
    return acc + precioTotalProducto;
  }, 0);
  

  return carrito.length > 0 ? (
    <>
      <div>
        <h1 className="titulo">MI CARRITO</h1>
      </div>
     
      {carrito.map((producto) => (
        <div key={producto.id} className="cardContent">
          <img src={producto.imagen} alt={producto.nombre} className="cardContent"/>
          <h3 className="item-detail">{producto.nombre} </h3>
          <h3 className="item-detail">Precio: {producto.precio * producto.cantidad}$ </h3>
          <h3 className="item-detail">Cantidad: {producto.cantidad }</h3>

          <button className="restart" variant="" onClick={() => removeItem(producto.id)}>eliminar</button>
        </div>
      ))}



        <div className='cartTotal'>
<h3 className="precio">Total a pagar = {total} $</h3>
    </div>

      <div>
        <Form />
        
      </div>
      <Link to="/">
          <h3 className="body">Volver a pagina de inicio</h3>
        </Link>
    </>
  ) : (
    <>
    
    <h2 className="vacio" >TU CARRITO ESTA VACIO</h2>
    <div>
    <Loader/> 
    </div>
    
    </>
  )
 
};

export default Cart;



      
        