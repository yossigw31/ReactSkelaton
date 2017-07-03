/**
 * Created by Yossi Goeta on 7/1/2017.
 */
import React,{PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
App.proptype = {
  children:PropTypes.object.isRequired
};

export default App;
