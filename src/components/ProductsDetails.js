import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// style
import styles from './ProductsDetails.module.css';
import Loader from './Shared/Loader';

const ProductsDetails = (props) => {

    const id = props.match.params.id;
    // const data = useContext(ProductsContex);
    // const product = data[id - 1];
    // const {image, title, description, price, category} = product;
    const [productData, setproductData] = useState({});

    useEffect (() => {
        const fetchAPI = async id => {
            const data = await (
                await fetch(`https://fakestoreapi.com/products/${id}`)
            ).json();
            setproductData(data)
        };

        fetchAPI(id);

    }, [id]);



    // useEffect(() => {
        
    //     const fetchAPI = async () => {
    //         setProduct(await getProducts());
    //     }

    //     fetchAPI();

    // } , []);


    
//    useEffect (() => {
//     const fetcher = async () => {
//         const productData = await (
//             await fetch('https://fakestoreapi.com/products')
//         ).jason();

//         console.log(productData[0]);
//         setProducts(productData)
//     };
//         fetch();
//    } ,[]);

  
    if(Object.values(productData).length === 0) return (<Loader  />)

    return (
         
        <div className={styles.container}>
            <img className={styles.image} src={productData.image} alt='product' />
            <div className={styles.textContainer}>
                <h3>{productData.title}</h3>
                <p className={styles.description}>{productData.description}</p>
                <p><span>Category:</span> {productData.category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{productData.price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
            {/* {products.map(product => (
                <div key={product.id}>
                <img src={product.id} />
                <span>{product.title}</span>
                
                </div>
            ))} */}

            {/* <img src={productData.image} />
            <span>{productData.title}</span> */}
        </div>
    );
};

export default ProductsDetails;