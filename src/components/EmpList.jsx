import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
         this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    

    deleteEmployee(id){
        const conf= window.confirm("Do you want to delete ?");

        if(conf){
            EmployeeService.deleteEmployee(id)
            .then( res => {
                this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
                window.location.reload();

            });
     }
    
}
  handleLogout= () =>{
    const confirm= window.confirm("Are you sure ?");
    if(confirm){
            window.location.href="/";
        }
        else{
            window.location.href="/employee"
        }
 }

 
    viewEmployee(id){
        <Link to={`/view-employee/${id}`}>this.props.history.push(`/view-employee/${id}`);</Link>
    }
    editEmployee(id){
        <Link to={`/update-employee/${id}`}>this.props.history.push(`/update-employee/${id}`);</Link>
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){

        this.props.history.push('/add-employee');
    }

    render() {
        return (
            
            <div  style={{backgroundImage:`url('https://wallpapercave.com/wp/wp9017429.jpg')`, height: '655px',fontWeight:"bold",color:"white"}}>
                <div className='container'>
                    <h2 className="text-center">Employees List</h2>
                    <div>
                        <Link to='/'> <button  class="btn btn-secondary btn-lg float-right " onClick={()=>this.handleLogout()}>{"LOGOUT"}</button></Link>
                    </div>
                    <div>
                        <Link to={`/add-employee`}><button className='btn btn-info'>Add Employee</button></Link> 
                    </div>
                    <br></br>
                    <div className = "row">
                        <table className = "table table-striped table-bordered table-hover table-light" >

                            <thead class="thead-dark">
                                <tr>
                                    <th>  First Name</th>
                                    <th> Last Name</th>
                                    <th>  Email Id</th>
                                    <th>  Department</th>
                                    <th>  Salary</th>
                                    <th>  Gender</th>
                                    <th>  DateOfBirth</th>
                                    <th style={{width:"170px",textAlign:"center"}}> Actions</th>
                                </tr>
                            </thead>
                            <tbody className='text-dark'>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                             <td> {employee.department}</td>
                                             <td> {employee.salary}</td>
                                             <td> {employee.gender}</td>
                                             <td> {employee.dob}</td>
                                             <td>
                                              <Link to={`/update-employee/${employee.id}`}><button  onClick={ () => this.editEmployee(employee.id)} className="btn btn-success" >Edit </button></Link>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListEmployeeComponent
