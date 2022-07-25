import "./MainCard.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faThumbsUp, faThumbsDown} from "@fortawesome/free-solid-svg-icons"
import {faWikipediaW} from "@fortawesome/free-brands-svg-icons"
import heroe from "../../json/heroe.json"
import { useState } from "react"

//function totalVotesVerifier()
    let heroLikes = parseInt(heroe.likes) 
    let heroDislikes = parseInt(heroe.dislikes) 
    let totalVotes = heroLikes + heroDislikes;

    
function MainCard(){
    const [likes, setLikes] = useState(heroLikes)
    const [dislikes,setDislikes] = useState(heroDislikes)

    function verificatedLikesPercentage(){
        let likesPer = (100*likes)/totalVotes
        return likesPer;
    }

    function verificatedDisLikesPercentage(){
        let dislikesPer = (100*heroDislikes)/totalVotes
        return dislikesPer;
    }
    return(
        <div className="Image-bg-container">
            <div className="interactive-window">
                <div className="info-container">
                    <h5>Dinos tu opinión sobre</h5>
                    <h2>{heroe.name}?</h2>
                    <p>{heroe.description}</p>
                    <div className="wiki-container">
                        <FontAwesomeIcon className="wiki-logo" icon={faWikipediaW}/>
                        <p>Más Información</p>
                    </div>
                </div>
                <div className="voting-section">
                    <h3>¿Cuál es tu voto?</h3>
                    <div className="button-container">
                        <button onClick={()=> {setLikes(likes + 1)}} className="like-button"><FontAwesomeIcon icon={faThumbsUp}/></button>
                        <button onClick={()=>{setDislikes(dislikes +1)}}className="dislike-button"><FontAwesomeIcon icon={faThumbsDown}/></button>
                    </div>
                </div>
            </div>

            <div class="votes-container-mc ">
                <div className="likes-mc">
                    <div className="thumbs">
                        <FontAwesomeIcon icon={faThumbsUp}/>
                    </div>
                    <div className="percent">
                        <h3>{verificatedLikesPercentage()}</h3><span>%</span> 
                    </div>                                                                        
                </div>
                <div className="dislikes-mc">
                    <div className="percent">
                        <h3>{verificatedDisLikesPercentage()}</h3><span>%</span> 
                    </div>                                    
                    <div className="thumbs">
                        <FontAwesomeIcon icon={faThumbsDown}/>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default MainCard
