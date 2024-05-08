import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../utilies/localstorage";
import Cart from "../Cart/Cart";

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
        const saveCart = [];
           for(const id of storedCart){

            const bottle = bottles.find(bottle => bottle.id === id);
            if(id){
                saveCart.push(bottle)
            }
           } 
        //    console.log("save cart",saveCart);
        setCart(saveCart)

        }
    },[bottles])





    const handleAddToCart = (bottle) =>{
       setCart([...cart, bottle]);
       addToLS(bottle.id)
    };

 
  




    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={cart}></Cart>
            <div className="bottle_container">
                {
                    bottles.map((bottle) => <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;