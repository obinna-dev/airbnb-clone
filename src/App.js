import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Card from "./components/Card"
import dataArr from "./components/data"

export default function App()    {
    const cardElements = dataArr.map(data => {
        console.log(data)
        return <Card
            img = {data.coverImg}
            rating = {data.stats.rating}
            reviewCount = {data.stats.reviewCount}
            location = {data.location}
            title = {data.title}
            price = {data.price}
        />
    })


    return (
        <div>  
            <Navbar />
            <Hero />
            {cardElements}
        </div>
    )
}