import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease , removeItem ,increase  } from '../../redux/cart/cartAction';
//Context
import { CardContext } from '../../Context/CardContextProvider';

//function
import { shorthen } from '../../helper/Function';

//Icons
import trashIcon from '../assets/icons/trashIcon.svg';

//styles
import styles from './Cart.module.css';

const Cart = (props) => {

    const dispatch = useDispatch()

    const {image, title, price , quantity} = props.data;

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt='product' />
            <div className={styles.data}>
                <h3>{shorthen(title)}</h3>
                <p>{price}$</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch(decrease(props.data))}>-</button>:
                    <button onClick={() => dispatch(removeItem(props.data))}><img src={trashIcon} alt='trashIcon' style={{width:'15px'}} /></button>
                }
                <button onClick={() => dispatch(increase(props.data))}>+</button>
            </div>
        </div>
    );
};

export default Cart;