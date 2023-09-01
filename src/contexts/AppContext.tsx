import React, { createContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import api from '../services/api';
import { setBeers } from '../redux/beerSlice';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataBeers, setDataBeers] = useState<object>();
  const [dataBeersSelected, setDataBeersSelected] = useState<object>();
  const dispatch = useDispatch();

  const getBeers = async () => {
    setIsLoading(true);
    let urlString = 'https://api.punkapi.com/v2' + `/beers`;

    try {
      const response = await api.get(urlString);
      dispatch(setBeers(response.data));
    } catch (error) {
      console.error('Erro ao buscar cervejas:', error);
    } finally {
      setIsLoading(false);
    }
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
        getBeers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
