import React, { Component } from 'react'
import {Card, Typography, Grid, CardContent} from '@material-ui/core/';

const styles = {
  Card: {height: 400, width:200, overflowY : 'auto' },
  leftFrame: {paddingLeft:550, marginTop:40},
  rightFrame: {paddingRight:550, marginTop:40}
}

class CorrelationTable extends Component {
  constructor(props){
    super(props)
    // this.coffeeList = this.coffeeList.bind(this);
    // this.coffeePreferenceList = this.coffeePreferenceList.bind(this);
  }

coffeeList = () => {
const {intervieweeAnswers} = this.props;

 return intervieweeAnswers.map((answers, index)=>{
    return(<li key= {index}>{answers.numCoffee}</li>)
})

}

coffeePreferenceList = () => {
  const {intervieweeAnswers} = this.props;
  
   return intervieweeAnswers.map((answers, index)=>{
      return(<li key= {index}>{answers.coffeePreference}</li>)
  })
  
  }

  


  render() {
    return (
      <div>
  <Grid container spacing={24}> 
    <Grid container item xs={6} justify ='center' style={styles.leftFrame}>
    <Card style = {styles.Card}>
      <CardContent>
      <Typography variant="h5" component="h2">
          <br/>
         Number of Coffee Drinks
         <ol>
           {this.coffeeList()}
         </ol>
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid container item xs={6} justify='center' style={styles.rightFrame}>
    <Card style = {styles.Card} >
      <CardContent>
      <Typography variant="h5" component="h2">
          Preference for Delivery (0) vs Pickup (1)
          <ol>
            {this.coffeePreferenceList()}
          </ol>
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Grid>      
      </div>
    )
  }
}

export default CorrelationTable
