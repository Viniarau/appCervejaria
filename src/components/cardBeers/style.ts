import styled from 'styled-components/native';
import { COLORS } from '../../constants'

export const Card = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    height: 200px;
    width: 100%;
    margin-top: 10px;
    margin-vertical: 5px;
    borderRadius: 8px;
    border: 2px solid ${COLORS.primary};
    backgroundColor: ${COLORS.primary};
    shadow-color: ${COLORS.black};
    shadow-offset: 10px 10px;
    shadow-opacity: 0.3;
    shadow-radius: 10px;
    elevation: 3;
`;

export const ContainerCard = styled.View`
    flex: 4;
    height: 100%;
    padding: 10px;
    alignItems: center;
    justify-content: space-around;
`;

export const ContainerImage = styled.View`
    flex: 1;
    padding: 10px;
    alignItems: center;
    justify-content: center;
`;

export const TextTitle = styled.Text`  
    fontSize: 20px;
    text-align: center;
    lineHeight: 20px;
    fontWeight: 800; 
    color: ${COLORS.secondary};
    padding-right: 10px;
`;

export const TextSubTitle = styled.Text`  
    fontSize: 16px;
    text-align: center;
    lineHeight: 20px; 
    fontWeight: 500; 
    color: ${COLORS.white};
    padding-right: 10px;
`;

export const TextDescription = styled.Text`  
    fontSize: 12px;
    lineHeight: 20px; 
    color: ${COLORS.white};
    padding-right: 10px;
    text-align: justify;
`;

export const ImageBeer = styled.Image`
  width: 50px;
  height: 150px;
`;
