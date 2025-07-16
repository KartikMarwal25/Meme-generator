import React from "react";
export default function Render(){
    const [starWarsData,setStarWarsData]=React.useState({});
    const [count,setCount]=React.useState(0);
    function sumUp(){
        setCount(prevCount=>prevCount+1);
    }
    React.useEffect(()=>{
        fetch("https://swapi.dev/api/people/1")
            .then(res=> res.json())
            .then(data=> setStarWarsData(data))
    },[count])


    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={sumUp}>Add</button>
            <div className="data">{JSON.stringify(starWarsData,null,2)}</div>
        </div>
    )
}