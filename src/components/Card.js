
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"



export default function Card()  {
    return  (
        <section className="card">
            <div className="card--image--container">
                <p className="availability">SOLD OUT</p>
            </div>
            <p className="rating small-text"><FontAwesomeIcon icon={faStar} className="star-icon"/> 5.0 <span className="number-of-ratings">(6) • </span><span className="location">USA</span></p>
            <p className="small-text">Life lessons with Katie Zaferes</p>
            <p className="price small-text"> <strong>From $136</strong> / person </p>
        </section>
    )
}