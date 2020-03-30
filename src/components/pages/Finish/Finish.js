import React, {useEffect} from 'react';
import classes from './Finish.module.sass'
import { sendResults } from '../../../Axios/AxiosQuery'

const Finish = props => {

  // making a new object with test
useEffect(() => {
  props.isFinish()
  const test = []
  test.push({
    nameTest: props.nameTest,
    question: props.questions,
    name: props.name,
    email: props.email,
    date: new Date().toLocaleString("ua"),
    curret: `Правильно: ${props.rightAnswer} з  ${props.questions.length}`
  })
  //Here send data to database
  sendResults(test)
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  const cls = [classes.Finish, props.blackTheme?classes.dark:null]
  return (
    <div className={cls.join(' ')}>
      <h3>Правильно: {props.rightAnswer} з  {props.questions.length}</h3>
      <ul>
        {props.questions.map((question, index) => {
          return <li 
          key={index}>
            {question.question}
            {question.curret
            ?<span className={classes.done}>&#10003;</span>
            :<span className={classes.error}>&times;</span>}
          </li>
        })}
      </ul>
    </div>
    );
};

export default Finish;