import Dropdown from "./Dropdown";
import Variations from "./Variations";
import FeatureList from "./FeatureList";
import ImageSlider from "./ImageSlider";
import { default as data } from '../config/products.json';
import classes from './ProductDetails.module.css'

const ProductDetails: React.FC = () => {
    const productInfo = data.products[0];

    // Get a list of sizes
    let sizes = productInfo.sizes.map(item => item.size);

    return(
        <div className={classes.details}>
            <div>
                <div className={classes.activeImage}>
                    le slika
                </div>
                
                <div className={classes.slickContainer}>
                    <ImageSlider />
                </div>
            </div>

            <div>
                <h1>{productInfo.title}</h1>
                <p>{productInfo.short_desc}</p>
                
                <Dropdown sizes={sizes} />
                <Variations variations={productInfo.scents} />

                <button>Buy Now</button>

                <FeatureList features={productInfo.features} />
            </div>

            
            
        </div>
    );
}

export default ProductDetails;