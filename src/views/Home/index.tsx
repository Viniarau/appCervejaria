import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, TextExit } from './style';
import { AppContext } from '../../contexts/AppContext';
import CardBeers from '../../components/cardBeers';

const Home: React.FC = () => {
    const {getBeers, dataBeers, setDataBeersSelected, dataBeersSelected} = useContext(AppContext);
   
    useEffect(() => {
        getBeers()
      }, []);

    return (
        <Container>
            {dataBeers && dataBeers.map(item => (
               <CardBeers data={item} />
            ))}
        </Container>
    )
}

export default Home;