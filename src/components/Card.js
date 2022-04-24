import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default function Card(props)  {
        let badgeText
        if (props.openSpots === 0) {
            badgeText = "SOLD OUT"
        } else if (props.location === "Online") {
            badgeText = "ONLINE"
        }
    
    return  (
        <div>
                <div className="card--image--container" style={{backgroundImage:`url(${props.coverImg})`}}>
                    {badgeText && <p className="availability">{badgeText}</p>}
                </div>
                <p className="rating small-text">
                    <FontAwesomeIcon icon={faStar} className="star-icon"/> {props.rating} 
                    <span className="number-of-ratings"> ({props.stats.reviewCount}) • </span>
                    <span className="location">{props.location}</span>
                </p>
                <p className="small-text">{props.title}</p>
                <p className="price small-text"> <strong>From ${props.price}</strong> / person </p>
        </div>
    )
}
