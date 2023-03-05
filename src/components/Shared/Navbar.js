import React from 'react';
import { Link } from 'react-router-dom';
 import {useSelector} from 'react-redux'

//Icon
import shopIcon from '../assets/icons/shop.svg';

//styles
import styles from  './Navbar.module.css';

const Navbar = () => {

    const state = useSelector(state => state.cartState);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link to='/products' className={styles.productLink}>Products</Link>
                <div className={styles.iconContainer}>
                    <Link to='/cart'><img src={shopIcon} alt='shopIcon' /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;