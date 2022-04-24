import SiteLogo from "../images/airbnb-logo.png"


export default function Navbar()    {
    return  (
        <nav>
            <img src={SiteLogo} alt="" className="site-logo"/>
        </nav>
    )
}