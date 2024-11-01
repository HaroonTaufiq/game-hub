import bullseye from '../assets/bulls-eye.webp';
import thumbsup from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
    ratings: number;
}

export const Emoji = ({ ratings} : Props) => {
    if (ratings < 3) return null;

    const emojimap: { [key: number] : ImageProps} = {
        3 : {src: meh, alt: 'meh', boxSize:'25px'},
        4 : {src: thumbsup, alt: 'recommended', boxSize: '25px'},
        5 : {src: bullseye, alt: 'exceptional', boxSize: '25px'}
    }

    
  return (
    <Image {...emojimap[ratings]} marginTop={1}/> 
  )
}
