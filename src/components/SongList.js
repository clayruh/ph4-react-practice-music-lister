import React from 'react'

export default function SongList( {songs, removeSong} ) {

    function handleDelete(songObj) {
        const OPTIONS = {method: "DELETE"}

        fetch(`http://localhost:4000/songs/${songObj.id}`, OPTIONS)
        .then( res => res.json() )
        .then( () => removeSong(songObj) )
    }

    const mappedSongs = songs.map( songObj => (
        <div key={songObj.id}>  
            <h1>{songObj.title}</h1>
            <p>{songObj.artist}</p>
            <button onClick={() => handleDelete(songObj)}>Delete song</button>
        </div>
    ))

    return ( 
        <ul>
            <h1>songs list</h1>
            <li>{mappedSongs}</li>
        </ul>
    )
}
