import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch, Provider } from 'react-redux';
//function
import { shorthen , isInCart, quantityCount } from '../../helper/Function';

//Action
import { addItem , removeItem, increase , decrease } from '../../redux/cart/cartAction';

//Icons 
import trashIcon from '../assets/icons/trashIcon.svg';

//style
import styles from './Product.module.css';


const Product = ({productData}) => {
    
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch()

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt='product' />
            <h3>{shorthen(productData.title)}</h3>
            <p>{productData.price}$</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(productData))}>-</button>}
                {quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch(removeItem(productData))}><img src={trashIcon} alt='trash' /></button>}
                {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                    {
                        isInCart(state , productData.id) ? 
                        <button className={styles.smallButton} onClick={() => dispatch(increase(productData))}>+</button> :
                        <button onClick={() => dispatch(addItem(productData))}>Add to Card</button>
                    }
                </div>
            </div>

        </div>
    );
};

export default Product;