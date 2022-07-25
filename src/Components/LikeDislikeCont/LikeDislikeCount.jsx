import "./LikeDislikeCount.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faThumbsUp , faThumbsDown} from "@fortawesome/free-solid-svg-icons"

function LikeDislikeCount({heroe}){
    return(
        <div class="votes-container ">
            <div className="likes">
                <div className="thumbs">
                    <FontAwesomeIcon icon={faThumbsUp}/>
                </div>
                <div className="percent">
                    <h3>{heroe.likes}</h3><span>%</span> 
                </div>                                                                        
            </div>
            <div className="dislikes">
                <div className="percent">
                    <h3>{heroe.dislikes}</h3><span>%</span> 
                </div>                                    
                <div className="thumbs">
                    <FontAwesomeIcon icon={faThumbsDown}/>
                </div>
            </div>
        </div> 
    )
}

export default LikeDislikeCount;