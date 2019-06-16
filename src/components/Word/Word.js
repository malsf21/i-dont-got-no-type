import React from "react";

class Word extends React.Component {
    render(){
        let wordClass = "";
        if (this.props.currentWord === this.props.index){
            wordClass = "word-current";
        }
        else if (this.props.currentWord > this.props.index){
            if (this.props.correct){
                wordClass = "word-correct";
            }
            else{
                wordClass = "word-incorrect";
            }
        }
        return (
            <span className={wordClass}>{this.props.word} </span>
        )
    }
}

export default Word;