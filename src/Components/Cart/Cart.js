import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPeople = cart.reduce((x, y) => x + y.population, 0)
    return (
        <div>
            <h3>People: {totalPeople}</h3>
        </div>
    );
};

export default Cart;