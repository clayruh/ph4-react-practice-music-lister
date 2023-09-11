import React, {useState, useEffect} from "react"
import SongList from './SongList'
import Form from './Form'

function App() {
  const [songs, setSongs] = useState([])

  function addNewSongs(newSong) {
    setSongs([...songs, newSong])
  }

  useEffect( () => {
    fetch('http://localhost:4000/songs')
    .then( res => res.json() )
    .then( songs => setSongs(songs) )
}, [])

  function removeSong(deletedSong) {
    const filteredSongs = songs.filter( song => song.id !== deletedSong.id )
    setSongs(filteredSongs)
  }

  return (
    <div className="App">
      <SongList songs={songs} removeSong={removeSong}/>
      <Form addNewSongs={addNewSongs} />
    </div>
  );
}

export default App;
