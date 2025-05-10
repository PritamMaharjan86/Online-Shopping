import React, { useContext, useEffect } from 'react';
import Button from '../components/Button';
import { CartContext } from '../context/Cartcontext';
import { MdDeleteForever } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { LuMinus } from "react-icons/lu";


const Cart = () => {
    const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useContext(CartContext);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    useEffect(() => {
        document.title = 'My Cart | PrimTech Store';
    }, []);

    const Checkout = () => {
        alert("Checkout is not available yet");
    }


    return (
        <div>
            <div className="p-4 items-center justify-center flex flex-col">
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center w-full h-96 rounded-md p-4">
                        <span>There are no items in your cart</span>
                        <Button
                            className="bg-black text-white p-4 w-60 rounded-md m-5"
                            label="Continue Shopping"
                            onClick={() => window.location.href = '/'}
                        />
                    </div>
                ) : (
                    <div className="w-full max-w-4xl">
                        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                        {cartItems.map((item, index) => (
                            <div key={index} className="border p-4 rounded-md mb-4 shadow-md flex items-center gap-4">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-contain" />
                                <div className="flex-1">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-gray-600">${item.price}</p>
                                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                </div>

                                <Button
                                    className='text-2xl'
                                    label={<IoIosAdd />}
                                    onClick={() => addToCart(item)}
                                />

                                <Button
                                    className='text-xl'
                                    label={<LuMinus />}
                                    onClick={() => decreaseQuantity(item)}
                                />

                                <Button
                                    className="text-2xl text-red-600 p-4"
                                    label={<MdDeleteForever />}
                                    onClick={() => removeFromCart(item)}
                                />


                            </div>


                        ))}


                        <div className='flex justify-end gap-10 items-center mt-4'>
                            <span className='text-xl font-bold '>Subtotal</span>
                            <span className='text-xl font-bold'>
                                ${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>
                        <span className='flex justify-end mt-1 text-sm'>Including GST. Shipping calculated at checkout  </span>

                        <div className='flex justify-end gap-10 items-center mt-4'>


                            <Button
                                className="bg-black text-white p-4 w-60 rounded-md mt-6"
                                label="Continue Shopping"
                                onClick={() => window.location.href = '/'}
                            />


                            <Button
                                className="bg-green-600 text-white p-4 w-60 rounded-md mt-6"
                                label="Checkout"
                                onClick={Checkout}
                            />

                        </div>
                    </div>
                )}


            </div>
        </div>
    );

};

export default Cart;
