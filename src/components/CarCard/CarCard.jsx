import { CardBox, HeartBtn, Heart, CarImgBox, CarImg, CarCardTitle, TextName, CarBrandName, CarBrand, CarDescr, TextDescr } from './CarCard.styled';
import sprite from '../../img/sprite.svg';
import { Button } from '../common/Button/Button';

export const CarCard = ({ id, img, make, model, rentalPrice, year, address, rentalCompany, mileage, type, functionalities }) => {

    const country = address.split(' ').slice(-1).toString();
    const city = address.split(' ').slice(-2, -1).toString().split('').slice(0, -1).join('');
    
    return (
        <CardBox key={id}>
            <CarImgBox>
                <CarImg src={img} alt={make} />
                <HeartBtn type='button'>
                     <Heart><use href={`${sprite}#icon-heart`}></use></Heart>
                </HeartBtn>
            </CarImgBox>
            <CarCardTitle>
                <CarBrandName>
                    <TextName>{make}</TextName> 
                    <CarBrand><TextName>{model},</TextName></CarBrand>
                    <TextName>{year}</TextName>
                </CarBrandName>
                <TextName>{rentalPrice}</TextName>
            </CarCardTitle>
            <CarDescr>
                <TextDescr>{city} |</TextDescr>
                <TextDescr>{country} |</TextDescr>
                <TextDescr>{rentalCompany} |</TextDescr><br/>
                <TextDescr>{type} |</TextDescr>
                <TextDescr>{mileage} |</TextDescr>
                <TextDescr>{functionalities[1]}</TextDescr>
            </CarDescr>
          
            <Button><p>Learn more</p></Button>
        </CardBox>
    );
};