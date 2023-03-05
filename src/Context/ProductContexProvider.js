import React , {useState , useEffect , createContext} from 'react';

//API
import { getProducts } from '../services/api';


export const ProductsContex = createContext();

const ProductContexProvider = ({children}) => {

    const [products , setProduct] = useState([]);


    useEffect(() => {
        
        const fetchAPI = async () => {
            setProduct(await getProducts());
        }

        fetchAPI();

    } , []);
    



    return (
        <ProductsContex.Provider value={products}>
            {children}
        </ProductsContex.Provider>

    );
};

export default ProductContexProvider;
