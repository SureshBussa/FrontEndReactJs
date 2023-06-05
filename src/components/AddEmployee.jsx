import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }
    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res =>{
            <Link to='/employees'>this.props.history.push('/employees');</Link>
        });
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

    cancel(){
        this.props.history.push('/employees');
    }
    render(){
        return(
        <div style={{backgroundImage:`url('https://wallpaperset.com/w/full/8/3/7/492402.jpg')`, height: '655px'}}>
               <div className = "container">
                    <div className = "row">
                        <div className = " w-100 ">
                            <div className = "card-body">
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
                                    <br/>
                                    <br />
                                    <Link to='/employee'><button className="btn btn-success" onClick={this.saveEmployee} >Add</button></Link>
                                    <Link to='/employee'> <button className="btn btn-info"  style={{marginLeft: "10px"}}>Confirm</button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )}
        
}


export default CreateEmployeeComponent