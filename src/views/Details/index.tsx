import React, { useContext, useEffect, useState } from 'react';
import { 
    Container, 
    //ContainerIngredients,
    ContainerImage,
    ContainerCard,
    ContainerInfo,
    TextTitle,
    TextTitleBackground,
    TextSubTitle,
    TextSubTitleBackground,
    TextSubTitleInfo,
    TextDescription,
    TextDescriptionInfo,
    ImageBeer,
    ContainerColumnInfo, 
    ContainerRowInfo,
} from './style';

import { AppContext } from '../../contexts/AppContext';

const Details: React.FC = () => {
    const {dataBeersSelected} = useContext(AppContext);

    return (
    <Container>
        <ContainerCard>
            <TextTitleBackground>
                {dataBeersSelected?.name}
            </TextTitleBackground>
            <TextSubTitle>
                {dataBeersSelected?.tagline}
            </TextSubTitle>
            <TextDescription>
                {dataBeersSelected?.description}
            </TextDescription>
        </ContainerCard>
        <ContainerInfo>
            <ContainerColumnInfo>
                <ContainerRowInfo>
                    <TextSubTitleInfo>
                        {'Volume: '}
                    </TextSubTitleInfo>
                    <TextDescriptionInfo>
                        {dataBeersSelected?.volume.value + ' ' + dataBeersSelected?.volume.unit}
                    </TextDescriptionInfo>
                </ContainerRowInfo>
                <ContainerRowInfo>
                    <TextSubTitleInfo>
                        {'Boil volume: '}
                    </TextSubTitleInfo>
                    <TextDescriptionInfo>
                        {dataBeersSelected?.boil_volume.value + ' ' + dataBeersSelected?.boil_volume.unit}
                    </TextDescriptionInfo>
                </ContainerRowInfo>
                <ContainerRowInfo>
                    <TextSubTitleInfo>
                        {'First brewed: '}
                    </TextSubTitleInfo>
                    <TextDescriptionInfo>
                        {dataBeersSelected?.first_brewed}
                    </TextDescriptionInfo>
                </ContainerRowInfo>
                <ContainerRowInfo>
                    <TextSubTitleInfo>
                        {'Ingredients: '}
                    </TextSubTitleInfo>
                    <TextDescriptionInfo>
                        {'Host, Malt e Yeast'}
                    </TextDescriptionInfo>
                </ContainerRowInfo>
            </ContainerColumnInfo>
            <ContainerImage>
                <ImageBeer source={{ uri: dataBeersSelected?.image_url }} resizeMode="contain" />
            </ContainerImage>
        </ContainerInfo>
        <ContainerCard>
            <TextSubTitleBackground>
                {'BREWERS TIPS'}
            </TextSubTitleBackground>
            <TextDescription>
                {dataBeersSelected?.brewers_tips}
            </TextDescription>
            <TextSubTitleBackground>
                {'FOOD PAIRING'}
            </TextSubTitleBackground>
            {dataBeersSelected.food_pairing.map((item, index) => (
                <TextDescription key={index}>
                    {'* '+ item}
                </TextDescription>
            ))}
        </ContainerCard>
    </Container>
    )
}

export default Details;