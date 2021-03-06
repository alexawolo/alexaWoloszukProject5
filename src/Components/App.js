// IMPORT REACT FROM NODE MODULES
import React, {Component} from 'react';
// IMPORT CSS FILE
import '../Styling/App.scss';
// IMPORT AXIOS FROM THE NODE MODBULES IN ORDER TO MAKE A API CALL
import axios from 'axios';
// IMPORT QUEEN COMPONENT
import Queen from './Queen';

class App extends Component {

  constructor() {
    super();
    this.state = {
      queenArray: [],
      contentShown: false,
    }
  }

  componentDidMount() {

    axios({
      method: 'get',
      url: 'https://www.nokeynoshade.party/api/queens/all',
      responseType: 'json',
      params: {
        format: 'json',
        imgonly: 'true',
      }

    }).then((res) => {

      const data = [...res.data];
      const randomQueenArray = [];

      for (let i = 0; i < 9; i++){
        let randomNumber = Math.floor(Math.random() * data.length )
        randomQueenArray.push(data[randomNumber])

        data.splice(randomNumber, 1);
        // console.log(randomQueenArray);


      }

        this.setState({
          queenArray: randomQueenArray,
          noRepeatQueensArray: data
        }
      );
    });
  }

  handleClick= (event) => {
    console.log('clicked!');
    this.setState({
      contentShown: !this.state.contentShown
    });
  }

  render(){
    const { isContentShown } = this.state;
    return (
      <div className="App">
        <h1>Don't be a drag, just be a queen</h1>
        <h2>Hover beside the queens below to find out their name and famous quote!</h2>
        <div className="allCards">
          {this.state.queenArray.map((queen) => {
            //parameter is queen, the arguement is the object that exist in the array
            // name of property inside the map and obj has to be the same
            return (
              <Queen 
                img={queen.image_url}
                click={this.handleClick}
                name={queen.name} 
                quote={queen.quote}
                key={queen.id}
              />

            )
          })}
        </div>
      </div>
    );
  }
}
export default App;
