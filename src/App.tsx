import React from 'react';
import Home from './pages/Home';


export default class App extends React.Component{

  render(){
    return(
      <React.Fragment>
        <div>
          <Home/>
        </div>
      </React.Fragment>
    )
  }

}