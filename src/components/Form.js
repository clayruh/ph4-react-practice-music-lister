import React, {useState} from "react"

export default function Form( {addNewSongs} ) {
    const [ title, setTitle ] = useState("")
    const [ artist, setArtist ] = useState("")

    function resetForm() {
        setTitle("")
        setArtist("")
    }

    function handleSubmit(e) {
        e.preventDefault()
        let newSong = { title, artist }
        const OPTIONS = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSong)
        }

        fetch('http://localhost:4000/songs', OPTIONS)
        .then( res => res.json() )
        .then( data => addNewSongs(data) )

        resetForm()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>form</h1>
                <label htmlFor="title">Song Title: </label>
                <input onChange={(e) => setTitle(e.target.value) }
                type="text" 
                name="title"
                placeholder="song title"
                value={title}
                />
                <br/>
                <label htmlFor="artist">Artist Name: </label>
                <input onChange={(e) => setArtist(e.target.value)}
                type="text"
                name="artist"
                placeholder="artist name"
                value={artist}
                />
                <br/>
                <button>Submit Song</button>
            </form>
        </>
    )
}