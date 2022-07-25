import "./HeroeCard.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faThumbsUp , faThumbsDown} from "@fortawesome/free-solid-svg-icons"
import LikeDislikeCount from "../LikeDislikeCont/LikeDislikeCount";
function HeroeCard({heroe}){

    function verifyThumbs(){
        
        if(heroe.likes>heroe.dislikes){
            return faThumbsUp
        }else{
            return faThumbsDown   
        }
    }
    

    return(
        <div className="hero-card-container">              
            <div  className="hc-bg">
                <div className="name-container">
                    <div className="blueThumbs"><FontAwesomeIcon icon={verifyThumbs()}/></div>
                    <h2>{heroe.name}</h2>
                </div>
                <div className="p-container">
                    <p>{heroe.description}</p>
                </div>    
                <div className="middle-section">
                    <button>Ver detalle</button>
                    <p>1 mes atrás en lorem dolor</p>
                </div>
                <LikeDislikeCount heroe={heroe}/>
                
            </div>
        </div>
    )    
}

export default HeroeCard;