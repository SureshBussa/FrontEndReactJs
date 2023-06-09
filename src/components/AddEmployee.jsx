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
        const conf= window.confirm("Do you want to save ?");

        if(conf){
            EmployeeService.createEmployee(employee)
            .then(res =>{
                <Link to='/employees'> this.props.history.push('/employees');</Link>
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
        this.props.history.push('/employees');
    }
    render(){
        return(
        <div style={{backgroundImage:`url('https://wallpaperset.com/w/full/8/3/7/492402.jpg')`, height: '750px'}}>
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
                                    <div className = "form-group">
                                        <label > Department: </label>
                                        <input placeholder="Department" name="department" className="form-control" 
                                            value={this.state.department} required onChange={this.changeDepartmentHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label > Salary: </label>
                                        <input placeholder="salary" name="salary" className="form-control" 
                                            value={this.state.salary} required onChange={this.changeSalaryHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label > Gender: </label>&emsp;
                                        {/* <label  style={{fontFamily:'-moz-initial',color:'aqua',fontSize:25}}>
                                        <input type="radio"  name="gender" value={this.state.gender} required onChange={this.changeGenderHandler} />
                                        Male
                                        </label>&emsp; */}
                                        {/* <input type="radio"  name="gender"  value={this.state.gender} required onChange={this.changeGenderHandler} />
                                        <label  style={{fontFamily:'-moz-initial',color:'aqua',fontSize:25}}>Female</label>&emsp;
                                        <input type="radio"  name="gender"  value={this.state.gender} required onChange={this.changeGenderHandler} />
                                       <label  style={{fontFamily:'-moz-initial',color:'aqua',fontSize:25}}>Other</label>&emsp; */}
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
