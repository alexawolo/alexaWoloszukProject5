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
      queenArray: []
    }
  }

  componentDidMount() {

    axios({
      method: 'get',
      url: 'http://www.nokeynoshade.party/api/queens/all',
      responseType: 'json',
      params: {
        format: 'json',
        imgonly: 'true',
      }

    }).then((res) => {
      console.log(res.data);

      let randomizedQueens = (res.data[Math.floor(Math.random() * res.data.length)]);
      console.log(randomizedQueens);

      const tenQueensArray = res.data.slice(0, 10);
      // console.log(tenQueensArray);

        this.setState({
          queenArray: res.data  
        }
      );
    });
  }

  handleClick(event) {
    console.log('clicked!');
  }

  render(){
    return (
      <div className="App">
        <h1 onClick={this.handleClick}>Don't be a drag, just be a queen</h1>
        <h2>Click on the queens below to find out their name and famous quote!</h2>
        <button className="winnersButton">👑</button>
        <div className="allCards">
          {this.state.queenArray.map((queen) => {
            //parameter is queen, the arguement is the object that exist in the array
            // name of property inside the map and obj has to be the same
            return (
              <Queen 
                img={queen.image_url}
                // name={queen.name} 
                // quote={queen.quote}
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
