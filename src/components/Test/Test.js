import React, { Component } from 'react'
import classes from './Test.module.sass'
import TestActive from './TestItems/TestActive/TestActive'
import Finish from '../pages/Finish/Finish'
import Countdown from 'react-countdown-now'

export default class Test extends Component {
  state = {
    aciveQuestion: 0, 
    countAnswer: 0,
    questionTime: 30000,
    lodaing: true,

    testList: []
  }

  componentDidMount = async () => {
    let testL = []
    this.props.testList.forEach(element => {
      testL.push( element )
    });
    
    this.setState({testList:testL[0] , lodaing: false})
  }

  nextQuestionHandler = id => {

    clearInterval(this.state.intervalId)
    let { aciveQuestion, countAnswer } = this.state;
    let answerid = this.state.testList[this.state.aciveQuestion].rightAnswer;
    let curretAnswer = this.state.testList[this.state.aciveQuestion];
    if (answerid === id) {
      this.setState({
        countAnswer: countAnswer+1
      })
    curretAnswer.curret = true;
      
    }
    this.setState({
      aciveQuestion: aciveQuestion+1,
      curretAnswer
    })
    this.counter()
  }

  isFinishHandler = () => {
    clearInterval(this.state.intervalId)
  }

  counter = () => {
    let intervalId =  setInterval(() => {
      let aciveQuestion = this.state.aciveQuestion;
       aciveQuestion++;
       this.setState({aciveQuestion})

    },this.state.questionTime)
      this.setState({intervalId})
  }

  renderContent = () => {
    let result;
    if (this.state.lodaing) {

      result = (<p>Завантаження...</p>)
    } else {
      result = (
        <div className={classes.Test}>
        <h1>{this.props.surname}  {this.props.name}</h1>

        {this.state.aciveQuestion !== this.state.testList.length
        ?<Countdown date={Date.now() + this.state.questionTime} />
        :null}
        
      {this.state.aciveQuestion < this.state.testList.length
      ?<TestActive
        balckTheme={this.props.balckTheme}
        counter={this.counter}
        testList={this.state.testList[this.state.aciveQuestion]}
        testListCount={this.state.testList.length}
        aciveQuestion={this.state.aciveQuestion}
        nextQuestionHandler={this.nextQuestionHandler}
      />
      :<Finish 
        nameTest={this.props.nameTest}
        balckTheme={this.props.balckTheme}
        rightAnswer={this.state.countAnswer}
        questions={this.state.testList}
        email={this.props.email}
        curretAnswer={this.state.curretAnswer}
        isFinish={this.isFinishHandler}
        name={`${this.props.surname} ${this.props.name}`}

          />
      }
      </div>
      )
    }
    return result
  }

  render() {
    return ( this.renderContent() )
  }
}
