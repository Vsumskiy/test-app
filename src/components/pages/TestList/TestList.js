import React from 'react'
import classes from './TestList.module.sass'
import { getTest } from '../../../Axios/AxiosQuery'
import Test from '../../Test/Test'
import Loader from '../../UI/Loader/Loader'

class TestList extends React.Component  {

state = {
  nameTest: '',
  list: [],
  loading: true,
  start: false,
  curretTest : []
}

//waiting test list from data base
componentDidMount() {
    getTest().then(data => {
      let list = Object.values(data.testList)
      this.setState({list,loading:false})
    } 
  )
}

//checking a different type in obj from DB
startTest = (isNonFilter, nameTest) => {
 let curretTest = isNonFilter.filter(e => typeof e !=='string')
  this.setState({curretTest, nameTest,start: true})
}
renderList = () => {
  const cls = [classes.TestList, this.props.blackTheme?classes.dark:null]
  if (this.state.loading) {
    return <Loader />
  } else {
    return (<ul className={cls.join(' ')}>
            {this.state.list.map((testIitem, index)=>{
              return <li
              key={index}
              onClick={() => this.startTest(Object.values(testIitem), testIitem.name)}>
                <h4>{testIitem.name}</h4>
              </li>
            })}
          </ul>)
    }
}

render () {
  return (!this.state.start?this.renderList()
  :<Test
    email={this.props.email}
    blackTheme={this.props.blackTheme}
    surname={this.props.surname}
    name={this.props.name}
    nameTest={this.state.nameTest}
    testList={[this.state.curretTest]} /> )
  }
}

export default TestList
