import React, {useReducer , useContext, createContext, Children} from 'react';


    const initialState = {
        selectedItems : [],
        itemsCounter : 0 , 
        total :  0,
        checkOut: false
    }

    const sumItems = item => {
        const itemsCounter = item.reduce((total , product) => total + product.quantity , 0)
        const total = item.reduce((total , product) => total + product.price * product.quantity , 0).toFixed(2);
        return {itemsCounter , total}
    }

    const cartReducer = (state , action) => {
        console.log(state)
        switch(action.type) {
            case 'ADD_ITEM' :
                if(!state.selectedItems.find(item => item.id === action.payload.id)) {
                    state.selectedItems.push({
                        ...action.payload,
                        quantity :1
                    })
                }
                return {
                    ...state,
                    selectedItems : [...state.selectedItems],
                    ...sumItems(state.selectedItems),
                    checkOut: false

                }
                case 'REMOVE_ITEM':
                    const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
                    return {
                        ...state,
                        selectedItems: [...newSelectedItems],
                    ...sumItems(newSelectedItems)
                    }
                case 'INCREASE': 
                    const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
                    state.selectedItems[indexI].quantity++;
                    return {
                        ...state,
                    ...sumItems(state.selectedItems)

                    }
                case 'DECREASE': 
                    const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
                    state.selectedItems[indexD].quantity--;
                    return {
                        ...state,
                    ...sumItems(state.selectedItems)
                    }
                    case 'CHECKOUT':
                        return {
                            selectedItems : [],
                            itemsCounter : 0 , 
                            total :  0,
                            checkOut: true
                        }
                    case 'CLEAR' :
                        return {
                            selectedItems : [],
                            itemsCounter : 0 , 
                            total :  0,
                            checkOut: false
                        }
                    default :
                    return state;
        }
    }

    export const CardContext = createContext();

const CardContextProvider = ({children}) => {

    const [state , dispatch] = useReducer(cartReducer , initialState)

    return (
        <CardContext.Provider value={{state: state , dispatch: dispatch}}>
            {children}
        </CardContext.Provider>
    );
};

export default CardContextProvider;