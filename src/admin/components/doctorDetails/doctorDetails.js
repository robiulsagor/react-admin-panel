import React, { Component, useEffect, useState } from 'react';
import SidebarNav from '../sidebar';
import IMG01 from '../../assets/images/avatar-01.jpg'
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getDoctorDetails } from '../../../features/getDetails/getDetailsSlice'
import { updateInfo } from '../../../features/updateInfo/updateInfo';

const DoctorDetails = () => {
    const [key, setKey] = useState(1)
    const [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(new Date())

    const dispatch = useDispatch()
    const location = useLocation()
    const id = location.pathname.split('/')[3]

    useEffect(() => {
        dispatch(getDoctorDetails(id))
    }, [])

    const { isError, isSuccess, isLoading, data } = useSelector(state => state.getDetails)
    const updated = useSelector(state => state.updateSlice)

    const dept = data.departments?.join(", ") || ''

    const [hospitalName, setHospitalName] = useState('')
    const [address, setAddress] = useState('')
    const [locality, setLocality] = useState('')
    const [departments, setDepartments] = useState([])
    const [minCharge, setMinCharge] = useState()
    const [maxCharge, setMaxCharge] = useState()
    const [locCoords, setLocCoords] = useState([])
    const [dailyAppoints, setDailyAppoints] = useState('')

    const [showNoti, setShowNoti] = useState(false)

    useEffect(() => {
        setHospitalName(data.name)
        setAddress(data.address)
        setLocality(data.locality)
        setDailyAppoints(data.totalDailyAppointments)
        setDepartments(data.departments?.join(", ") || '')
        setMinCharge(data.minCharge)
        setMaxCharge(data.maxCharge)
        setLocCoords(data.locCoordinates)
    }, [isSuccess, data])

    // to show and hide modal
    const handleClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    }

    const handleChange = date => {
        setStateDate(date)
    };

    const updateHandler = e => {
        e.preventDefault()

        const data = { name: hospitalName, address, locality, totalDailyAppointments: dailyAppoints, departments, minCharge, maxCharge, locCoordinates: locCoords }

        const compactData = { data, id }

        dispatch(updateInfo(compactData))
        dispatch(getDoctorDetails(id))
        setShowNoti(true)
        handleClose()
    }

    if (showNoti) {
        setTimeout(() => {
            setShowNoti(false)
        }, 4000)
    }

    return (
        <div>
            <SidebarNav />
            <div className="page-wrapper">
                <div className="content container-fluid">

                    <div className="page-header">
                        <div className="row">
                            <div className="col">
                                <h3 className="page-title">Doctor Details</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/admin">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link to="/admin/doctor-list">Doctor list</Link></li>
                                    <li className="breadcrumb-item active">Doctor Details</li>
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

                    {/* show the loading spinner */}
                    {isLoading && (<>
                        <div className="  d-flex flex-column justify-content-center align-items-center" style={{ height: '60vh' }} >

                            <div className="spinner-grow"
                                style={{ width: '3rem', height: '3rem' }} role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <h4 className='mt-3'>Loading...</h4>
                        </div>
                    </>
                    )}

                    {isError && (
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '60vh' }} >

                            <h3 className="text-danger">Something Went Wrong.</h3>
                            <h4 className="text-danger">Please try again</h4>
                        </div>
                    )}

                    {isSuccess && (
                        <>
                            {(showNoti && updated.isSuccess) && (
                                <div className="row mx-auto">
                                    <div className="col-6 mx-auto">
                                        <div className="card">
                                            <div className={updated.isSuccess === true ? "alert alert-success" : "alert alert-danger"} role="alert">
                                                {updated.isSuccess ? <span>Successfully updated</span> :
                                                    <span>Something Went wrong</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="row">
                                <div className="col-lg-12">

                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title d-flex justify-content-between">
                                                <span>Doctor Details</span>
                                                <Link to="#0" className="edit-link" onClick={handleShow}>
                                                    <i className="fa fa-edit mr-1"></i>Edit
                                                </Link>
                                            </h5>
                                            <div className="row">
                                                <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Name</p>
                                                <p className="col-sm-10">{data.name}</p>
                                            </div>
                                            <div className="row">
                                                <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">
                                                    Address</p>
                                                <p className="col-sm-10">{data.address} </p>
                                            </div>
                                            <div className="row">
                                                <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">
                                                    Locality
                                                </p>
                                                <p className="col-sm-10">{data.locality}</p>
                                            </div>
                                            <div className="row">
                                                <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Departments</p>
                                                <p className="col-sm-10">{dept}</p>
                                            </div>
                                            <div className="row">
                                                <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Total Daily Appointments</p>
                                                <p className="col-sm-10">{data.totalDailyAppointments}</p>
                                            </div>
                                            <div className="row">
                                                <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Minimum Charge</p>
                                                <p className="col-sm-10">{data.minCharge}</p>
                                            </div>
                                            <div className="row">
                                                <p className="col-sm-2 text-muted text-sm-right mb-0">Maximum Charge</p>
                                                <p className="col-sm-10">{data.maxCharge}</p>
                                            </div>
                                            <div className="row">
                                                <p className="col-sm-2 text-muted text-sm-right mb-0">Status</p>
                                                <p className="col-sm-10 mb-0">{data.isActive === true ? 'Active' : 'Inactive'}</p>
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
                        </>
                    )}

                </div>
            </div>
            {/* modal */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h5 className="modal-title">Hospital Details</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body">
                        <form onSubmit={updateHandler}>
                            <div className="row form-row">
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Hospital Name</label>
                                        <input type="text" className="form-control" value={hospitalName} onChange={e => setHospitalName(e.target.value)} autoFocus required />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="text" className="form-control" value={address} onChange={e => setAddress(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Locality</label>
                                        <input type="text" className="form-control" value={locality} onChange={e => setLocality(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Daily Appointments</label>
                                        <input type="text" className="form-control" value={dailyAppoints} onChange={e => setDailyAppoints(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Departments</label>
                                        <input type="text" className="form-control" value={departments} onChange={e => setDepartments(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Min Charge</label>
                                        <input type="text" className="form-control" value={minCharge} onChange={e => setMinCharge(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Max Charge</label>
                                        <input type="text" className="form-control" value={maxCharge} onChange={e => setMaxCharge(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Location Co-ordinates</label>
                                        <input type="text" className="form-control" value={locCoords} onChange={e => setLocCoords(e.target.value)} />
                                    </div>
                                </div>
                                {/* <div className="col-12">
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
                                </div> */}
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


export default DoctorDetails;