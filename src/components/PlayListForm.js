import React, { Component } from 'react';

export default class NavBar extends Component {
    constructor(props){
      super(props);

    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      SongNotes: ""
    };
    }

  render() {
    return (
      <div>

      <form onSubmit={this.addToList}>
<input name="username" type="text" placeholder="Enter your UserName"
onChange={this.handleUserChange} value={this.state.userName}/>

<input name="artist" type="text" placeholder="Artist Name"
onChange={this.handleArtistChange} value={this.state.songArtist}/>

<input name="title" type="text" placeholder="Song Title"
onChange={this.handleTitleChange} value={this.state.songTitle}/>

<textarea rows="4" cols="50" name="notes" type="text" placeholder="Notes"  onChange={this.handleNotesChange} value={this.state.songNotes}></textarea>

<button type="submit">Submit</button>

        </form>

      </div>
    )
  }
}
