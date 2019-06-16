import React from "react";
import './WordBox.css';
import Word from '../Word/Word';

class WordBox extends React.Component {
    render(){
        if (this.props.words.length <= 0){
            return (
                <div className="word-box-container">
                    Something's wrong. No song loaded.
                </div>
            )
        }
        return(
            <div className="word-box-container">
                {
                    this.props.words.map((object, i) => {
                        return (
                            <Word key={i} index={i} currentWord={this.props.currentWord} word={object.word} correct={object.correct} />
                        )
                    })
                }
            </div>
        );
    }
}

export default WordBox;