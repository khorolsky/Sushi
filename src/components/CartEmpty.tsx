import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

const CartEmpty = () => (
    <div className="cart cart--empty">
        <h2>
            Корзина пустая <span>😕</span>
        </h2>
        <p>
            Вероятней всего, вы еще не заказывали роллы.
            <br />
            Для того, чтобы заказать роллы, перейди на главную страницу.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
        </Link>
    </div>
);


export default CartEmpty;