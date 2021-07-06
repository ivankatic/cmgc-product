import { useState } from 'react';
import Dropdown from './Dropdown';
import Variations from './Variations';
import FeatureList from './FeatureList';
import ImageSlider from './ImageSlider';
import Image from 'next/image';
import { default as data } from '../config/products.json';
import classes from './ProductDetails.module.scss';

const ProductDetails: React.FC = () => {
	const productInfo = data.products[0];

	// Get a list of sizes
	let sizes = productInfo.sizes.map((item) => item.size);

	// Create state to display image set depending on selected size
	const [current, setCurrent] = useState(sizes[0]);

	// Change images depending on selected size
	const sizeHandler = (size: string) => {
		setCurrent(size);
		setMainImage(currentSizeInfo(size).src[0]);
	};

	// Get info for current size
	const currentSizeInfo = (size: string) => {
		const sizeInfo = productInfo.sizes.filter((item) => {
			return item.size === size;
		});

		return sizeInfo[0];
	};

	// Get image set for current size, set main image
	const imageSet = currentSizeInfo(current).src;
	const [mainImage, setMainImage] = useState(imageSet[0]);

	// Change image on thumbnail click
	const changeImageHandler = (src: string) => {
		setMainImage(src);
	};

	return (
		<div className={classes.details}>
			<div className={classes.left}>
				<div className={classes.activeImage}>
					<Image
						src={mainImage}
						layout='fill'
						objectFit='cover'
						key={imageSet[0]}
						alt={productInfo.title}
					/>
				</div>

				<div className={classes.slickContainer}>
					<ImageSlider imageSet={imageSet} onChange={changeImageHandler} />
				</div>
			</div>

			<div>
				<h1 className={classes.title}>{productInfo.title}</h1>
				<p className={classes.shortDesc}>{productInfo.short_desc}</p>

				<Dropdown sizes={sizes} onChange={sizeHandler} />
				<Variations variations={productInfo.scents} />

				<button>Buy Now</button>

				<FeatureList features={productInfo.features} />
			</div>
		</div>
	);
};

export default ProductDetails;
