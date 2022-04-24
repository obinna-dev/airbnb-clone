
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
// import BackgroundImage from "../images/katie-zaferes.png"


export default function Card(props)  {
    return  (
        <section className="card">
            <div className="card--image--container" style={{backgroundImage:`url(${props.img})`}}>
            {/* <div className="card--image--container" style={{backgroundImage:`url(${BackgroundImage})`}}> */}
            <p className="availability">SOLD OUT</p>
            </div>
            <p className="rating small-text"><FontAwesomeIcon icon={faStar} className="star-icon"/> {props.rating} <span className="number-of-ratings">({props.reviewCount}) • </span><span className="location">{props.location}</span></p>
            <p className="small-text">{props.title}</p>
            <p className="price small-text"> <strong>From ${props.price}</strong> / person </p>
        </section>
    )
}
