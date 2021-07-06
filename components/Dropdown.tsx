const Dropdown: React.FC<{ sizes: string[] }> = (props) => {
    return (
        <select>
            {props.sizes.map(size => <option key={size}>{size}</option>)}
        </select>
    );
}

export default Dropdown;