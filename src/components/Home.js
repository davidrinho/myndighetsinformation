import { useNavigate } from "react-router-dom";



const Home = () => {

    let navigate = useNavigate();

    return (
        <div className="homeBtn">
            <i className="fa-solid fa-house" onClick={() => navigate("/")}></i>
        </div>
    )
}


export default Home;