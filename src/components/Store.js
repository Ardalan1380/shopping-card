import React , {useContext , useEffect , useState} from 'react';
import { useSelector , useDispatch } from 'react-redux';


//Components
import Product from './Shared/Product';
import Loader from '../components/Shared/Loader'
//redux
import { fetchProducts } from '../redux/products/productsAction';


//styles
import styles from './Store.module.css'


const Store = () => {

    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
        if(!productsState.products.length)dispatch(fetchProducts())
    }, [])

    return (
        <>
        <div className={styles.container}>
            {
                productsState.loading ? 
                < Loader />:
                productsState.error ?
                    <p>something went wrong...</p> :
                    productsState.products.map(product => <Product 
                        key={product.id}
                        productData={product}
                    />)
            }
        </div>
        {/* {products.map(product => (
                <div key={product.id}>
                <img src={product.image} alt={product.title} />
                <span>{product.title}</span>
                <Link to={`products/${product.id}`}>details</Link>
                </div>
            ))} */}
        </>
    );
};

export default Store;