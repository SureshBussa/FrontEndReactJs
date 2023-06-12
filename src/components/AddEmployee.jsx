import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            department:'',
            salary:'',
            gender:'',
            dob:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }
    saveEmployee = (event) => {
        event.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId,department :this.state.department,salary:this.state.salary,gender:this.state.gender,dob:this.state.dob};
        console.log('employee => ' + JSON.stringify(employee));
        // const conf= window.confirm("Do you want to save ?");

        if (this.state.firstName.length === 0) {
            alert("firstName field is Empty");
          }
         else if (this.state.lastName.length === 0) {
            alert("lastName field is Empty");
          }
          else if (this.state.emailId.length === 0  ) {
            alert("emailId field is Empty");
          }
          else if (this.state.department.length === 0) {
            alert("Department field is Empty");
          }
          else if (this.state.salary.length === 0) {
            alert("salary field is Empty");
          }
          else if (this.state.gender.length === 0) {
            alert("gender field is Empty");
          }
          else if (this.state.dob.length === 0) {
            alert("dob field is Empty");
          }
          
        else if(window.confirm("Do you want to save ?")){
            EmployeeService.createEmployee(employee)
            .then(res =>{
                <Link to='/employee'> this.props.history.push('/employees');</Link>
                window.location.replace("/employee");
                
            });

            }

    }
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});

    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changeDepartmentHandler= (event) => {
        this.setState({department: event.target.value});
    }
    changeSalaryHandler= (event) => {
        this.setState({salary: event.target.value});
    }
    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }
    changeDobHandler= (event) => {
        this.setState({dob: event.target.value});
    }

    cancel(){
        this.props.history.push('/employee');
    }
    render(){
        return(
        <div style={{backgroundImage:`url('https://wallpaperset.com/w/full/8/3/7/492402.jpg')`, height: '750px'}}>
               <div className = "container">
                    <div className = "row">
                        <div className = " w-100 ">
                            <div className = "card-body" style={{fontWeight:"bolder"}}>
                                <form>
                                    <div className = "form-group" >
                                        <h3 className="text-center">Add New Employee Details </h3>
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" 
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control" 
                                            value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label > Department: </label>
                                        <select placeholder="Department" name="department" className="form-control" 
                                            value={this.state.department} required onChange={this.changeDepartmentHandler}>
                                            <option>None</option>
                                            <option>Sales</option>
                                            <option>HR</option>
                                            <option>Accounts</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label > Salary: </label>
                                        <input type='number' placeholder="salary" name="salary" className="form-control" 
                                            value={this.state.salary} required onChange={this.changeSalaryHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label > Gender: </label>&emsp;
                                        <select placeholder="Enter M or F" name="gender" className="form-control" 
                                            value={this.state.gender} required onChange={this.changeGenderHandler}>
                                                <option>None</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label > DateofBirth: </label>
                                        <input placeholder="dob" name="dob" className="form-control"  type='date'
                                            value={this.state.dob} required onChange={this.changeDobHandler}/>
                                    </div>
                        
                                    <Link to='/employee'><button className="btn btn-success" onClick={this.saveEmployee} >Add</button></Link>
                                    <Link to='/employee'> <button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )}
        
}


export default CreateEmployeeComponent
