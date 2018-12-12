import React, {
  Component
} from 'react'
import FormQuestions from './FormQuestions';
import Correlation from './Correlation';
import CorrelationTable from './CorrelationTable'
import Continue from './Continue';

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      intervieweeAnswers: [
        {numCoffee: 1,
      coffeePreference: 0}],
      arrayNum : 0,
      correlationNum : [],
      correlationPref : []
    }
  }


   
  // Proceed to next step
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    });
  };
  //previous step
  prevStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1 
    });
  };
  // separates the object into arrays because the pearson function only takes arrays.
  // this is done by mapping over the object intevieweeAnswers, creating a new array and concatting it to 
  // an array. This array's state is then set.
  dataToCorrelation = () => {
    let collectArray = this.state.correlationNum.concat(this.state.intervieweeAnswers.map(answers=>answers.numCoffee));
    let collectArray1 = this.state.correlationPref.concat(this.state.intervieweeAnswers.map(answers=>answers.coffeePreference));
    this.setState({
        correlationNum : collectArray,
        correlationPref : collectArray1
     });
    }

  //handles appending the selection from the radio and slider to the intervieweeAnswers object
  handleChange = (input, value, input2, value2) => {
  
    let answers = this.state.intervieweeAnswers;
   //x is the appended object onto intervieweeAnswers
    let x ={
      numCoffee : answers[input] = value,
      coffeePreference : answers[input2] = value2
    }
    //push appends
    answers.push(x)
    //updates state
    this.setState({
      intervieweeAnswers : answers,
      numCoffee : "",
      coffeePreference : ""
      

    })
  };

  render() {
    const { step } = this.state;
    const { intervieweeAnswers } = this.state;
    const {correlationNum,correlationPref} = this.state;

      // the different pages are displayed using a switch statement
      switch (step) {
        case 1:
        return (
          <div>
            {/* this component is where the questions are stored as well as their slider and radio buttons */}
          <FormQuestions 
          // we need to pass these on because the handleChange takes the values from the
          // slider and radio button and setStates of the intervieweeAnswers
          intervieweeAnswers ={intervieweeAnswers}
          handleChange = {this.handleChange}
          />
          {/* this displays the intervieweeAnswers object from the surveyer's selections */}
          <CorrelationTable intervieweeAnswers = {intervieweeAnswers}/>
          {/* it does what it says. Continues to next page */}
          <Continue 
          nextStep = {this.nextStep} 
          dataToCorrelation = {this.dataToCorrelation}
          intervieweeAnswers ={intervieweeAnswers}
          />
          </div>
        )
        case 2:
        return (
          //this is where the pearson function is stored. It requires the arrays that were mentioned earlier
          <Correlation correlationNum= {correlationNum} correlationPref = {correlationPref} prevStep = {this.prevStep}/>
        )
      }

      
      
    
  }
}

export default UserForm