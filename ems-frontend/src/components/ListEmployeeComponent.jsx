import React, {useEffect, useState} from 'react'
import { listEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees]=useState([])

    useEffect(() => {
          listEmployee().then((response) =>{
             setEmployees(response.data);
          }).catch(error => {
            console.error(error);
          })
    }, [])

    // const dummyData= [
    //     {
    //        "id" : 1,
    //         "firstName" : "Manya",
    //         "lastName": "Mishra",
    //         "email": "manyamish@gmail.com"
    //     },

    //     {
    //         "id": 2,
    //          "firstName": "Kaushik",
    //          "lastName": "Mishra",
    //          "email": "kaushikmish@gmail.com"
    //      },

    //      {
    //         "id": 3,
    //          "firstName": "Kishi",
    //          "lastName": "Mishra",
    //          "email": "kishimish@gmail.com"
    //      },

    //     ]
  
  const navigator = useNavigate();
  function addNewEmployee(){
    navigator('/add-employee');

  }
  return (
    <div className='container'>

        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                   <th>Employee id</th>
                   <th>Employee First Name</th>
                   <th>Employee Last Name</th>
                   <th>Employee Email id</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.email}</td>

                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent
