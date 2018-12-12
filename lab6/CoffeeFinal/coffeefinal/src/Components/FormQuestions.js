import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Slider from '@material-ui/lab/Slider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from '@material-ui/lab/Slider';

const styles = {
  Card: {height: 500, width:200, overflowY : 'auto' },
  leftFrame: {paddingLeft:550},
  rightFrame: {paddingRight:550},
  Paper1: {width:200, marginTop:20, marginBottom:35, padding:5},
  Paper2: {width:200, marginBottom:30, padding:20},
  sliderAnswerBox: {width:25, margin:"auto"},
  slider: {width:180, margin: "auto", padding:2}
}

export class FormQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeVal: 0,
      radioVal: 0,
      value: 0,
    }
  }
  
  
  radioChange = event => {
    this.setState({ 
      radioVal: event.target.value
    });
  }
  rangeChange = (event, rangeVal) => {
    this.setState({ rangeVal });
  };

  // addData = (updateNumCoffee,updateCofeePreference) =>{
  //   const {intervieweeAnswers} = this.props
  //   let x = {
  //     numCoffee: updateNumCoffee,
  //     coffeePreference: updateCofeePreference
  //   }
  //   this.setState({
  //     intervieweeAnswers :intervieweeAnswers.push(x)
  //   })
  // }
  render() {
    const {rangeVal} = this.state;
    return (
      <MuiThemeProvider>
        <React.Fragment>
        
         
        <Grid container justify="center">
        
        <br/>
        <Paper style= {styles.Paper1}>
          
           <h4>How many coffees did you order?</h4>
        <div>
        <Slider
          min = {0}
          max = {10}
          step = {1}
          value={rangeVal}
          style={styles.slider}
          onChange={this.rangeChange}
        />
        </div>
        <Paper style={styles.sliderAnswerBox}>
        <p>{this.state.rangeVal}</p>
        </Paper>
        </Paper>
        </Grid>


      <Grid container justify="center">
        <Paper style= {styles.Paper2}>
      <FormControl component="fieldset">
          <FormLabel component="legend">Coffee Preference</FormLabel>
          <RadioGroup
            name="PreferenceQuestion"
            value={this.state.radioVal}
            onChange={this.radioChange}
            
          >
            <FormControlLabel value= "0" control={<Radio />} label="I prefer my coffee delivered" />
            <FormControlLabel value= "1" control={<Radio />} label="I prefer to pick up my coffee" />
          </RadioGroup>
        </FormControl>
        </Paper>
      </Grid>



        
        <RaisedButton
            label="Submit"
            primary={true}
            style={styles.button}
            onClick={() => this.props.handleChange("numCoffee", this.state.rangeVal, "coffeePreference", this.state.radioVal)}
            />
      
        
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}



export default FormQuestions
