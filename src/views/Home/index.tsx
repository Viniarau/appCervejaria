import React, { useContext, useEffect } from 'react';
import { Container } from './style';
import { AppContext } from '../../contexts/AppContext';
import CardBeers from '../../components/cardBeers';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';

const Home: React.FC = () => {
    const { getBeers } = useContext(AppContext);
    const beers = useSelector((state: RootState) => state.beers);
    
    useEffect(() => {
        getBeers()
      }, []);

    return (
        <Container>
            {beers && beers.map(item => (
               <CardBeers data={item} />
            ))}
        </Container>
    )
}

export default Home;