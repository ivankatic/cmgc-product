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
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};

	const sliderContent = props.imageSet.map((image: string) => (
		<Image
			src={image}
			key={image}
			height='100'
			width='100'
			alt='Product photo'
			onClick={() => props.onChange(image)}
		/>
	));

	return (
		<div>
			<Slider {...settings}>{sliderContent}</Slider>
		</div>
	);
};

export default SimpleSlider;
