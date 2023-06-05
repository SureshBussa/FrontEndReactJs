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
            emailId: ''
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
             emailId:employee.emailId
    });
});
    }
    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.updateEmployee(employee,this.state.id).then(res =>{
            <Link to='/employees'> this.props.history.push('/employees');</Link>
            
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
             <div>
                
               <div style={{backgroundImage:`url('https://www.wallpaperflare.com/static/674/247/756/abstract-shapes-minimalism-blue-background-wallpaper.jpg')`,fontWeight:"bold",fontFamily:"revert",height:'655px'}}>
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
                                    <Link to='/employee'><button  onClick={this.updateEmployee}  className="btn btn-success"  >Update</button></Link>
                                    <Link to='/employee'> <button className="btn btn-info"  style={{marginLeft: "10px"}}>Confirm</button></Link>
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