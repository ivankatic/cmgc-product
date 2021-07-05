import Dropdown from "./Dropdown";
import Variations from "./Variations";
import FeatureList from "./FeatureList";

const ProductDetails = () => {
    return(
        <div>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi optio quis ipsa in suscipit blanditiis esse reiciendis deleniti facilis. Vitae assumenda laborum sequi maxime reprehenderit commodi quae aut incidunt veniam.</p>
            
            <Dropdown />
            <Variations />

            <button>Buy now</button>
            
            <FeatureList />
        </div>
    );
}

export default ProductDetails;