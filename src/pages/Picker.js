import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../scss/Picker.scss';
import Card from '../components/Card';





const Picker = () => {
    const [myndigheter, setMyndigheter] = useState(["Migrationsverket", "Folkhälsomyndigheten"])
    let navigate = useNavigate();



    return (
        <div className="pickerContainer">
            <h1 className="pickerHeader">Välj en myndighet</h1>
            <div className="contentContainer">
                {myndigheter.map((item, index) => {
                    return (
                        <Card 
                            key={index}
                            name={item}
                            size="big"
                            func={function(){
                                navigate(`myndighetsinformation/myndighet/${item.toLowerCase()}`)
                            }}
                        /> 
                    )
                })}
            </div>
        </div>
    )
}


export default Picker;