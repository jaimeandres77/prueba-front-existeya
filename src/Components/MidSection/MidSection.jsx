import "./MidSection.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faX} from "@fortawesome/free-solid-svg-icons"

function MidSection(){
    return(
        <div className="mid-section-container">
            <div className="titles-container">
                <h4>Lorem Ipsum.Dolor</h4>
                <h2>IP lorem ip.</h2>
            </div>
            <div className="mid-section-p-container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis a deleniti quod eaque laborum.
                Sint fugiat eveniet quasi neque modi voluptate labore velit aliquam saepe numquam.</p>
            </div>
            <div className="x-container">
                <FontAwesomeIcon icon={faX}/>
            </div>
        </div>
    )
}

export default MidSection