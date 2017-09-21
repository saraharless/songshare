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

this.handleUserChange = this.handleUserChange.bind(this);
this.handleArtistChange = this.handleArtistChange.bind(this);
this.handleTitleChange = this.handleTitleChange.bind(this);
this.handleNotesChange = this.handleNotesChange.bind(this);
this.addToList = this.addToList.bind(this);

    }

  render() {
    return (
      <div>

      <form onSubmit={this.addToList}>
<input name="username" type="text" placeholder="UserName"
onChange={this.handleUserChange} value={this.state.userName}/>

<input name="artist" type="text" placeholder="Artist or Band Name"
onChange={this.handleArtistChange} value={this.state.songArtist}/>

<input name="title" type="text" placeholder="Song Title"
onChange={this.handleTitleChange} value={this.state.songTitle}/>

<textarea rows="4" cols="50" name="notes" type="text" placeholder="Notes About Song"  onChange={this.handleNotesChange} value={this.state.songNotes}></textarea>

<button type="submit" className="btn">Submit</button>

        </form>

      </div>
    )
  }
}
