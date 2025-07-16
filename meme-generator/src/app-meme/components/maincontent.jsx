import React from "react"


export default function MainContent(){
    const [count,setCount]=React.useState(1);
    const [memeObject,setMemeObject]=React.useState({
        imageUrl:"http://i.imgflip.com/1bij.jpg",
        topText:"One does not simply",
        bottomText:"Walk into Mordor"
    })
    function getImage(){
        setCount((Math.random() * 99).toFixed(0));
    }
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(data=>setMemeObject(prevMeme=>({
                ...prevMeme,
                imageUrl: data.data.memes[count].url // Example: set to first meme's URL
            }))
        )
    }, [count])

    

    function handleChange(event){
        const {value,name} = event.currentTarget
        setMemeObject(prevMeme=>({
            ...prevMeme,
            [name]:value }))
    }

    return (
        <>
        <main>
            <div className="form">
            <label>Top Text
            <input type="text" aria-label="Top Content" name="topText" placeholder="One does not simply" onChange={handleChange} value={memeObject.topText}></input>
            </label>
            <label>Bottom Text
                <input type="text" aria-label="Bottom Content" name="bottomText" placeholder="Walk into Mordor" onChange={handleChange} value={memeObject.bottomText}></input>
            </label>

            <button onClick={getImage}>Get a new meme image🖼</button>
            </div>
             <div className="meme">
                <img src={memeObject.imageUrl} />
                <span className="top">{memeObject.topText}</span>
                <span className="bottom">{memeObject.bottomText}</span>
            </div>
        </main>
        </>
    )
}





