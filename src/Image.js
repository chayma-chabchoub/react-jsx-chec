

import product from './product.js';
// here the photo of the prodocut
const Image = ( ) => {
  return (
    <img src={product.image} alt='pic'/>
  )
};

export default Image;