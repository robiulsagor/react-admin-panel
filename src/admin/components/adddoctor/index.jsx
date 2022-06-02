import React, { Component } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Sidebar from '../sidebar'

export default class AddDoctor extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h3 className="page-title">Add Doctor</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/admin">Dashboard</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link to="/admin/doctor-list">Doctors</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Add Doctor</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <p className='strong'>Please fill in all fields</p>

                                        <form>
                                            <div className="row mb-3">
                                                <div className="col">
                                                    <input type="text" className='form-control' placeholder='First Name' />
                                                </div>
                                                <div className="col">
                                                    <input type="text" className='form-control' placeholder='Last Name' />
                                                </div>
                                            </div>

                                            <div className="row  mb-3">
                                                <div className="col">
                                                    <input type="text" className='form-control' placeholder='Phone No.' />
                                                </div>
                                                <div className="col">
                                                    <input type="text" className='form-control' placeholder='Email Id' />
                                                </div>
                                            </div>


                                            <div className="row  mb-3">
                                                <div className="col">
                                                    <div className="row">
                                                        <div className="col-5">
                                                            <select class="custom-select bg-primary text-white">
                                                                <option selected>Specialties</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="row">
                                                        <div className="col">

                                                            <div class="custom-control custom-radio custom-control-inline">
                                                                <input type="radio" id="male" name="gender" class="custom-control-input" value="Male" />
                                                                <label class="custom-control-label" for="male">Male</label>
                                                            </div>

                                                            <div class="custom-control custom-radio custom-control-inline">
                                                                <input type="radio" id="female" name="gender" class="custom-control-input" value="female" />
                                                                <label class="custom-control-label" for="female">Female</label>
                                                            </div>

                                                            <div class="custom-control custom-radio custom-control-inline">
                                                                <input type="radio" id="others" name="gender" class="custom-control-input" value="others" />
                                                                <label class="custom-control-label" for="others">Others</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row  mb-3">
                                                <div className="col">
                                                    <input type="text" className='form-control' placeholder='Enter Address / Hospital Name' />
                                                </div>
                                            </div>

                                            <div className="row  mb-3">
                                                <div className="col">
                                                    <div className="row">
                                                        <div className="col-5">
                                                            <select class="custom-select bg-primary text-white">
                                                                <option selected>State</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="row">
                                                        <div className="col-5">
                                                            <div class="form-check form-check-inline">
                                                                <select class="custom-select bg-primary text-white">
                                                                    <option selected>City</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row  mb-3">
                                                <div className="col">
                                                    <input type="text" className='form-control' placeholder='Registration No.' />
                                                </div>
                                                <div className="col">
                                                    <input type="text" className='form-control' placeholder='Consultaion Fee' />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-6 mx-auto mt-2">
                                                    <button className='btn btn-primary btn-block'>Save</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
