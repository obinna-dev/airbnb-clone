import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Card from "./components/Card"
import KatieImage from "./images/katie-zaferes.png"




export default function App()    {
    return (
        <div>  
            <Navbar />
            <Hero />
            <Card 
                img = {KatieImage}
                rating = "5.0"
                reviewCount = "(6)"
                location = "Australia"
                title = "Life lessons with Katie Zaferes"
                price = "136"
            />
        </div>
    )
}