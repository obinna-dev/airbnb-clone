import HeroImage from "../images/photo-grid.png"


export default function Hero()    {
    return  (
        <section className="hero--section">
            <img src={HeroImage} alt="" className="hero--image"></img>
            <h1 className="hero--title--text">Online Experiences</h1>
            <p className="hero--desc--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </section>
    )
}