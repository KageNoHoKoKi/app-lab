import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = {
    button: {
      margin: 15
    },
    Paper1: {
        width:400,
        height: 170,
        padding:5,
        marginBottom:50,
        marginTop:20
    }
  };


export class Correlation extends Component {
    constructor(props){
        super(props)
        this.state = {
            answer: ''
        }
    }
    

    previous = e => {
        e.preventDefault();
        this.props.prevStep();
      }

 

  getPearsonCorrelation =(x, y) =>{
    // make sure the data type is correct
    x = x.map(parseFloat);
    y = y.map(parseFloat);

    var shortestArrayLength = 0;
     
    if(x.length == y.length) {
        shortestArrayLength = x.length;
    } else if(x.length > y.length) {
        shortestArrayLength = y.length;
        console.error('x has more items in it, the last ' + (x.length - shortestArrayLength) + ' items will be ignored');
    } else {
        shortestArrayLength = x.length;
        console.error('y has more items in it, the last ' + (y.length - shortestArrayLength) + ' items will be ignored');
    }
  
    var xy = [];
    var x2 = [];
    var y2 = [];
  
    for(var i=0; i<shortestArrayLength; i++) {
        xy.push(x[i] * y[i]);
        x2.push(x[i] * x[i]);
        y2.push(y[i] * y[i]);
    }
  
    var sum_x = 0;
    var sum_y = 0;
    var sum_xy = 0;
    var sum_x2 = 0;
    var sum_y2 = 0;
  
    for(var i=0; i< shortestArrayLength; i++) {
        sum_x += x[i];
        sum_y += y[i];
        sum_xy += xy[i];
        sum_x2 += x2[i];
        sum_y2 += y2[i];
    }
  
    var step1 = (shortestArrayLength * sum_xy) - (sum_x * sum_y);
    var step2 = (shortestArrayLength * sum_x2) - (sum_x * sum_x);
    var step3 = (shortestArrayLength * sum_y2) - (sum_y * sum_y);
    var step4 = Math.sqrt(step2 * step3);
    var answer = step1 / step4;
 
    //shortens decimals
    this.setState({
        answer : answer.toFixed(3)
    });
}
  render() {
    return (
        
      <div>
      <MuiThemeProvider>   
        <Grid container justify= "center">
        <Paper style={styles.Paper1}>
        <h1>Calculating Pearson Correlation</h1>
        <h2>{this.state.answer}</h2>
        </Paper>
        </Grid>

        <RaisedButton
            label="Get Correlation"
            primary={true}
            style={styles.button}
            onClick={()=>this.getPearsonCorrelation(this.props.correlationNum, this.props.correlationPref)}
            />
        <br/>
        <RaisedButton
            label="back"
            primary={true}
            style={styles.button}
            onClick={this.previous}
            />
        
        </MuiThemeProvider>     

      </div>
    )
  }
  
}
//never put coffeeList() THESE DANG PARETHESIS CAUSE IT TO BE CALLED ON START :C 
export default Correlation
