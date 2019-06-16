import React from "react";
import './InputBox.css';

class InputBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            val: ""
        }
    }
    handleChange = e => {
        let str = e.target.value;
        if (str.substr(-1) !== ' '){
            this.setState({val: str});
        }
        else{
            this.props.checkWord(this.state.val);
            this.setState({val: ""});
        }
    }
    render(){
        return(
            <div className="input-box-container">
                <input className="input-box-input" type="text" value={this.state.val} onChange={this.handleChange} />
                <span className="input-box-border input-box-bottom"></span>
                <span className="input-box-border input-box-right"></span>
                <span className="input-box-border input-box-top"></span>
                <span className="input-box-border input-box-left"></span>
            </div>
        );
    }
}

export default InputBox;