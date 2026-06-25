import { createContext, useEffect, useState } from 'react';

export const AppDataContext = createContext('');
const AppContext = ({ children }) => {
    const [Id , setId] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('../../public/Appdata.json').then(res => res.json()).then(response => {
            if(response){
                setData(response)
            }
            setLoading(false);
        }).catch(() => setLoading(false));
    }, [])
    const handelStoreData = (id) => setId(id);
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