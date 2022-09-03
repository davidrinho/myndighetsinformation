import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../scss/Picker.scss';
import Card from '../components/Card';
import data from '../components/Myndigheter';
import {capitalizeFirstLetter} from '../components/Utils';
import Menu from '../components/Menu';
import SearchFilter from '../components/SearchFilter';




const Picker = () => {
    const [originalMyndigheter, setOriginalMyndigheter] = useState(null);
    const [myndigheter, setMyndigheter] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        setOriginalMyndigheter(Object.keys(data));
        setMyndigheter(Object.keys(data));
    }, []);


    return (
        <div>
            <Menu />
            {myndigheter ? 
                <div className="pickerContainer">
                    <h1 className="pickerHeader">Välj en myndighet</h1>
                    <SearchFilter
                        originalData={originalMyndigheter}
                        setDataFunc={setMyndigheter}
                    />
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