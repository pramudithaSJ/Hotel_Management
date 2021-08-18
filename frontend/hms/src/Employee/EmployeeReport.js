import React from 'react';
import '../CSS/Employee/employee.css';


const EmployeeReport = () => {
    return (
        <div className={'body'}>
        <div className={"container "}>
            <br />
            <div className="card-employee ">
            <h1 className="text-center">Bonus Report</h1>
                <br/>
                <div className="row1">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4">
                      <form method="post" className="card-employee-inner">
                          <br/>
                          <h2 className="text-center">Employee Details</h2>
                          <br/>
                          <div className="container   ">
                              <div><label>Full Name</label><input className="form-control" type="text"/></div>
                                    <div><label>Phone Number</label><input className="form-control" type="number"/></div>
                                    <div><label>NIC Number</label><input className="form-control" type="text"/></div>
                                    <div><label>Job Title</label><input className="form-control" type="text"/></div>
                                    <div><label>Salary</label><input className="form-control" type="text"/></div>
                                    <br/>
                                    <br/>
                          </div>
                      </form>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <form method="post" className="card-employee-inner">
                            <br/>
                            <h2 className="text-center">Generate bonus</h2>
                            <br/>
                            <div className="container   ">
                                <div><label>Enter Bonus</label><input className="form-control" type="number"/>
                                </div>
                                <br/>
                                <center>
                                    <button type="button" className="btn btn-primary">Pay</button>
                                </center>
                                <div><label>Bonus</label><br/><input className="form-control" type="number"/></div><br/>
                                    <div><label>Salary with bonus</label>
                                        <input className="form-control" type="number"/>
                                    </div>
                            </div>  <br/>  <br/>  <br/>
                        </form>

                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default EmployeeReport;