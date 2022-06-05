import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone } from '@fortawesome/free-solid-svg-icons'
import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../sidebar'
import { healthCareType, specialities, ayush, facililites, insurance } from '../../data'
import Flag from '../../assets/images/flag-48.png'
import axios from 'axios'


const CreateHospital = () => {
    const CITY_API_KEY = 'Wnh1SktlTTZKanhvVFU3MGJDR2s1RkJoUmJ3VU5QTDNUc0t0dnpxQQ=='
    const [submitted, setSubmitted] = useState(false)
    const [isAllOk, setIsAllOk] = useState(false)

    const [states, setStates] = useState([])
    const [selectedState, setSelectedState] = useState('')
    const [selectedStateErr, setSelectedStateErr] = useState(true)


    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedCityErr, setSelectedCityErr] = useState(true)

    // get and set states
    useEffect(() => {
        const getStates = async () => {
            var config = {
                method: 'get',
                url: 'https://api.countrystatecity.in/v1/countries/IN/states',
                headers: {
                    'X-CSCAPI-KEY': CITY_API_KEY
                }
            };
            await axios(config)
                .then(function (response) {
                    const sortedData = response.data.sort(function (a, b) {
                        let fa = a.name.toLowerCase(),
                            fb = b.name.toLowerCase();
                        if (fa < fb) {
                            return -1;
                        }
                        if (fa > fb) {
                            return 1;
                        }
                        return 0;
                    })
                    setStates(sortedData)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        getStates()
    }, [])

    // get and set cities
    useEffect(() => {
        if (selectedState) {
            var config = {
                method: 'get',
                url: `https://api.countrystatecity.in/v1/countries/IN/states/${selectedState}/cities`,
                headers: {
                    'X-CSCAPI-KEY': CITY_API_KEY
                }
            };

            axios(config)
                .then(function (response) {
                    const sortedData = response.data.sort(function (a, b) {
                        let fa = a.name.toLowerCase(),
                            fb = b.name.toLowerCase();
                        if (fa < fb) {
                            return -1;
                        }
                        if (fa > fb) {
                            return 1;
                        }
                        return 0;
                    })
                    setCities(sortedData)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [selectedState])

    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



    const [name, setName] = useState('')
    const [nameErr, setNameErr] = useState(true)
    const [nameFocus, setNameFocus] = useState(false)

    const [type, setType] = useState('')
    const [typeErr, setTypeErr] = useState(true)

    const [accreditation, setAccreditation] = useState('')
    const [accreditationErr, setAccreditationErr] = useState(true)
    const [accreditationFocus, setAccreditationFocus] = useState(false)

    const [healthProviderType, setHealthProviderType] = useState('')
    const [healthProviderTypeErr, setHealthProviderTypeErr] = useState(true)

    const [hospitalRegi, setHospitalRegi] = useState('')
    const [hospitalRegiErr, setHospitalRegiErr] = useState(true)
    const [hospitalRegiFocus, setHospitalRegiFocus] = useState(false)

    // file uploading variables 
    const [regiNoImg, setRegiNoImg] = useState()
    const [regiNoImgErr, setRegiNoImgErr] = useState(true)

    const [logo, setLogo] = useState()
    const [logoErr, setLogoErr] = useState(true)

    const [photos, setPhotos] = useState([])
    const [photosErr, setPhotosErr] = useState(true)


    // Nodal
    const [nodalName, setNodalName] = useState('')
    const [nodalNameErr, setNodalNameErr] = useState(true)
    const [nodalNameFocus, setNodalNameFocus] = useState(false)

    const [nodalPhn, setNodalPhn] = useState('')
    const [nodalPhnErr, setNodalPhnErr] = useState(true)
    const [nodalPhnFocus, setNodalPhnFocus] = useState(false)

    const [nodalEmail, setNodalEmail] = useState('')
    const [nodalEmailErr, setNodalEmailErr] = useState(true)
    const [nodalEmailFocus, setNodalEmailFocus] = useState(false)

    // ADDRESS
    const [address, setAddress] = useState('')
    const [addressErr, setAddressErr] = useState(true)
    const [addressFocus, setAddressFocus] = useState(false)

    const [pin, setPin] = useState('')
    const [pinErr, setPinErr] = useState(true)
    const [pinFocus, setPinFocus] = useState(false)

    // CONTACT
    const [telephn, setTelephn] = useState('')
    const [telephnErr, setTelephnErr] = useState(true)
    const [telephnFocus, setTelephnFocus] = useState(false)

    const [mobile, setMobile] = useState('')
    const [mobileErr, setMobileErr] = useState(true)
    const [mobileFocus, setMobileFocus] = useState(false)

    const [emergencyNumber, setEmergencyNumber] = useState('')
    const [emergencyNumberErr, setEmergencyNumberErr] = useState(true)
    const [emergencyNumberFocus, setEmergencyNumberFocus] = useState(false)

    const [tollFreeNum, setTollFreeNum] = useState('')
    // const [tollFreeNumErr, setTollFreeNumErr] = useState(true)

    const [primaryMail, setPrimaryMail] = useState('')
    const [primaryMailErr, setPrimaryMailErr] = useState(true)
    const [primaryMailFocus, setPrimaryMailFocus] = useState(false)

    const [secondaryMail, setSecondaryMail] = useState('')

    const [website, setWebsite] = useState('')

    const [established, setEshtablished] = useState('')
    const [establishedErr, setEshtablishedErr] = useState(true)
    const [establishedFocus, setEshtablishedFocus] = useState(false)

    const [map1, setMap1] = useState('')
    const [map2, setMap2] = useState('')

    const [selectedSpecialities, setSelectedSpecialities] = useState([])
    const [selectedSpecialitiesErr, setSelectedSpecialitiesErr] = useState(true)

    const [selectedAyush, setSelectedAyush] = useState([])
    const [selectedAyushErr, setSelectedAyushErr] = useState([])

    const [selectedFacilities, setSelectedFacilities] = useState([])
    const [selectedFacilitiesErr, setSelectedFacilitesErr] = useState(true)

    const [selectedInsurance, setSelectedInsurance] = useState([])
    const [selectedInsuranceErr, setSelectedInsuranceErr] = useState(true)

    const [medicalCompanyNameForm, setMedicalCompanyNameForm] = useState('')
    const [medical, setMedical] = useState(false)

    const [numOfDoctor, setNumOfDoctor] = useState('')
    const [numOfExpert, setNumOfExpert] = useState('')
    const [numOfBed, setNumOfBed] = useState('')

    const [selectEmpanelment, setSelectedEmpanelment] = useState([])
    const [hasEmergency, setHasEmergency] = useState(false)

    const [traffic, setTraffic] = useState('')

    // ========

    // for image uploading
    const regiImgUpload = e => {
        setRegiNoImg(e.target.files[0])
        setRegiNoImgErr(false)
    }

    const logoUpload = e => {
        setLogo(e.target.files[0])
        setLogoErr(false)
    }

    const photosUpload = e => {
        setPhotos(prev => [...prev, e.target.files])
    }
    // =============


    const checkEmpty = () => {
        name.length >= 9 && setNameErr(false)
        accreditation.length >= 4 && setAccreditationErr(false)
        hospitalRegi.length >= 5 && setHospitalRegiErr(false)

        nodalEmail.length >= 5 && setNodalNameErr(false)
        nodalPhn.length >= 9 && setNodalPhnErr(false)
        nodalEmail.length >= 9 && setNodalEmailErr(false)

        address.length >= 8 && setAddressErr(false)
        selectedSpecialities.length >= 2 ? setSelectedSpecialitiesErr(false) : setSelectedSpecialitiesErr(true)
        pin && setPinErr(false)

        telephn.length >= 7 && setTelephnErr(false)
        mobile.length >= 9 && setMobileErr(false)
        emergencyNumber.length >= 7 && setEmergencyNumberErr(false)
        // email val is different option

        established.length === 4 && setEshtablishedErr(false)
    }

    useEffect(() => {
        name.length >= 9 ? setNameErr(false) : setNameErr(true)
        type && setTypeErr(false)
        accreditation.length >= 4 ? setAccreditationErr(false) : setAccreditationErr(true)
        healthProviderType ? setHealthProviderTypeErr(false) : setHealthProviderTypeErr(true)
        hospitalRegi.length >= 5 ? setHospitalRegiErr(false) : setHospitalRegiErr(true)
        nodalName >= 6 ? setNodalNameErr(false) : setNodalNameErr(true)
        nodalPhn >= 8 ? setNodalPhnErr(false) : setNodalPhnErr(true)
        address.length >= 8 ? setAddressErr(false) : setAddressErr(true)
        selectedState && setSelectedStateErr(false)
        selectedCity && setSelectedCityErr(false)
        pin ? setPinErr(false) : setPinErr(true)
        telephn >= 7 ? setTelephnErr(false) : setTelephnErr(true)
        mobile >= 7 ? setMobileErr(false) : setMobileErr(true)
        emergencyNumber.length >= 7 ? setEmergencyNumberErr(false) : setEmergencyNumberErr(true)
        established.length ? setEshtablishedErr(false) : setEshtablishedErr(true)
        selectedSpecialities.length >= 2 ? setSelectedSpecialitiesErr(false) : setSelectedSpecialitiesErr(true)
        selectedAyush.length > 0 ? setSelectedAyushErr(false) : setSelectedAyushErr(true)
        selectedFacilities.length > 0 ? setSelectedFacilitesErr(false) : setSelectedFacilitesErr(true)
        selectedInsurance.length > 0 ? setSelectedInsuranceErr(false) : setSelectedInsuranceErr(true)
        logo ? setLogoErr(false) : setLogoErr(true)
        photos ? setPhotosErr(false) : setPhotosErr(true)
        regiNoImg ? setRegiNoImgErr(false) : setRegiNoImgErr(true)

    }, [accreditation, address, emergencyNumber, established, healthProviderType, hospitalRegi, mobile, name, nodalName, nodalPhn, pin, selectedAyush, selectedCity, selectedSpecialities, selectedFacilities, selectedInsurance, selectedState, telephn, type, logo, photos, regiNoImg])


    useEffect(() => {
        const testNodalMail = EMAIL_REGEX.test(nodalEmail)
        testNodalMail ? setNodalEmailErr(false) : setNodalEmailErr(true)

        const testPrimaryMail = EMAIL_REGEX.test(primaryMail)
        testPrimaryMail ? setPrimaryMailErr(false) : setPrimaryMailErr(true)
    }, [nodalEmail, primaryMail])

    const checkBoxes = () => {
        const checkSpecialities = document.querySelectorAll('input[name=specialities]:checked')
        Array.from(checkSpecialities).map(check => setSelectedSpecialities(prev => [...prev, check.value]))

        const checkAyush = document.querySelectorAll('input[name=ayush]:checked')
        Array.from(checkAyush).map(check => setSelectedAyush(prev => [...prev, check.value]))

        const checkFacilities = document.querySelectorAll('input[name=facilities]:checked')
        Array.from(checkFacilities).map(check => setSelectedFacilities(prev => [...prev, check.value]))

        const checkInsurance = document.querySelectorAll('input[name=insurance]:checked')
        Array.from(checkInsurance).map(check => setSelectedInsurance(prev => [...prev, check.value]))

        const checkCollaboration = document.querySelectorAll('input[name=collaboration]:checked')
        Array.from(checkCollaboration).map(check => setSelectedEmpanelment(prev => [...prev, check.value]))
    }

    const checkInsuranceAll = () => {
        const checkInsurance = document.querySelectorAll('input[name=insurance]:checked')
        Array.from(checkInsurance).map(check => {
            if (check.value === 'All') {
                var b = document.querySelectorAll('input[name=insurance]')
                Array.from(b).map(arr => arr.checked = true)
                document.getElementById("medical_company_name").checked = false
                setMedical(false)
            } else if (check.value === "Medical Insurance Company Name +") {
                setMedical(true)
            }
            else {
                document.getElementById("medical_company_name").checked = false
                setMedical(false)
            }
        })

        document.getElementById("medical_company_name").checked === true ? setMedical(true) : setMedical(false)
    }

    // check is all required fields filled

    useEffect(() => {
        if (nameErr && !typeErr && !accreditationErr && !healthProviderTypeErr && !hospitalRegiErr && !regiNoImgErr && !logoErr && !photosErr && !nodalNameErr && !nodalPhnErr && !nodalEmailErr && !addressErr && !pinErr && !telephnErr && !mobileErr && !primaryMailErr && !establishedErr && !selectedSpecialitiesErr && !selectedAyushErr && !selectedCityErr && !selectedFacilitiesErr && !selectedInsuranceErr && !selectedStateErr) { setIsAllOk(true) } else { setIsAllOk(false) }


    }, [nameErr, typeErr, accreditationErr, healthProviderTypeErr, hospitalRegiErr, regiNoImgErr, logoErr, photosErr, nodalNameErr, nodalPhnErr, nodalEmailErr, addressErr, pinErr, telephnErr, mobileErr, primaryMailErr, establishedErr, selectedSpecialitiesErr, selectedAyushErr, selectedCityErr, selectedFacilitiesErr, selectedInsuranceErr, selectedStateErr])

    // submit handler
    const handleSubmit = e => {
        e.preventDefault()
        setSubmitted(true)
        checkEmpty()
        checkBoxes()
        if (isAllOk) {
            console.log("submitted");
        } else {
            console.log('REQUIRED FIELDS MISSING IN THE FORM');
        }
    }

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

                            <form encType='multipart/form-data' method='post' onSubmit={handleSubmit}>
                                {/*  CARD = INFORMATION */}
                                <div className="card">
                                    <div className="card-header text-center">
                                        <h6 className='strong'>INFORMATION</h6>
                                    </div>

                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-3">
                                                <label htmlFor="hospital_name">Hospital Name:</label>
                                            </div>
                                            <div className="col">
                                                <input type="text" name="" className="form-control" id="hospital_name" value={name} onChange={e => setName(e.target.value)} onFocus={e => setNameFocus(true)} />

                                                {((submitted || nameFocus) && nameErr) && <p className='text-danger mt-2'>Please enter valid Hopital Name</p>}

                                                {/* Hospital Type Radio Btn */}
                                                <div className="mt-3">
                                                    <div>
                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="govt" name="hospital_type" className="custom-control-input" value="Government" onChange={e => setType(e.target.value)} />
                                                            <label className="custom-control-label" htmlFor="govt">Government</label>
                                                        </div>

                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="public" name="hospital_type" className="custom-control-input" onChange={e => setType(e.target.value)}
                                                                value="Public" />
                                                            <label className="custom-control-label" htmlFor="public">Public</label>
                                                        </div>

                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="private" name="hospital_type" className="custom-control-input" onChange={e => setType(e.target.value)}
                                                                value="Private" />
                                                            <label className="custom-control-label" htmlFor="private">Private</label>
                                                        </div>
                                                    </div>
                                                    {((submitted) && typeErr) && <span className='text-danger mt-2'>Please select Hospital Type</span>}
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
                                                <textarea className='form-control' id="accreditation" cols="30" rows="5" value={accreditation} onChange={e => setAccreditation(e.target.value)}
                                                    onFocus={e => setAccreditationFocus(true)}></textarea>
                                                {((submitted || accreditationFocus) && accreditationErr) && <span className='text-danger mt-2'>Please enter Accreditation</span>}
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-3">
                                                <label>Health Care Provider Type:</label>
                                            </div>
                                            <div className="col">

                                                {healthCareType.map((data) => {
                                                    return (

                                                        <div className="custom-control custom-checkbox custom-control-inline" key={data.id}>
                                                            <input type="checkbox" name="heatlthCareType" className="custom-control-input" id={data.name_id} value={data.name} onChange={e => setHealthProviderType(e.target.value)} />
                                                            <label className="custom-control-label" htmlFor={data.name_id}>{data.name}</label>
                                                        </div>

                                                    )
                                                })}

                                                <div>
                                                    {(submitted && healthProviderTypeErr) && <span className='text-danger mt-2'>Please select your Health Care Provide Type</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-3">
                                                <label htmlFor="regi_no">Hospital Registration No.:</label>
                                            </div>
                                            <div className="col-6">
                                                <input type="text" className='form-control' id="regi_no" value={hospitalRegi} onChange={e => setHospitalRegi(e.target.value)} onFocus={e => setHospitalRegiFocus(true)} />
                                                <div>
                                                    {((submitted || hospitalRegiFocus) && hospitalRegiErr) && <span className='text-danger mt-2'>Please enter your Hospital Registration No.</span>}
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-3">
                                                <label htmlFor="regi_scan_copy">Registration No. Scanned Copy:</label>
                                            </div>
                                            <div className="col-6">
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="customFile" name='something' onChange={regiImgUpload} />
                                                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                                </div>
                                                <div>
                                                    {(submitted && regiNoImgErr) && <span className='text-danger mt-2'>Please upload Registration Scanned Copy</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-3">
                                                <label htmlFor="logo">
                                                    Logo (only JPG, GIF, PNG with max size: 4MB allowed):
                                                </label>
                                            </div>
                                            <div className="col-6">
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="logo" name='Logo' onChange={logoUpload} />
                                                    <label className="custom-file-label" htmlFor="logo">Choose file</label>
                                                    <div>
                                                        {(submitted && logoErr) && <span className='text-danger mt-2'>Please upload your logo</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-3">
                                                <label htmlFor="photo">
                                                    Photos (only JPG, GIF, PNG with max size: 4MB allowed):
                                                </label>
                                            </div>
                                            <div className="col-6">
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="photo" name='hospital_photo' onChange={photosUpload} multiple={true} />
                                                    <label className="custom-file-label" htmlFor="photo">Choose file</label>
                                                    <div>
                                                        {(submitted && photosErr) && <span className='text-danger mt-2'>Please upload Hospitals photo</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


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
                                                <input type="text" className='form-control' id="nodal_name" value={nodalName} onChange={e => setNodalName(e.target.value)} onFocus={e => setNodalNameFocus(true)} />
                                                <div>
                                                    {((submitted || nodalNameFocus) && nodalNameErr) && <span className='text-danger mt-2'> Please enter Nodal Name and Designation</span>}
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="nodal_phone">
                                                    Telephone Number of the Nodal Person for this Information:
                                                </label>
                                            </div>
                                            <div className="col">
                                                <input type="text" className='form-control' id="nodal_phone" value={nodalPhn} onChange={e => setNodalPhn(e.target.value)} onFocus={e => setNodalPhnFocus(true)} />
                                                <div>

                                                    {((submitted || nodalPhnFocus) && nodalPhnErr) && <span className='text-danger mt-2'>Please enter Nodal Person's Phone No.</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="nodal_email">
                                                    Nodal Person Email Id:
                                                </label>
                                            </div>
                                            <div className="col">
                                                <input type="email" className='form-control' id="nodal_email"
                                                    onChange={e => setNodalEmail(e.target.value)} onFocus={e => setNodalEmailFocus(true)} placeholder='example@example.com' />
                                                <div>
                                                    {((submitted || nodalEmailFocus) && nodalEmailErr) && <span className='text-danger mt-2'>Please enter Nodal Person's Email Address</span>}
                                                </div>
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
                                                <textarea className="form-control" id="" cols="30" rows="5"
                                                    onChange={e => setAddress(e.target.value)} onFocus={e => setAddressFocus(true)} ></textarea>
                                                <div>
                                                    {((submitted || addressFocus) && addressErr) && <span className='text-danger mt-2'>Please enter Hospital address.</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="state">State:</label>
                                            </div>
                                            <div className="col-5">
                                                <select className="custom-select" value={selectedState}
                                                    onChange={e => e.target.value !== "0" && setSelectedState(e.target.value)}>
                                                    <option value="0">Select State</option>

                                                    {states.map((data) => {
                                                        return (
                                                            <>
                                                                <option value={data.iso2} key={data.id}>{data.name}</option>
                                                            </>
                                                        )
                                                    })}
                                                </select>
                                                <div>
                                                    {(submitted && selectedStateErr) && <span className='text-danger mt-2'>Please select your state.</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="district">City</label>
                                            </div>
                                            <div className="col-5">

                                                <select className="custom-select" id='city' value={selectedCity}
                                                    onChange={e => e.target.value !== "0" && setSelectedCity(e.target.value)}>
                                                    <option value="0">Select City</option>
                                                    {cities.map(data => {
                                                        return (
                                                            <option key={data.id} value={data.name}>{data.name}</option>
                                                        )
                                                    })}
                                                </select>
                                                <div>
                                                    {(submitted && selectedCityErr) && <span className='text-danger mt-2'>Please select your city.</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="pin">Pin</label>
                                            </div>
                                            <div className="col-5">
                                                <input type="text" className="form-control" id="pin" value={pin} onChange={e => setPin(e.target.value)} onFocus={e => setPinFocus(true)} />
                                                <div>
                                                    {((submitted || pinFocus) && pinErr) && <span className='text-danger mt-2'>Please enter your pin.</span>}
                                                </div>
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
                                                        <input type="text" className='form-control' name="" id="" value={telephn} onChange={e => setTelephn(e.target.value)} onFocus={e => setTelephnFocus(true)} />
                                                        <div>
                                                            {((submitted || telephnFocus) && telephnErr) && <span className='text-danger mt-2'>Please enter Hospital's Telephone No.</span>}
                                                        </div>
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
                                                        <input type="text" className='form-control' value={mobile} id="mobile_no"
                                                            onChange={e => setMobile(e.target.value)} onFocus={() => setMobileFocus(true)} />
                                                        <div>
                                                            {((submitted || mobileFocus) && mobileErr) && <span className='text-danger mt-2'>Please enter Hospital's Mobile No.</span>}
                                                        </div>
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
                                                        <input type="text" className='form-control' name="" id="emergency_no" value={emergencyNumber} onChange={e => setEmergencyNumber(e.target.value)} />
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
                                                        <input type="text" className='form-control' value={tollFreeNum} id="toll_free_no" onChange={e => setTollFreeNum(e.target.value)} />
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
                                                <input type="email" className='form-control' value={primaryMail} id="primary_email" onChange={e => setPrimaryMail(e.target.value)} onFocus={() => setPrimaryMailFocus(true)}
                                                    placeholder='example@gmail.com' />
                                                <div>
                                                    {((submitted || primaryMailFocus) && primaryMailErr) && <span className='text-danger mt-2'>Please enter Hospital's Primary Email</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="secondary_email">
                                                    Hospital Secondary Email Id:
                                                </label>
                                            </div>
                                            <div className='col-5'>
                                                <input type="email" className='form-control' id="secondary_email"
                                                    placeholder='example@gmail.com' value={e => setSecondaryMail(e.target.value)} />
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
                                                <input type="date" className='form-control' id="year" value={established} onChange={e => setEshtablished(e.target.value)} />
                                                <div>
                                                    {((submitted || establishedFocus) && establishedErr) && <span className='text-danger mt-2'>Please enter Hospital's Eshtablishing Year</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="map_coordinate1">
                                                    Google Map Co-Ordinates:
                                                </label>
                                            </div>
                                            <div className='col-5'>
                                                <input type="text" className='form-control' name="" id="map_coordinate1" value={map1} onChange={e => setMap1(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="map_coordinate2">
                                                    Google Map Co-Ordinates:
                                                </label>
                                            </div>
                                            <div className='col-5'>
                                                <input type="text" className='form-control' name="" id="map_coordinate2" value={map2} onChange={e => setMap2(e.target.value)} />
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

                                            {specialities.map((data) => {
                                                return (
                                                    <div className="col-4 mt-2" key={data.id}>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" name="specialities" id={data.name_id} value={data.name} />
                                                            <label className="custom-control-label" htmlFor={data.name_id}>
                                                                {data.name}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            <br /><br />
                                            <div className='pt-5 mt-5 text-left'>
                                                {(submitted && selectedSpecialitiesErr) && <span className='text-danger mt-2'>Please select specialities</span>}
                                            </div>
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

                                            {ayush.map((data) => {
                                                return (
                                                    <div className="col-4 mt-2" key={data.id}>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" name="ayush" id={data.name_id} value={data.name} />
                                                            <label className="custom-control-label" htmlFor={data.name_id}>
                                                                {data.name}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            <div className='pt-5 mt-5 text-left'>
                                                {(submitted && selectedAyushErr) && <span className='text-danger mt-2'>Please select at least One Ayush</span>}
                                            </div>
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

                                            {facililites.map((data) => {
                                                return (
                                                    <div className="col-4 mt-2" key={data.id}>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" name="facilities" id={data.name_id} value={data.name}
                                                            />
                                                            <label className="custom-control-label" htmlFor={data.name_id}>
                                                                {data.name}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                            <div className='pt-5 mt-5 text-left'>
                                                {(submitted && selectedFacilitiesErr) && <span className='text-danger mt-2'>Please select a Facility</span>}
                                            </div>
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

                                            {insurance.map((data) => {
                                                return (
                                                    <div className="col-4 mt-2" key={data.id}>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" name="insurance" id={data.name_id} value={data.name} onChange={checkInsuranceAll}
                                                            />
                                                            <label className="custom-control-label" htmlFor={data.name_id}>
                                                                {data.name}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            <div>
                                                <div className='pt-5 mt-5 text-left'>
                                                    {(submitted && selectedInsuranceErr) && <span className='text-danger mt-2'>Please select an Insurance</span>}
                                                </div>

                                            </div>

                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-5">
                                                {medical &&
                                                    <input type="text" className='form-control' name="" id="medical_company_name_form" value={medicalCompanyNameForm} onChange={e => setMedicalCompanyNameForm(e.target.value)} />
                                                }
                                            </div>
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
                                                <input type="text" className="form-control" id="no_of_doctor"
                                                    onChange={e => setNumOfDoctor(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="no_of_experts">
                                                    No. of Medical Consultants / Experts:
                                                </label>
                                            </div>
                                            <div className="col-5">
                                                <input type="text" className="form-control" id="no_of_experts" onChange={e => setNumOfExpert(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="no_of_beds">
                                                    No. of Beds:
                                                </label>
                                            </div>
                                            <div className="col-5">
                                                <input type="text" className="form-control" id="no_of_beds"
                                                    onChange={e => setNumOfBed(e.target.value)} />
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

                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="cghs" name="collaboration" onChange={checkBoxes} />
                                                        <label className="custom-control-label" htmlFor="cghs">CGHS</label>
                                                    </div>

                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" name="collaboration" id="dhbvn" className="custom-control-input" onChange={checkBoxes} />
                                                        <label className="custom-control-label" htmlFor="dhbvn">DHBVN</label>
                                                    </div>

                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" name="collaboration" id="other" className="custom-control-input" onChange={checkBoxes} />
                                                        <label className="custom-control-label" htmlFor="other">Any Other +</label>
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
                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="yes" name="hasEmergency" className="custom-control-input" value="Yes" onChange={e => setHasEmergency(e.target.value)} />
                                                            <label className="custom-control-label" htmlFor="yes">Yes</label>
                                                        </div>
                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="no" name="hasEmergency" className="custom-control-input" value="No" onChange={e => setHasEmergency(e.target.value)} />
                                                            <label className="custom-control-label" htmlFor="no">No</label>
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
                                                <input type="number" className="form-control" id="collaboration_with" min="100" max="200" onChange={e => setTraffic(e.target.value)} />
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body text-center">
                                        <div >
                                            <button type='submit' className='btn btn-primary' style={{ margin: '0 10px' }}>Submit</button>
                                            <button type="reset" className='btn btn-danger'>Reset</button>
                                        </div>

                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default CreateHospital