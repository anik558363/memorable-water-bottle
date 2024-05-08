import PropTypes from 'prop-types';


import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart_container'>
            <h4>cart: {cart.length}</h4>
            {
                cart.map((bottle, index) => <img key={index} src={bottle.img}></img>)
            }
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}


export default Cart;