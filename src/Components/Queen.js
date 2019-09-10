import React, {Component} from 'react';

// MAKING COMPONENT TO BRING IN API INFO ON QUEEN CARD
class Queen extends Component{
    constructor(props){
        super();
        this.state = {
            errored: false,
            src: props.img,
        }
    }

    imageError = (e) => {
        // console.log(e.target);

        // if runs... this.state.errored === true
        // when loading... 

        if (!this.state.errored) {
            this.setState({
              src: 'https://ih0.redbubble.net/image.222677543.3720/flat,550x550,075,f.u2.jpg',
              errored: true,
            });
        }
      }

    render(){
        return(
            <div className="queenCard" onClick={this.props.click}>
                <img src={this.state.src} alt="" onError={this.imageError}/>
                <div className="cardContent">
                    <h2 className="queenName">{this.props.name}</h2>
                    <p className="queenQuote">{this.props.quote}</p>
                </div>
            </div>
        );
    }

}

export default Queen;
