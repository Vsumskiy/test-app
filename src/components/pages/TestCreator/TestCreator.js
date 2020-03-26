import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './TestCreator.module.sass'
import { setTest } from '../../../Axios/AxiosQuery'
import Select from '../../UI/Select/Select'


class TestCreator extends React.Component {
  state = {
    testList: [],
    name: '',
    checkedName: false,
    question: '',
    answer1: '',
    answer2: '',
    answer3: '',
    rightAnswer: 1,
    id: null
  }

  name = ({ target }) => {
    let name = target.value
    this.setState({name})    
  }
  question = ({ target }) => {
    let question = target.value
    this.setState({question}) 
  }  

   answer1 = ({ target }) => {
    let answer1 = target.value
    this.setState({answer1}) 
  } 
  answer2 = ({ target }) => {
    let answer2 = target.value
    this.setState({answer2}) 
  }
  answer3 = ({ target }) => {
    let answer3 = target.value
    this.setState({answer3})
  }

  selectChangeHandler = event => {
    this.setState({rightAnswer: +event.target.value})
  }

  setQuestion = () => {
    const testList = this.state.testList.concat()
    const index = testList.length + 1
    const {question, answer1, answer2,answer3, rightAnswer} = this.state
    console.log(!question);
    if (!question || !answer1 || !answer2 || !answer3) {
      alert('Поле не може бути пустим!')
      return;
    }
    
    const testItem = {
      question: question,
      id: index,
      rightAnswer: +rightAnswer,
      answers: [
        {text: answer1, id: 1 },
        {text: answer2, id: 2 },
        {text: answer3, id: 3 },
      ]
    }
    
    testList.push(testItem)
    this.setState({
      checkedName: true,
      question: '',
      answer1: '',
      answer2: '',
      answer3: '',
      testList,
      rightAnswer: 1,
    })
    window.alert("Питання створено!")
  }

  createTest = () => {
    if (!this.state.name) {
      alert('Назва тесту не може бути пуста')
      return;
    }

    setTest(this.state.testList, this.state.name)
    this.setState({
      testList: [],
      checkedName: false,
      name: '',
      question: '',
      answer1: '',
      answer2: '',
      answer3: '',
      rightAnswer: 1,
      id: null
    })
    window.alert("Тест створено!")
  }

  render () {
    const select = <Select 
      label='Виберіть правильну відповідь'
      value={this.state.rightAnswer}
      onChange={this.selectChangeHandler}
      options={[
        {text: 1, value: 1},
        {text: 2, value: 2},
        {text: 3, value: 3},
      ]}
    />
    
  const cls = [classes.TestCreator, this.props.balckTheme?classes.dark:null]
    return (
      <div className={cls.join(' ')}>
        <NavLink 
        className={classes.createLink}
        to={'/0936139517results2020'}>
        Back
      </NavLink>
        <div className={classes.createNav}>
        <input type="text" placeholder="Введіть назву тесту" 
          onChange={this.name}
          disabled={this.state.checkedName}
          value={this.state.name}/>
          <input type="text" placeholder="Введіть питання" 
          onChange={this.question}
          value={this.state.question}/>
          <input type="text" placeholder="Варіант 1"
          value={this.state.answer1} 
          onChange={this.answer1}/>
          <input type="text" placeholder="Варіант 2"
          value={this.state.answer2} 
           onChange={this.answer2}/>
          <input type="text" placeholder="Варіант 3" 
          value={this.state.answer3}
          onChange={this.answer3}/>
          {select}
          <button onClick={this.setQuestion}>Додати питання</button>
          <button onClick={this.createTest}>Створити тест</button>
        </div>
      </div>
    )
  }
}

export default TestCreator
