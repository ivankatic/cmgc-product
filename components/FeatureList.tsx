const FeatureList: React.FC<{ features: string[] }> = (props) => {
    return (
        <ul>
            {props.features.map(feature => <li key={feature}>{feature}</li>)}
        </ul>
    );
}

export default FeatureList;