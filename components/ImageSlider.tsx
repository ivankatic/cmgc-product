import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import classes from './ImageSlider.module.css';

interface SliderProps {
	imageSet: string[];
	onChange: (src: string) => void;
}

const SimpleSlider: React.FC<SliderProps> = (props) => {
	const slideNo = props.imageSet.length > 4 ? 4 : props.imageSet.length;
	const showArrows = props.imageSet.length > 4;

	var settings = {
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: showArrows,
		infinite: false,
	};

	const sliderContent = props.imageSet.map((image: string) => (
		<Image
			src={image}
			key={image}
			layout='fill'
			objectFit='cover'
			alt='Product photo'
			onClick={() => props.onChange(image)}
			className={classes.thumb}
		/>
	));

	return (
		<div className={classes.slickOuter}>
			<Slider {...settings}>{sliderContent}</Slider>
		</div>
	);
};

export default SimpleSlider;
