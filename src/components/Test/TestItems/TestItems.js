import React from 'react';
import classes from './TestItems.module.sass'

const TestItems = ({ blackTheme, answers,  nextQuestionHandler }) => {
  const cls = [classes.TestItems, blackTheme?classes.dark:null]
  return (
    <>
    <ul className={cls.join(' ')}>
      {answers.map((answer,index) => {
       return <li 
       key={index}
       onClick={()=> nextQuestionHandler(answer.id)}
       >
         {answer.text}
        </li>
      })}
    </ul>
    </>
  );
};

export default TestItems;