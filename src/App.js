import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Card from "./components/Card"
import dataArr from "./components/data"

export default function App()    {
    const cards = dataArr.map(data => {
        return <Card
            key = {data.id} //This solves the console warning "Warning: Each child in a list should have a unique "key" prop."
            {...data}
        />
    })
    return (
        <div>  
            <Navbar />
            <Hero />
            <section className="cards-list">{cards}</section>
        </div>
    )
}