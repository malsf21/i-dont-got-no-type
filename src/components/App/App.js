import React, { Component } from 'react';
import './App.css';
import InputBox from '../InputBox/InputBox';
import WordBox from '../WordBox/WordBox';
import data from '../../data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: data[Math.floor(Math.random() * data.length)],
      currentWord: 0,
      correct: 0,
      incorrect: 0,
      size: 100,
      wrongAllowed: true,
      words: []
    }
    let tempWords = this.state.currentSong.lyrics.split(" ");
    let startIndex = Math.floor(Math.random() * (tempWords.length-100));
    for (let i = startIndex; i < startIndex + this.state.size; i++){
      this.state.words.push(
        {
          "word": tempWords[i],
          "correct": false
        }
      )
    }
  }
  checkWord = guess => {
    if (this.state.correct + this.state.incorrect < this.state.size){
      let correctBool = true;
      if (guess !== this.state.words[this.state.currentWord].word){
        correctBool = false;
        this.setState({incorrect : this.state.incorrect + 1})
      }
      else{
        this.setState({correct : this.state.correct + 1})
      }
      let newWords = this.state.words;
      newWords[this.state.currentWord].correct = correctBool;
      this.setState({
        currentWord: this.state.currentWord + 1,
        words: newWords
      });
    }
  }
  render(){
    return (
      <div className="app">
        <div className="app-container">
          <h1 className="text-tight">i don't got no type</h1>
          <h4 className="text-tight">a typing game focused on rap lyrics</h4>
          <div className="row">
            <div className="col text-left">
              {this.state.currentSong.title} - {this.state.currentSong.artist}
            </div>
            <div className="col text-right">
              <div>
                <span className="word-correct">{this.state.correct}</span>/
                <span className="word-incorrect">{this.state.incorrect}</span>/
                {this.state.size}
              </div>
            </div>
          </div>
          <WordBox words={this.state.words} currentWord={this.state.currentWord} />
          <InputBox checkWord={guess => this.checkWord(guess)} />
        </div>
      </div>
    );
  }
}

export default App;
