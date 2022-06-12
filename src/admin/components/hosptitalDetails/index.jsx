import React, { Component, useEffect, useState } from 'react';
import SidebarNav from '../sidebar';
import IMG01 from '../../assets/images/avatar-01.jpg'
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getHospitalDetails } from '../../../features/getDetails/getDetailsSlice'

const HospitalDetails = () => {
    const [key, setKey] = useState(1)
    const [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(new Date())

    const dispatch = useDispatch()
    const location = useLocation()
    console.log(location);
    const hospitalId = location.pathname.split('/')[3]
    console.log(hospitalId);

    useEffect(() => {
        dispatch(getHospitalDetails(hospitalId))
    }, [])

    const { isError, isSuccess, isLoading, data } = useSelector(state => state.getDetails)


    const handleClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    }
    const handleChange = date => {
        setStateDate(date)
    };

    return (
        <div>
            <SidebarNav />
            <div className="page-wrapper">
                <div className="content container-fluid">

                    <div className="page-header">
                        <div className="row">
                            <div className="col">
                                <h3 className="page-title">Hospital Details</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="/admin/hospitals">Hospitals</a></li>
                                    <li className="breadcrumb-item active">Hospital Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* page header */}
                    {/* <div className="row">
                        <div className="col-md-12">
                            <div className="profile-header">
                                <div className="row align-items-center">
                                    <div className="col-auto profile-image">
                                        <Link to="">
                                            <img className="rounded-circle" alt="User" src={IMG01} />
                                        </Link>
                                    </div>
                                    <div className="col ml-md-n2 profile-user-info">
                                        <h4 className="user-name mb-0">Ryan Taylor</h4>
                                        <h6 className="text-muted">ryantaylor@admin.com</h6>
                                        <div className="user-Location"><i className="fa fa-map-marker" aria-hidden="true"></i> Florida, United States</div>
                                        <div className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                    </div>
                                    <div className="col-auto profile-btn">
                                        <Link to="#0" className="btn btn-primary" >
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* row */}

                    {isLoading && (<>
                        <div className="spinner-grow"
                            style={{ width: '3rem', height: '3rem' }} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </>
                    )}

                    {isSuccess && (
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title d-flex justify-content-between">
                                            <span>Hospital Details</span>
                                            {/* <Link to="#0" className="edit-link" onClick={handleShow}>
                                                    <i className="fa fa-edit mr-1"></i>Edit
                                                </Link> */}
                                        </h5>
                                        <div className="row">
                                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Name</p>
                                            <p className="col-sm-10">{data.name}</p>
                                        </div>
                                        <div className="row">
                                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Date of Birth</p>
                                            <p className="col-sm-10">24 Jul 1983</p>
                                        </div>
                                        <div className="row">
                                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Email ID</p>
                                            <p className="col-sm-10">johndoe@example.com</p>
                                        </div>
                                        <div className="row">
                                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Mobile</p>
                                            <p className="col-sm-10">305-310-5857</p>
                                        </div>
                                        <div className="row">
                                            <p className="col-sm-2 text-muted text-sm-right mb-0">Address</p>
                                            <p className="col-sm-10 mb-0">4663  Agriculture Lane,<br />
                                                Miami,<br />
                                                Florida - 33165,<br />
                                                United States.</p>
                                        </div>
                                    </div>
                                </div>


                                {/* <div className="modal fade" id="edit_personal_details" aria-hidden="true" role="dialog">
                                        <div className="modal-dialog modal-dialog-centered" role="document" >
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Personal Details</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <form>
                                                        <div className="row form-row">
                                                            <div className="col-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label>First Name</label>
                                                                    <input type="text" readOnly={true} className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label>Last Name</label>
                                                                    <input type="text" readOnly={true} className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <label>Date of Birth</label>
                                                                    <div className="cal-icon">
                                                                        <input type="text" readOnly={true} className="form-control"
                                                                            value="24-07-1983" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label>Email ID</label>
                                                                    <input type="email" readOnly={true} className="form-control"
                                                                        value="johndoe@example.com" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label>Mobile</label>
                                                                    <input type="text" readOnly={true} value="+1 202-555-0125" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <h5 className="form-title"><span>Address</span></h5>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <label>Address</label>
                                                                    <input type="text" readOnly={true} className="form-control"
                                                                        value="4663 Agriculture Lane" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label>City</label>
                                                                    <input type="text" readOnly={true} className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label>State</label>
                                                                    <input type="text" readOnly={true} className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label>Zip Code</label>
                                                                    <input type="text" readOnly={true} className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label>Country</label>
                                                                    <input type="text" readOnly={true} className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                            </div>
                        </div>
                    )}

                </div>
            </div>
            {/* modal */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h5 className="modal-title">Personal Details</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body">
                        <form>
                            <div className="row form-row">
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" value="John" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" value="Doe" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <div className="cal-icon">
                                            <DatePicker
                                                className="form-control"
                                                selected={startDate}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Email ID</label>
                                        <input type="email" className="form-control"
                                            value="johndoe@example.com" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Mobile</label>
                                        <input type="text" value="+1 202-555-0125" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <h5 className="form-title"><span>Address</span></h5>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="text" className="form-control"
                                            value="4663 Agriculture Lane" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input type="text" className="form-control" value="Miami" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>State</label>
                                        <input type="text" className="form-control" value="Florida" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Zip Code</label>
                                        <input type="text" className="form-control" value="22434" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Country</label>
                                        <input type="text" className="form-control" value="United States" />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
            {/* modal */}
        </div >

    );
}


export default HospitalDetails;