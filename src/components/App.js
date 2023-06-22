
import React, {useState, useEffect} from "react";
import './../styles/App.css';
import Li from "./Li";

const App = () => {

  const fruits = [
     "apple",
     "banana",
     "cherry",
     "date",
     "elderberry",
     "fig",
  ];

  const [filter, setFilter] = useState("");

  const [search, setSearch] = useState("")

  useEffect(()=>{
    setFilter(fruits.filter(fruit=> fruit.toLowerCase().includes(search.toLowerCase())
    ))
  },[search])
  

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search item</h1>
        <input onChange={(e)=>setSearch(e.target.value)} type="text"/>
        <ul>
            {
              !search &&
              fruits.map((fruit, index)=>{
                return <Li key={index} fruit={fruit} />
              })
            }
            {
              search &&
              filter.map((fruit, index)=>{
                return <Li key={index} fruit={fruit} />
              })
            }
        </ul>
    </div>
  )
}

export default App
