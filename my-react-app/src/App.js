import React from "react"
import './App.css';
import data from "./data.js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

const App = () => {
 const cards = data.map(item => {
  return (
        <Card
             key={item.id}
             {...item}
         /* img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots={item.openSpots}*/
        />
    )
   })

  return (
     <div>
       <Navbar />
       <Hero />
       <section className="cards-list">
        {cards}
       </section>
     </div>
  )
}

export default App;
