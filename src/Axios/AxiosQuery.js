import axios from 'axios'

//send results when test is over
export async function sendResults(test) {
  
  try {
   await axios.post('database.json', test)
  } catch(e) {
    console.log(e);
  }
}

//get result for 'Results' page
export async function getResults(testItems) {
  let responseTest = {...testItems};
    try {
      const response = await axios.get('database.json')
      
      Object.keys(response.data).forEach((id, index) => {
        responseTest.tests.push({
          id,
          userInfo: response.data[id][0],
          email: response.data[id][0].email
        })
        responseTest.loading = false;
      })
    } 
    catch(e) {
      responseTest.emptyDB = true
      }
      
  return responseTest
}

//remove one test item from 'Results' page
export async function removeHandler(id, url) {
  try {
    await axios.delete(`database/${url}/${id}.json`)
  } 
  catch(e) {
    console.log(e);
  }
}

//get data for enter admin panel
export async function getAdminData(userData) {
  let responseUserData = {...userData};

  try {
    const response = await axios.get('database.json')
    responseUserData.name = response.data.name;
    responseUserData.pass = response.data.password;
   return responseUserData
  } 
  catch(e) {
    console.log(e)
  }
}

//get test from base data
export async function getTest() {
  let res;
  try {
   const response = await axios.get('database.json')
    res = {
      testList: response.data
    }
  } catch(e) {
    console.log(e);
  }
  return res
}


export async function setTest(test, name) {
  try {
   await axios.post('database.json',{...test, name:name})
  } catch(e) {
    console.log(e);
  }
}