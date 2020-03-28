import React, {useEffect} from 'react';
import classes from './TestActive.module.sass'
import TestItems from '../TestItems'

const TestActive = ({counter, blackTheme, testList, aciveQuestion, testListCount, nextQuestionHandler}) => {
  useEffect(counter,[])

  const cls = [classes.TestActive, blackTheme?classes.dark:null]
  return (
    <div className={cls.join(' ')}>
      <div className={classes.title}> 
        <h3>
          {testList.question}
        </h3>
        <div className={classes.counter}> 
          <span>{aciveQuestion + 1}  з {testListCount}</span> 
        </div> 
      </div>
      <TestItems 
      blackTheme={blackTheme}
      nextQuestionHandler={nextQuestionHandler}
      answers={testList.answers} />
    </div>
  );
};

export default TestActive;