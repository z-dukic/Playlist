import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResult/SearchResults'
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
     
    this.state = {
      searchResults: [
        { name: 'Mišo Kovač', artist: 'Mišo Kovač', album: 'Mišo Kovač Tip hits', id: 1 },
        { name: 'Massimo', artist: 'Massimo', album: 'Massimo Tip hits', id: 2 },
        { name: 'Iron Maiden', artist: 'Iron Maiden', album: 'Fear of the dark', id: 3 }
        
      ], playlistName: 'My Playlist', 
      
      playlistTracks: [{ name: 'PlaylistName1', artist: 'PlaylistArtist1', album: 'PlaylistAlbum1', id: 4 }, 
      { name: 'PlaylistName2', artist: 'PlaylistArtist2', album: 'PlaylistAlbum2', id: 5 }, 
      { name: 'PlaylistName3', artist: 'PlaylistArtist3', album: 'PlaylistAlbum3', id: 6 }]


    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
      tracks.push(track);
      this.setState({playlistTracks: tracks})
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name){
    this.setState({playlistName: name });
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
                            onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName}
                      playlistTracks={this.state.playlistTracks}
                      onRemove={this.removeTrack}
                      onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>

    );




  }


}

export default App;
