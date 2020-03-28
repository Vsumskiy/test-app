import React from 'react'
import classes from './TestList.module.sass'
import { getTest } from '../../../Axios/AxiosQuery'
import Test from '../../Test/Test'

class TestList extends React.Component  {

state = {
  nameTest: '',
  list: [],
  loading: true,
  start: false,
  curretTest : []
}

componentDidMount() {
    getTest().then(data => {
      let list = Object.values(data.testList)
      this.setState({list,loading:false})
    } 
  )
}

startTest = (isNonFilter, nameTest) => {
 let curretTest = isNonFilter.filter(e => typeof e !=='string')
  this.setState({curretTest, nameTest,start: true})
}
// start: true
renderList = () => {
  const cls = [classes.TestList, this.props.blackTheme?classes.dark:null]
  const loading = [classes.loading, this.props.blackTheme?classes.dark:null]
  let result;
  if (this.state.loading) {
    result = <div 
    className={loading.join(' ')}>
      <p>Завантаження...</p></div>
  } else {
    result = <ul className={cls.join(' ')}>
            {this.state.list.map((testIitem, index)=>{
              return <li
              key={index}
              onClick={() => this.startTest(Object.values(testIitem), testIitem.name)}>
                <h4>{testIitem.name}</h4>
              </li>
            })}
          </ul>  
  }
  return result
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
