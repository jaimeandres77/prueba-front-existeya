import "./NavBar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import logoImage from "../../assets/img/Heroes.png"

function NavBar(){
    return(
        <div>
            <nav class="navbar navbar-expand-md mt-4">
                <div class="container">
                    <a class="navbar-brand d-flex logo-container " href="#">
                        <img className="mt-2" src={logoImage} alt="AwesomeHeroes" width={"50%"}></img>
                    </a>
                    <button 
                    class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse flex-row-reverse " id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mt-4">
                            <li class="nav-item px-2">
                                <a class="nav-link" aria-current="page" href="#">Heroes Anteriores</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-link" href="#">¿Cómo funciona?</a>
                            </li>
                            
                            <li class="nav-item px-2">
                                <a class="nav-link" href="#">Iniciar sesión</a>
                            </li>

                            <li class="nav-item py-2 px-4">
                                <FontAwesomeIcon width={50} icon={faSearch}/>                                
                            </li> 
                        </ul>
                                                   
                    </div>
                    
                </div>
            </nav>                            
        </div>
    )
}

export default NavBar;