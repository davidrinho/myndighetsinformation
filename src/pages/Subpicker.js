import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import '../scss/Subpicker.scss';
import Card from '../components/Card';
import data from '../components/Myndigheter';
import JsonCard from '../components/JsonCard';
import {capitalizeFirstLetter, jsonParser} from '../components/Utils';
import Menu from '../components/Menu';
import SearchFilter from '../components/SearchFilter';




const Subpicker = () => {

    const [available, setAvailable] = useState(false);
    const [originalItems, setOriginalItems] = useState([]);
    const [items, setItems] = useState(null);
    const [bookUrl, setBookUrl] = useState(null);
    const [jsonArr, setJsonArr] = useState(null);
    const viewerUrl = "https://view.officeapps.live.com/op/embed.aspx?src=";

    let {myndighet} = useParams();

    /**
     * Sets the viewer element to be active and then displays the selected data according to the data type.
     * @param {string} type - Supported data type (currently json/excel)     
     */
    const setViewerActive = (type) => {
        let viewer = document.querySelector(".viewer")
        // If viewer is active but not correct type
        if (viewer.className.split("active-").length > 1) {
            let currentType = viewer.className.split("active-").at(-1);
            if (type !== currentType) {
                viewer.classList.remove(`active-${currentType}`);
                viewer.classList.add(`active-${type}`);
            }
        }

        // if not viewer is active at all
        if (!(viewer.classList.contains("active-json")) && !(viewer.classList.contains("active-excel"))) {
            viewer.classList.toggle(`active-${type}`);
            viewer.scrollIntoView(true);
        }
    }

    /**
     * Collects data from stored JS object and sets the state variables
     */
    const fetchData = () => {
        myndighet = myndighet.toLowerCase();
        if (data[myndighet]) {
            setAvailable(true);
            setOriginalItems(Object.keys(data[myndighet].data));
            setItems(Object.keys(data[myndighet].data));
        }
    }

    /**
     * Sets the workbook URL to be used in iframe src 
     * @param {string} url - Src url for .xlsx workbooks
     */
    const setIframeSrc = (url) => {
        if (jsonArr) setJsonArr(null);
        setBookUrl(url);
        setViewerActive("excel");
    }

    /**
     *  Fetches JSON data from given url and parse it with the help of util functions, then sets the appropriate state data
     * @param {string} url - JSON data url to fetch from
     */
    const fetchJsonData = (url) => {
        if (bookUrl) setBookUrl(null);
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                let parsedJson = jsonParser(myndighet, json);
                console.log(parsedJson);
                setJsonArr(parsedJson);
            })
        setViewerActive("json");
    }

    /**
     * Function dispatches to the appropriate function based on its type 
     * @param {object} obj - Object collected based on 'myndighet' from the stored JS objects.
     */
    const handleActionType = (obj) => {
        let {type, url} = obj;
        switch (type) {
            case "excel":
                setIframeSrc(url);
                break;
            case "json":
                fetchJsonData(url);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        fetchData();       
    }, []);
    
    return (
        <div>
            <Menu />
            {available ? 
                <div>
                <div className="pickerContainer">
                    <div className="menuContainer">
                        <i className="fa-solid fa-angles-up" 
                            onClick={() => {
                                let top = document.querySelector(".pickerContainer");
                                top.scrollIntoView(true);
                        }}></i>
                        {bookUrl ? 
                            <i className="fa-solid fa-angles-down" 
                                onClick={() => {
                                    let bottom = document.querySelector(".viewer");
                                    bottom.scrollIntoView(true);
                            }}></i>
                        : ""}
                        
                    </div>
                    <h1 className="pickerHeader">{capitalizeFirstLetter(myndighet)}</h1>
                    <div className="sourceContainer">
                        <span id="sourceText">Statistik hämtad från </span><a target="_blank" href={data[myndighet].source}>{myndighet}</a>
                    </div>
                    <SearchFilter
                        originalData={originalItems}
                        setDataFunc={setItems}
                    />
                    <div className="contentContainer">
                        {items.map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    name={item}
                                    size="small"
                                    func={() => handleActionType(data[myndighet].data[item])}
                                />
                            )
                        })}       
                    </div>
                </div>
                    <div className="viewer">
                        {bookUrl ?
                                <iframe frameBorder="0" width={"100%"} height="90%" src={viewerUrl + bookUrl} />
                            : ""}
                        {jsonArr ?
                            jsonArr.map((item) => {
                                return (
                                    JsonCard(item)
                                )
                            })
                        : ""}
                    </div>
                </div>
            : <h2>No bueno</h2>}
            
        </div>
    )
}


export default Subpicker;