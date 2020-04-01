import React from 'react'
import classes from './RemoveTest.module.sass'
import { getTest, removeHandler } from '../../../Axios/AxiosQuery'
import Loader from '../../UI/Loader/Loader'


class RemoveTest extends React.Component {
  state = {
    loading: true,
    testData: []
  }

  // if is admin from Main false return to main page
  componentDidMount = () => {
    if(!this.props.isAdmin) {
      this.props.linkProps.history.push('/')
       return
     }
     //waiting for test list from DB
    const testData = []
    getTest().then(data => {
     Object.keys(data.testList).forEach(id => {
       testData.push({id, name: data.testList[id].name})
     })
     this.setState({testData, loading: false})
    })
  }

  //handler to remove test from page and DB
  removeTest = (id ,event) => {
    let isRemove = window.confirm('Видалити тест?')
      if (isRemove) {
        this.props.showAlert(null, "Тест видалено!",'succes')
        event.target.closest('li').remove()
        removeHandler(id, 'testList')
      }
    }

render() {
  const cls = [classes.RemoveTest, this.props.blackTheme?classes.dark:null]

  return <div className={cls.join(' ')}>
    {
    this.state.loading
    ?<Loader />
    : <ul>
       {this.state.testData.map((testNames, index) => {
         return (
           <li key={testNames.id + index}>
             {testNames.name}
             <i className={`fas fa-trash-alt`} 
                onClick={(event) => this.removeTest(testNames.id, event)}></i>
           </li>
          )
        })}
      </ul>
    }
    </div>
    }
}

export default RemoveTest;