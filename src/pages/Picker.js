import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../scss/Picker.scss';
import Card from '../components/Card';
import data from '../components/Myndigheter';
import {capitalizeFirstLetter} from '../components/Utils';




const Picker = () => {
    const [myndigheter, setMyndigheter] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        setMyndigheter(Object.keys(data));
    }, []);


    return (
        <div>
            {myndigheter ? 
                <div className="pickerContainer">
                    <h1 className="pickerHeader">Välj en myndighet</h1>
                    <div className="contentContainer">
                        {myndigheter.map((item, index) => {
                            return (
                                <Card 
                                    key={index}
                                    name={capitalizeFirstLetter(item)}
                                    size="big"
                                    func={function(){
                                        navigate(`/myndighet/${item.toLowerCase()}`)
                                    }}
                                /> 
                            )
                        })}
                    </div>
                </div>
            : <p>Nope!</p>
            }
        </div>
    )
}


export default Picker;