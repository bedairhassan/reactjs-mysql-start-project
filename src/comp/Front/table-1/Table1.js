import { useEffect, useState } from 'react';
import * as React from 'react';

import Service from './Service'
import Column from '../templates/Column'

export default function Root(props) {

  const [getData, setData] = useState(['empty data'])

  // your fields // const[getters,setters]=useState(defaultvalue)
  const [getId, setId] = useState('')
  const [getDescription, setDescription] = useState('')

  const [getWarning, setWarning] = useState('null')

  // void function 
  let ReadAll = () => {
    Service.ReadAll().then(
      response => {

        setData(response.data)
      }
    ).catch(
      (error) => { console.log('this is error', error) }
    )
  }


  useEffect(() => {
    ReadAll()
  })

  let Delete = (id) => {
    Service.DeleteById(id).then(() => { alert('Deleted Record') })
  }

  let Edit = (item) => {
    setId(item.id)
    setDescription(item.description)
  }

  let CheckEmpty = () => {

    let array = []
    array.push(getId === null || getId === '')
    array.push(getDescription === '' || getDescription === null)

    for (let i = 0; i < array.length; i++) {

      if (array[i] === true) {
        setWarning('One or more fields are empty')
        return true
      }
    }

    return false
  }

  return (

    <>
      <h6>Warning is: {getWarning}</h6>
      <h1>This is Tasks Application</h1>
      <React.Fragment>
        <table>
          <Column Column={['id', 'description']} />
          <tbody>

            {getData.map(item => {

              return (
                <>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.description}</td>

                    <td><button id='edit-top' onClick={() => {

                      Edit(item)
                      document.getElementById('add-bottom').disabled = true
                    }


                    }>Edit</button></td>
                    <td><button onClick={() => Delete(item.id)}>Delete</button></td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
        {/* </React.Fragment>

      <React.Fragment> */}
        <h2>Id:</h2>
        <input value={getId} onChange={(e) => { setId(e.target.value) }} />

        <h2>Description</h2>
        <input value={getDescription} onChange={(e) => { setDescription(e.target.value) }} />

        <br /> <br />
        <button id='add-bottom' onClick={() => {

          Service.POST({ id: getId, description: getDescription }).then(alert('added record'));

        }}>Add Record</button>

        <button id='edit-bottom' onClick={() => {

          // validation
          if (CheckEmpty()) {
            return
          }

          Service.PUT({ id: getId, description: getDescription }, getId).then(alert('edited record'));

          document.getElementById('add-bottom').disabled = false
          setWarning('null')

        }}>Edit</button>
      </React.Fragment>
    </>
  )
}