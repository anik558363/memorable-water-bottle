import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../utilies/localstorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    // load cart from local storage
    useEffect(() =>{
        console.log('called the useEffect',bottles.length);
        if(bottles.length > 0){
            const storedCart =  getStoredCart();
        console.log(storedCart, bottles);
        }
    },[bottles])


    const handleAddToCart = (bottle) =>{
       setCart([...cart, bottle]);
       addToLS(bottle.id)
    };

 


    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <h4>cart: {cart.length}</h4>
            <div className="bottle_container">
                {
                    bottles.map((bottle) => <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;