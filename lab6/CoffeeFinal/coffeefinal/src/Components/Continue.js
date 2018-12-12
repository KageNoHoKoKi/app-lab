import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Slider from '@material-ui/lab/Slider';
import RaisedButton from 'material-ui/RaisedButton';

export class Continue extends Component {
    
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
    render() {
    return (
      <div>
        <MuiThemeProvider>
         <React.Fragment>
            <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={(e)=> {this.props.dataToCorrelation();
                          this.continue(e);}}
            />
          </React.Fragment>
        </MuiThemeProvider>   
      </div>
    )
  }
}
const styles = {
    button: {
      margin: 15
    }
  };

export default Continue
