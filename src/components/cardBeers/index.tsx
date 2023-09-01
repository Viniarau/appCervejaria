import React, { Dispatch, SetStateAction, useContext, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import {
    Card,
    ContainerImage,
    ContainerCard,
    TextTitle,
    TextSubTitle,
    TextDescription,
    ImageBeer,
} from './style';
import { AppContext } from '../../contexts/AppContext';
import { useNavigation } from '@react-navigation/native';

export type DataProps = {
    data: any;
  };

const CardBeers = ({data}: DataProps) => {
    const [showActivity, setShowActivity] = useState<boolean>(false);
    const {setDataBeersSelected} = useContext(AppContext);
    const navigation = useNavigation();

    const navigationDetails = async () => {
        await setDataBeersSelected(data)
        navigation.navigate('Details')
    }

    return (
    <Card onPress={() => navigationDetails()} activeOpacity={0.9}>
        <ContainerCard>
            <TextTitle>
                {data.name}
            </TextTitle>
            <TextSubTitle>
                {data.tagline}
            </TextSubTitle>
            <TextDescription numberOfLines={6}>
                {data.description}
            </TextDescription>
        </ContainerCard>
        <ContainerImage>
            <ImageBeer source={{ uri: data.image_url }} />
        </ContainerImage>
    </Card>
    )
};

export default CardBeers;