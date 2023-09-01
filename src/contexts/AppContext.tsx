/* eslint-disable prettier/prettier */
import React, {useState,createContext} from 'react';
import api from '../services/api';

export const AppContext = createContext(null);

export const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [dataBeers, setDataBeers] = useState<object>();
    const [dataBeersSelected, setDataBeersSelected] = useState<object>();

    const getBeers = async() => {
      setIsLoading(true);
      let urlString = 'https://api.punkapi.com/v2/' + `/beers`
      
      await api.get(urlString,
      ).then((res: any)=>{

        setIsLoading(false);
        setDataBeers(res.data);

      }).catch(function (error: any) {

        console.log(error);
        
      }).finally(() => {
        setIsLoading(false);
      });
    };

    return (
        <AppContext.Provider 
        value={{
          isLoading,
          setIsLoading,
          dataBeers,
          setDataBeers,
          dataBeersSelected,
          setDataBeersSelected,
          getBeers
        }}>
            {children}
        </AppContext.Provider>
    );
}