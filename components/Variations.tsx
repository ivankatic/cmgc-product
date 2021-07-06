const Variations: React.FC<{ variations: string[] }> = (props) => {
    return (
        <div>
            {props.variations.map(variation => <button key={variation}>{variation}</button>)}
        </div>
    );
}

export default Variations;