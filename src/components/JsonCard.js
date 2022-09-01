import {sanitizeString} from '../components/Utils';




const JsonCard = (object) => {

    const KeyVal = ({keyname, value}) => {
        return (
            <div>
                <span>{sanitizeString(keyname)} :</span><span>{value}</span>
            </div>
        )
    }

    const objectStructure = (object) => {
        let keyVal = [];
        for (let [key, val] of Object.entries(object)) {
            if(!(key == "OBJECTID")) {
                keyVal.push(<KeyVal keyname={key} value={val} />);
            }
        }
        return keyVal;
    }

    return (
        <div className="jsoncard">
            {objectStructure(object)}
        </div>
    )
}


export default JsonCard;