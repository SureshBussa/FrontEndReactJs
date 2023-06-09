import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{
        const match={params:useParams()};
        return  <Children{...props} match={match}/>
    }
}

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
            id:this.props.match.params.id,
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
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            let employee =res.data;
            this.setState({firstName:employee.firstName,
            lastName:employee.lastName,
             emailId:employee.emailId,
             department:employee.department,
             salary:employee.salary,
             gender:employee.gender,
             dob:employee.dob
    });
});
    }
    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId,department :this.state.department,salary:this.state.salary,gender:this.state.gender,dob:this.state.dob};
        console.log('employee => ' + JSON.stringify(employee));

       
        const conf= window.confirm("Do you want to update ?");

        if(conf){ EmployeeService.updateEmployee(employee,this.state.id)
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
    cancel(){
        this.props.history.push('/employees');
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
    render(){
        return(
             <div>
                
               <div style={{backgroundImage:`url('https://www.wallpaperflare.com/static/674/247/756/abstract-shapes-minimalism-blue-background-wallpaper.jpg')`,fontWeight:"bold",fontFamily:"revert",height:'750px'}}>
                    <div className = "container">
                            <div className = "d-flex" >
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                          <h3 className="text-center ">Edit Employee Details</h3>
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
                                            value={this.state.department} onChange={this.changeDepartmentHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label > Salary: </label>
                                        <input placeholder="salary" name="salary" className="form-control" 
                                            value={this.state.salary} onChange={this.changeSalaryHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label > Gender: </label>
                                        <select placeholder="Enter M or F" name="gender" className="form-control" 
                                            value={this.state.gender} onChange={this.changeGenderHandler}>
                                                 <option>None</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label > DateofBirth: </label>
                                        <input placeholder="dob" name="dob" className="form-control"  type='date'
                                            value={this.state.dob} onChange={this.changeDobHandler}/>
                                    </div>
                                    <Link to='/employee'><button  onClick={this.updateEmployee}  className="btn btn-success"  >Update</button></Link>
                                    <Link to='/employee'> <button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button></Link>
                                </form>
                            </div>
                            </div>
                    </div>

               </div>
        </div>
    )
}
        
    }
export default withRouter(UpdateEmployeeComponent)
