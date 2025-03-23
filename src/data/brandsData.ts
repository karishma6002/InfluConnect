import { coimbatoreBrands } from './locations/coimbatoreData';
import { indiaBrands } from './locations/indiaData';
import { tamilNaduBrands } from './locations/tamilNaduData';

export const allBrands = [
  ...coimbatoreBrands,
  ...tamilNaduBrands,
  ...indiaBrands
];

export const getBrandsByLocation = (location: string) => {
  return allBrands.filter(brand => 
    brand.location.toLowerCase() === location.toLowerCase()
  );
};