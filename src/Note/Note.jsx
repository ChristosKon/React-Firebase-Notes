import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {
    constructor(props){
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render(){
        return (
           <div className="note fade-in">
               <p className="noteContent">{this.noteContent}</p>
               <button className="deleteBtn" onClick={() => this.handleRemoveNote(this.noteId)}>Remove</button>
           </div> 
        )
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note;