import { useNavigate } from "react-router-dom";



const Menu = () => {

    let navigate = useNavigate();

    const toggleMenu = (menuBtnElement, menuElement) => {
        if (menuBtnElement.id === "toggleBtn")
        {
            if (menuElement.classList.contains("active")) {
                menuElement.classList.remove("active");
                menuBtnElement.className = "fa-solid fa-bars";
                
            } else {
                menuElement.classList.add("active");
                menuBtnElement.className = "fa-solid fa-xmark";
            }
        } else {
            menuElement.classList.toggle("active");
        }  
    }

    return (
        <div className="menu">
            <i className="fa-solid fa-bars" id="toggleBtn" onClick={(e) => toggleMenu(e.target, e.target.parentElement)}></i>
            <i className="fa-solid fa-house" onClick={(e) => {
                toggleMenu(e.target, e.target.parentElement);
                navigate("/")
            }}><span>Hem</span></i>
            <a target="_blank" href="https://github.com/davidrinho/myndighetsstatistik"><i className="fa-brands fa-github"><span>GitHub</span></i></a>
        </div>
    )
}


export default Menu;