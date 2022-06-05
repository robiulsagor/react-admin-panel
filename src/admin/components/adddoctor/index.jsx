import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { doctorSpecializations } from '../../data'
import Sidebar from '../sidebar'

const AddDoctor = () => {
    const [submitted, setSubmitted] = useState(false)
    const [isAllOk, setIsAllOk] = useState(false)

    const [fName, setfName] = useState('')
    const [fNameErr, setfNameErr] = useState(true)
    const [fNameFocus, setfNameFocus] = useState(false)

    const [lName, setlName] = useState('')
    const [lNameErr, setlNameErr] = useState(true)
    const [lNameFocus, setlNameFocus] = useState(false)

    const [phn, setPhn] = useState('')
    const [phnErr, setPhnErr] = useState(true)
    const [phnFocus, setPhnFocus] = useState(false)

    const [email, setEmail] = useState('')
    const [emailErr, setEmailErr] = useState(true)
    const [emailFocus, setEmailFocus] = useState(false)

    const [specialties, setSpecialties] = useState('')
    const [specialtiesErr, setSpecialtiesErr] = useState(true)


    const [gender, setGender] = useState('')
    const [genderErr, setGenderErr] = useState(true)

    const [hospitalName, setHospitalName] = useState('')
    const [hospitalNameErr, setHospitalNameErr] = useState(true)
    const [hospitalNameFocus, setHospitalNameFocus] = useState(false)

    const [address, setAddress] = useState('')
    const [addressErr, setAddressErr] = useState(true)
    const [addressFocus, setAddressFocus] = useState(false)

    const [regiNo, setRegiNo] = useState('')
    const [regiNoErr, setRegiNoErr] = useState(true)
    const [regiFocus, setRegiFocus] = useState(false)

    const [consultation, setConsultation] = useState('')
    const [consultationErr, setConsultationErr] = useState(true)


    const [genderValues, setGenderValues] = useState([
        { id: 1, name: "Male" },
        { id: 2, name: "Female" },
        { id: 3, name: "Others" }
    ])



    const checkErr = async () => {
        fName.length < 6 && setfNameErr(true)
        lName.length < 6 && setlNameErr(true)
        phn.length < 8 && setPhnErr(true)
        email.length < 10 && setEmailErr(true)
        !specialties && setSpecialtiesErr(true)

        !gender && setGenderErr(true)
        address.length < 10 && setAddressErr(true)

        // !state && setStateErr(true)

        // !city && setCityErr(true)
        hospitalName.length < 8 && setHospitalNameErr(true)

        regiNo.length < 6 && setRegiNoErr(true)

        !consultation && setConsultationErr(true)
    }

    useEffect(() => {
        fNameFocus && (fName.length >= 5 ? setfNameErr(false) : setfNameErr(true))
        lNameFocus && (lName.length >= 5 ? setlNameErr(false) : setlNameErr(true))
        phnFocus && (phn.length >= 5 ? setPhnErr(false) : setPhnErr(true))
        gender && setGenderErr(false)
        specialties && setSpecialtiesErr(false)
        addressFocus && (address.length >= 5 ? setAddressErr(false) : setAddressErr(true))
        hospitalNameFocus && (hospitalName.length > 8 ? setHospitalNameErr(false) : setHospitalNameErr(true))
        // state && setStateErr(false)
        // city && setCityErr(false)
        regiFocus && (regiNo.length >= 5 ? setRegiNoErr(false) : setRegiNoErr(true))
        consultation ? setConsultationErr(false) : setConsultationErr(true)

    }, [fName, lName, phn, specialties, gender, address, regiNo, hospitalName, consultation, fNameFocus, lNameFocus, phnFocus, addressFocus, regiFocus, hospitalNameFocus])

    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    useEffect(() => {
        const testEmail = EMAIL_REGEX.test(email)
        testEmail ? setEmailErr(false) : setEmailErr(true)
    }, [email])

    useEffect(() => {
        if (!fNameErr && !lNameErr && !phnErr && !emailErr && !specialtiesErr && !genderErr && !addressErr && !hospitalNameErr && !regiNoErr && !consultationErr) { setIsAllOk(true) } else { setIsAllOk(false) }

    }, [fNameErr, lNameErr, phnErr, emailErr, specialtiesErr, genderErr, addressErr, regiNoErr, consultationErr])



    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true)
        checkErr()

        if (isAllOk) {
            // api implementation for registering Doctor...
            console.log(fName, lName, phn, email, specialties, gender, address, hospitalName, regiNo, consultation);
        } else {
            console.log("error");
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

                                    <form onSubmit={handleSubmit}>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <input type="text" className='form-control' value={fName}
                                                    onChange={e => setfName(e.target.value)}
                                                    onFocus={() => setfNameFocus(true)}
                                                    placeholder='First Name' />
                                                {((submitted || fNameFocus) && fNameErr) && <span className='text-danger'>Please Enter Valid Info</span>}
                                            </div>
                                            <div className="col">
                                                <input type="text" className='form-control' value={lName}
                                                    onChange={e => setlName(e.target.value)}
                                                    onFocus={() => setlNameFocus(true)}
                                                    placeholder='Last Name' />
                                                {((submitted || lNameFocus) && lNameErr) && <span className='text-danger'>Please Enter Valid Info</span>}
                                            </div>
                                        </div>

                                        <div className="row  mb-3">
                                            <div className="col">
                                                <input type="text" className='form-control' value={phn}
                                                    onChange={e => setPhn(e.target.value)}
                                                    onFocus={() => setPhnFocus(true)}
                                                    placeholder='Phone No.' />
                                                {((submitted || phnFocus) && phnErr) && <span className='text-danger'>Please Enter Valid Phone Number</span>}
                                            </div>
                                            <div className="col">
                                                <input type="text" className='form-control' value={email}
                                                    onChange={e => setEmail(e.target.value)}
                                                    onFocus={() => setEmailFocus(true)}
                                                    placeholder='Email Id' />
                                                {((submitted || emailFocus) && emailErr) && <span className='text-danger'>Please Enter Valid Email</span>}
                                            </div>
                                        </div>


                                        <div className="row  mb-3">
                                            <div className="col">
                                                <div className="row">
                                                    <div className="col-5">

                                                        <select className="custom-select bg-primary text-white"
                                                            value={specialties}
                                                            onChange={e => e.target.value !== "0" && setSpecialties(e.target.value)}>
                                                            <option value="0">Specialties</option>
                                                            {doctorSpecializations.map((data, i) => {
                                                                return (

                                                                    <option value={data.name}>{data.name}</option>
                                                                )
                                                            })}
                                                        </select>
                                                        {(submitted && specialtiesErr) && <span className='text-danger'>Please Select One</span>}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col">
                                                <div className="row">
                                                    <div className="col">

                                                        {genderValues.map((gen) => {
                                                            return (

                                                                <div className="custom-control custom-radio custom-control-inline" key={gen.id}>
                                                                    <input type="radio" name="gender" className="custom-control-input" value={gen.name} id={gen.name} onChange={e => setGender(e.target.value)} />
                                                                    <label className="custom-control-label" htmlFor={gen.name}>{gen.name}</label>
                                                                </div>
                                                            )
                                                        })}
                                                        <div>
                                                            {(submitted && genderErr) && <span className='text-danger'>Please select your gender</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row  mb-3">
                                            <div className="col">
                                                <input type="text" className='form-control' value={hospitalName}
                                                    onChange={e => setHospitalName(e.target.value)}
                                                    onFocus={() => setHospitalNameFocus(true)} placeholder='Enter your Hospital Name' />
                                                {((submitted || hospitalNameFocus) && hospitalNameErr) && <span className='text-danger'>Please enter your Hospital Name</span>}
                                            </div>
                                        </div>
                                        <div className="row  mb-3">
                                            <div className="col">
                                                <input type="text" className='form-control' value={address}
                                                    onChange={e => setAddress(e.target.value)}
                                                    onFocus={() => setAddressFocus(true)} placeholder='Enter your address ' />
                                                {((submitted || addressFocus) && addressErr) && <span className='text-danger'>Please enter your valid address</span>}
                                            </div>
                                        </div>

                                        {/* <div className="row  mb-3">
                                            <div className="col">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <select className="custom-select bg-primary text-white" value={state}
                                                            onChange={e => e.target.value !== "0" && setState(e.target.value)}>
                                                            <option value="0">State</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        {(submitted && stateErr) && <span className='text-danger'>Please select your state</span>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <div className="form-check form-check-inline">
                                                            <select className="custom-select bg-primary text-white" value={city} onChange={e => e.target.value !== "0" && setCity(e.target.value)}>
                                                                <option value="0">City</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            {(submitted && cityErr) && <span className='text-danger'>Please select your city</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="row  mb-3">
                                            <div className="col">
                                                <input type="text" className='form-control' value={regiNo}
                                                    onChange={e => setRegiNo(e.target.value)}
                                                    onFocus={() => setRegiFocus(true)} placeholder='Registration No.' />
                                                {((submitted || regiFocus) && regiNoErr) && <span className='text-danger'>Please enter your Registration Number</span>}
                                            </div>
                                            <div className="col">
                                                <input type="text" className='form-control' value={consultation}
                                                    onChange={e => setConsultation(e.target.value)} placeholder='Consultaion Fee' />
                                                {(submitted && consultationErr) && <span className='text-danger'>Please your consultation fee</span>}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-6 mx-auto mt-2">
                                                <button type='submit' className='btn btn-primary btn-block submit' disabled={!isAllOk}>Save</button>
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

export default AddDoctor;