import trollface from "../../assets/troll-face.png"

export default function header(){
    return (
        <>
        <header className="header">
            <img src={trollface} alt="logo"></img>
            <h1 className="site-name">Meme Generator</h1>
        </header>
        </>
    )
}