import React, { useState, useEffect } from "react";
import List from "../List/List";
import AddEmployee from "../AddEmployee/AddEmployee";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({});
  const [employeeObject, setEmployeeObject] = useState({
    name: "",
    role: "",
    employmentStatus: "",
    reportingLine: "",
  });

  /**useEffect function GET 
   * Function to collect all current database entries
   * Populates list of Employees for user to review
  } */
  useEffect(() => {
    async function fetchEmployees() {
      let response = await fetch("http://localhost:3001/employee", {
        mode: "cors",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      let data = await response.json();

      setEmployees([...data.payload]);
      console.log("The data loaded: ", data);
      console.log("The employees state: ", employees);
    }
    fetchEmployees();
  }, []);

  /**Function useEffect- POST
   * Function to allow user to send a newly created employee object
   * Sends employee object to the database
   * @param {*} employeeObject
   */
  useEffect(() => {
    async function addNewEmployee(newEmployee) {
      console.log("useEffect employeeObject from state: ", newEmployee);
      const employee = await fetch("http://localhost:3001/employee", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });

      if (employee.success) {
        console.log("POST was success");
      }
      setNewEmployee([...employees, newEmployee]);
    }

    addNewEmployee();
    console.log("addNewEmployee useEffect has worked");
  }, [newEmployee]);
  /** This dependency keeps causing issue- tried newEmployee as dependency (waiting for a new employee/ handleSubmit to trigger post but then crashes back end)
   */

  return (
    <div>
      <h1>User.Management</h1>
      <AddEmployee />
      <br />
      <List
        employees={employees}
        employeeObject={employeeObject}
        setEmployeeObject={setEmployeeObject}
      ></List>
    </div>
  );
}

export default App;
