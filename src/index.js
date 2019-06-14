import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonDisplay';

class App extends React.Component {
   state = { lat: null,errorMassage: '' };
    
    componentDidMount () {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }
        

 //cheack about page 55 it's very important if you forget what
 //the steps to build class app such as:- constructor,super
 //,thiszzz          

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>;
        } 
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonsDisplay lat={this.state.lat} /> 
        }        
        
        return <div>Loading</div>
    }
};    

ReactDOM.render(<App />, document.querySelector('#root'));