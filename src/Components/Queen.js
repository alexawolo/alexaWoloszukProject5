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
        console.log(e.target);

        // if runs... this.state.errored === true
        // when loading... 

        if (!this.state.errored) {
            this.setState({
              src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png',
              errored: true,
            });
        }
      }

    render(){
        return(
            <div className="queenCard">
                <img src={this.state.src} alt="" onClick={this.props.click} onError={this.imageError}/>
                {/* <div className="cardContent">
                    <h2 className="queenName">{this.props.name}</h2>
                    <p className="queenQuote">{this.props.quote}</p>
                </div> */}
            </div>
        );
    }

}

export default Queen;