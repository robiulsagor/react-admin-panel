import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../sidebar'
import { specialities, ayush, facililites, insurance } from '../../data'
import Flag from '../../assets/images/flag-48.png'

export default class CreateHospital extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h3 className="page-title">Create New Hospital</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/admin">Dashboard</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link to="/admin/hospital-list">Hospitals</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Create New Hospital
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col">


                                {/*  CARD = INFORMATION */}
                                <div className="card">
                                    <div className="card-header text-center">
                                        <h6 className='strong'>INFORMATION</h6>
                                    </div>

                                    <div className="card-body">
                                        <form encType='multipart/form-data' method='post'>
                                            <div className="row">
                                                <div className="col-3">
                                                    <label htmlFor="hospital_name">Hospital Name:</label>
                                                </div>
                                                <div className="col">
                                                    <input type="text" name="" className="form-control" id="hospital_name" />

                                                    {/* Hospital Type Radio Btn */}
                                                    <div className="mt-3">

                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="govt" name="hospital_type" className="custom-control-input" value="Government" />
                                                            <label className="custom-control-label" htmlFor="govt">Government</label>
                                                        </div>

                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="public" name="hospital_type" className="custom-control-input"
                                                                value="Public" />
                                                            <label className="custom-control-label" htmlFor="public">Public</label>
                                                        </div>

                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="private" name="hospital_type" className="custom-control-input"
                                                                value="Private" />
                                                            <label className="custom-control-label" htmlFor="private">Private</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mt-4">
                                                <div className="col-3">
                                                    <label htmlFor="accreditation">
                                                        Accreditation <br />
                                                        (For e.g NABH/NABL/JCI/ISO/Others) <br />
                                                        (For Hospital/Blood Bank/Laboratory):
                                                    </label>
                                                </div>
                                                <div className="col-3">
                                                    <textarea className='form-control' id="accreditation" cols="30" rows="5"></textarea>
                                                </div>
                                            </div>

                                            <div className="row mt-4">
                                                <div className="col-3">
                                                    <label>Health Care Provider Type:</label>
                                                </div>
                                                <div className="col">

                                                    <div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" name="heatlthCareType" className="custom-control-input" id="Hospital" value="Hospital" />
                                                            <label className="custom-control-label" htmlFor="Hospital">Hospital</label>
                                                        </div>

                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" name="heatlthCareType" className="custom-control-input" id="Dispensary" value="Dispensary" />
                                                            <label className="custom-control-label" htmlFor="Dispensary">Dispensary</label>
                                                        </div>

                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" name="heatlthCareType" className="custom-control-input" id="CommunityCare" value="Community Health Care" />
                                                            <label className="custom-control-label" htmlFor="CommunityCare">Community Health Care</label>
                                                        </div>

                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" name="heatlthCareType" className="custom-control-input" id="NursingHome" value="Nursing Home" />
                                                            <label className="custom-control-label" htmlFor="NursingHome">Nursing Home</label>
                                                        </div>

                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" name="heatlthCareType" className="custom-control-input" id="MedicalCollege" value="Medical College/Institute" />
                                                            <label className="custom-control-label" htmlFor="MedicalCollege">Medical College/Institute</label>
                                                        </div>

                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" name="heatlthCareType" className="custom-control-input" id="SubCentre" value="SubCentre" />
                                                            <label className="custom-control-label" htmlFor="SubCentre">Sub Centre</label>
                                                        </div>

                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" name="heatlthCareType" className="custom-control-input" id="PolyClinic" value="Poly Clinic" />
                                                            <label className="custom-control-label" htmlFor="PolyClinic">Poly Clinic</label>
                                                        </div>

                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" name="heatlthCareType" className="custom-control-input" id="DispensaryPrimaryHealthCare" value="Dispensary Primary Health Care" />
                                                            <label className="custom-control-label" htmlFor="DispensaryPrimaryHealthCare">Dispensary Primary Health Care</label>
                                                        </div>

                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" name="heatlthCareType" className="custom-control-input" id="Clinic" value="Clinic" />
                                                            <label className="custom-control-label" htmlFor="Clinic">Clinic</label>
                                                        </div>

                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" name="heatlthCareType" className="custom-control-input" id="Others" value="Others" />
                                                            <label className="custom-control-label" htmlFor="Others">Others</label>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row mt-4">
                                                <div className="col-3">
                                                    <label htmlFor="regi_no">Hospital Registration No.:</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="text" className='form-control' id="regi_no" />
                                                </div>
                                            </div>

                                            <div className="row mt-4">
                                                <div className="col-3">
                                                    <label htmlFor="regi_scan_copy">Registration No. Scanned Copy:</label>
                                                </div>
                                                <div className="col-6">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="customFile" name='something' />
                                                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mt-4">
                                                <div className="col-3">
                                                    <label htmlFor="regi_scan_copy">
                                                        Logo (only JPG, GIF, PNG with max size: 4MB allowed):
                                                    </label>
                                                </div>
                                                <div className="col-6">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="logo" name='Logo' />
                                                        <label className="custom-file-label" htmlFor="logo">Choose file</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mt-4">
                                                <div className="col-3">
                                                    <label htmlFor="regi_scan_copy">
                                                        Photos (only JPG, GIF, PNG with max size: 4MB allowed):
                                                    </label>
                                                </div>
                                                <div className="col-6">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="photo" name='hospital_photo' />
                                                        <label className="custom-file-label" htmlFor="photo">Choose file</label>
                                                    </div>
                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                </div>

                                {/* CARD= FOR OFFICE  */}
                                <div className="card mt-5">
                                    <div className="card-header text-center">
                                        <h6 className='strong'>
                                            FOR OFFICE USE ONLY (WILL NOT BE SHARED PUBLICLY)
                                        </h6>
                                    </div>

                                    <div className="card-body">

                                        <div className="row  ">
                                            <div className="col-3">
                                                <label htmlFor="nodal_name">
                                                    Nodal Person for this Information - Name and Designation:
                                                </label>
                                            </div>
                                            <div className="col">
                                                <input type="text" className='form-control' id="nodal_name" />
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="nodal_phone">
                                                    Telephone Number of the Nodal Person for this Information:
                                                </label>
                                            </div>
                                            <div className="col">
                                                <input type="text" className='form-control' id="nodal_phone" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-3">
                                                <label htmlFor="nodal_email">
                                                    Nodal Person Email Id:
                                                </label>
                                            </div>
                                            <div className="col">
                                                <input type="email" className='form-control' id="nodal_email" placeholder='example@example.com' />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* CARD = HOSPITAL ADDRESS */}
                                <div className="card mt-5">
                                    <div className="card-header text-center">
                                        <h6 className="strong">
                                            Hospital Address
                                        </h6>
                                    </div>

                                    <div className="card-body">

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="address">Address</label>
                                            </div>
                                            <div className="col-5">
                                                <textarea className="form-control" id="" cols="30" rows="5"></textarea>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="state">State:</label>
                                            </div>
                                            <div className="col-5">
                                                <select className="custom-select" >
                                                    <option selected>Andaman Nicobar</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="district">District</label>
                                            </div>
                                            <div className="col-5">

                                                <select className="custom-select" id='district'>
                                                    <option selected>Nicobar</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="pin">Pin</label>
                                            </div>
                                            <div className="col-5">

                                                <input type="text" className="form-control" id="pin" />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* CARD */}
                                <div className="card mt-5">
                                    <div className="card-header text-center">
                                        <h6 className="strong">
                                            CONTACT / HELP DESK OF HOSPITAL (FOR PUBLIC DOMAIN)
                                        </h6>
                                    </div>

                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-3">
                                                <label htmlFor="tele_phone">
                                                    Telephone/Landline (STD + NUMBER):
                                                </label>
                                            </div>
                                            <div className='col-5'>
                                                <div className="row">
                                                    <div className="col-1">
                                                        <FontAwesomeIcon icon={faPhone} />
                                                    </div>
                                                    <div className="col">
                                                        <input type="text" className='form-control' name="" id="" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="mobile_no">
                                                    Mobile No.:
                                                </label>
                                            </div>
                                            <div className='col-5'>
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src={Flag} style={{ width: '30px' }} alt="" />
                                                    </div>
                                                    <div className="col">
                                                        <input type="text" className='form-control' name="" id="mobile_no" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="emergency_no">
                                                    Emergency Number:
                                                </label>
                                            </div>
                                            <div className='col-5'>
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src={Flag} style={{ width: '30px' }} alt="" />

                                                    </div>
                                                    <div className="col">
                                                        <input type="text" className='form-control' name="" id="emergency_no" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="toll_free_no">
                                                    Toll Free No. (If Any):
                                                </label>
                                            </div>
                                            <div className='col-5'>
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src={Flag} style={{ width: '30px' }} alt="" />
                                                        {/* <FontAwesomeIcon icon={faPhone} /> */}
                                                    </div>
                                                    <div className="col">
                                                        <input type="text" className='form-control' name="" id="toll_free_no" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="primary_email">
                                                    Hospital Primary Email Id:
                                                </label>
                                            </div>
                                            <div className='col-5'>
                                                <input type="email" className='form-control' name="" id="primary_email"
                                                    placeholder='example@gmail.com' />
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="secondary_email">
                                                    Hospital Secondary Email Id:
                                                </label>
                                            </div>
                                            <div className='col-5'>
                                                <input type="email" className='form-control' name="" id="secondary_email"
                                                    placeholder='example@gmail.com' />
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="website">
                                                    Website:
                                                </label>
                                            </div>
                                            <div className='col-5'>
                                                <input type="text" className='form-control' name="" id="website" placeholder='example.com' />
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="year">
                                                    Established Since (Year):
                                                </label>
                                            </div>
                                            <div className='col-5'>
                                                <input type="text" className='form-control' name="" id="year" />
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="map_coordinate1">
                                                    Google Map Co-Ordinates:
                                                </label>
                                            </div>
                                            <div className='col-5'>
                                                <input type="text" className='form-control' name="" id="map_coordinate1" />
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="map_coordinate2">
                                                    Google Map Co-Ordinates:
                                                </label>
                                            </div>
                                            <div className='col-5'>
                                                <input type="text" className='form-control' name="" id="map_coordinate2" />
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                {/* CARD SPECIALITIES*/}
                                <div className="card mt-5" >
                                    <div className="card-header text-center">
                                        <h5 className="strong">SPECIALITIES</h5>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">

                                            {specialities.map((data, i) => {
                                                return (
                                                    <div className="col-4 mt-2" key={i}>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" name="specialities" id={data.name_id} value={data.name} />
                                                            <label className="custom-control-label" htmlFor={data.name_id}>
                                                                {data.name}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* CARD AYUSH */}
                                <div className="card mt-5" >
                                    <div className="card-header text-center">
                                        <h5 className="strong">AYUSH</h5>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">

                                            {ayush.map((data, i) => {
                                                return (
                                                    <div className="col-4 mt-2" key={i}>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" name="ayush" id={data.name_id} value={data.name} />
                                                            <label className="custom-control-label" htmlFor={data.name_id}>
                                                                {data.name}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* CARD FACILITIES */}
                                <div className="card mt-5" >
                                    <div className="card-header text-center">
                                        <h5 className="strong">FACILITIES</h5>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">

                                            {facililites.map((data, i) => {
                                                return (
                                                    <div className="col-4 mt-2" key={i}>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" name="facilities" id={data.name_id} value={data.name} />
                                                            <label className="custom-control-label" htmlFor={data.name_id}>
                                                                {data.name}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* CARD = MEDACAL INSURANCE */}
                                <div className="card mt-5" >
                                    <div className="card-header text-center">
                                        <h5 className="strong">MEDACAL INSURANCE</h5>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">

                                            {insurance.map((data, i) => {
                                                return (
                                                    <div className="col-4 mt-2" key={i}>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" name="facilities" id={data.name_id} value={data.name} />
                                                            <label className="custom-control-label" htmlFor={data.name_id}>
                                                                {data.name}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* CARD =  MISCELLANEOUS FACILITIES */}
                                <div className="card mt-5">
                                    <div className="card-header text-center">
                                        <h5 className="strong">
                                            MISCELLANEOUS FACILITIES
                                        </h5>
                                    </div>

                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-3">
                                                <label htmlFor="no_of_doctor">
                                                    No. of Doctors
                                                </label>
                                            </div>
                                            <div className="col-5">
                                                <input type="text" className="form-control" id="no_of_doctor" />
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="no_of_experts">
                                                    No. of Medical Consultants / Experts:
                                                </label>
                                            </div>
                                            <div className="col-5">
                                                <input type="text" className="form-control" id="no_of_experts" />
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="no_of_beds">
                                                    No. of Beds:
                                                </label>
                                            </div>
                                            <div className="col-5">
                                                <input type="text" className="form-control" id="no_of_beds" />
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="collaboration_with">
                                                    Empanelment/Collaboration With:
                                                </label>
                                            </div>
                                            <div className="col-5">
                                                <div className="row">

                                                    <div class="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" class="custom-control-input" id="cghs" name="collaboration" />
                                                        <label class="custom-control-label" for="cghs">CGHS</label>
                                                    </div>

                                                    <div class="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" name="collaboration" id="dhbvn" class="custom-control-input" />
                                                        <label class="custom-control-label" for="dhbvn">DHBVN</label>
                                                    </div>

                                                    <div class="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" name="collaboration" id="other" class="custom-control-input" />
                                                        <label class="custom-control-label" for="other">Any Other +</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="hasEmergency">Emergency Service:</label>
                                            </div>
                                            <div className="col-5">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <div class="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="yes" name="hasEmergency" class="custom-control-input" value="Yes" />
                                                            <label class="custom-control-label" for="yes">Yes</label>
                                                        </div>
                                                        <div class="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="no" name="hasEmergency" class="custom-control-input" value="No" />
                                                            <label class="custom-control-label" for="no">No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="collaboration_with">
                                                    Tariff Range ($100 - $200):
                                                </label>
                                            </div>
                                            <div className="col-5">
                                                <input type="number" className="form-control" id="collaboration_with" min="100" max="200" />
                                            </div>
                                        </div>



                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body text-center">
                                        <div >
                                            <button className='btn btn-primary' style={{ margin: '0 10px' }}>Submit</button>
                                            <button className='btn btn-danger'>Reset</button>
                                        </div>

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
