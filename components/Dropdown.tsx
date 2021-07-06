import classes from './Dropdown';
import Select from 'react-select';
import { ValueType } from 'react-select/lib/types';

type OptionType = { label: string; value: number };

interface Dropdown {
	sizes: string[];
	onChange: (size: string) => void;
}

const Dropdown: React.FC<Dropdown> = (props) => {
	const changeHandler = (selected: OptionType) => {
		props.onChange(selected.value.toString());
	};

	let options = [];

	for (let i = 0; i < props.sizes.length; i++) {
		options.push({
			value: props.sizes[i],
			label: props.sizes[i],
		});
	}

	return (
		<Select
			instanceId='sizes'
			defaultValue={options[0]}
			onChange={(selectedOption: ValueType<OptionType>) => {
				changeHandler(selectedOption);
			}}
			options={options}
		/>
	);
};

export default Dropdown;
