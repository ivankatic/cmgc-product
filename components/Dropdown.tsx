interface Dropdown {
	sizes: string[];
	onChange: (size: string) => void;
}

const Dropdown: React.FC<Dropdown> = (props) => {
	const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		props.onChange(event.target.value);
	};

	return (
		<select onChange={changeHandler}>
			{props.sizes.map((size) => (
				<option key={size}>{size}</option>
			))}
		</select>
	);
};

export default Dropdown;
