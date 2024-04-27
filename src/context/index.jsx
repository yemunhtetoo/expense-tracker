import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({children}){
    const [formData, setFormData] = useState({
        type:'income',
        amount: 0,
        description: ''
    });

    const [value, setValue] = useState('expense');
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [allTransactions, setAllTransactions] = useState([]);

    function handleFormSubmit(currentFormData){
        
        if(!formData.type || !formData.description) return;
        setAllTransactions([...allTransactions, {...currentFormData, id:Date.now()}])
    }
    console.log(allTransactions)
    return <GlobalContext.Provider
    value={{
        formData, setFormData, totalExpense, setTotalExpense, totalIncome, setTotalIncome, allTransactions, setAllTransactions, value, setValue, handleFormSubmit
    }}
    >{children}</GlobalContext.Provider>
}