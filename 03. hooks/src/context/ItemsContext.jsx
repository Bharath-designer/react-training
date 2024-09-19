import { createContext, useContext, useReducer } from "react";

export const ItemContext = createContext()

const initialState = [
    {
        name: "sample item",
        description: "An example entry to demonstrate functionality."
    },
    {
        name: "example entry",
        description: "This item serves as a placeholder for testing."
    },
    {
        name: "demo user",
        description: "A demo user with a sample description."
    },
    {
        name: "test item",
        description: "This is a test item for validation purposes."
    },
    {
        name: "placeholder entry",
        description: "A placeholder entry for the data model."
    }
];


const reducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'REMOVE_ITEM':
            return state.filter((item, index) => index != action.payload);
        default:
            return state;
    }
}

export const ItemProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer,initialState)

    return (
        <ItemContext.Provider value={{state, dispatch}}>
            {children}
        </ItemContext.Provider>
    )

}