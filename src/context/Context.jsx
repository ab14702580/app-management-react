import { createContext, useEffect, useState } from 'react';

export const AppDataContext = createContext('');
const AppContext = ({ children }) => {
    const [Id , setId] = useState(JSON.parse(localStorage.getItem('singleData')));
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/Appdata.json').then(res => res.json()).then(response => {
            if(response){
                setData(response)
            }
            setLoading(false);
        }).catch(() => setLoading(false));
    }, [])
    const handelStoreData = (id) => {
        setId(id);
        localStorage.setItem('singleData' , JSON.stringify(id))
    };
    console.log( 'this is a id',Id)
    console.log( 'this is a maim data',data)
    const obj = {
        data,
        loading,
        handelStoreData, 
        Id
    }

    return (
        <AppDataContext.Provider value={obj}>{children}</AppDataContext.Provider>
    );
};

export default AppContext;