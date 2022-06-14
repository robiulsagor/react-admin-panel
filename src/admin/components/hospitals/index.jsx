import React, { Component, useState, useEffect } from "react";
import { Table, Switch } from "antd";
import { Link } from 'react-router-dom';
import SidebarNav from "../sidebar";
import {
    itemRender,
    onShowSizeChange,
} from "../../components/paginationfunction";
import IMG01 from "../../assets/images/doctors/doctor-thumb-01.jpg";
// import IMG02 from "../../assets/images/doctors/doctor-thumb-02.jpg";
// import IMG03 from "../../assets/images/doctors/doctor-thumb-03.jpg";
// import IMG04 from "../../assets/images/doctors/doctor-thumb-04.jpg";
// import IMG05 from "../../assets/images/doctors/doctor-thumb-01.jpg";
// import IMG06 from "../../assets/images/doctors/doctor-thumb-02.jpg";
// import IMG07 from "../../assets/images/doctors/doctor-thumb-03.jpg";
// import IMG08 from "../../assets/images/doctors/doctor-thumb-04.jpg";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllHospitals } from "../../../features/hospitalList/hospitalListSlice";
import { deleteInfo } from "../../../features/deleteRecord/deleteRecordSlice";
import { getHospitalDetails } from "../../../features/getDetails/getDetailsSlice";
import { updateInfo } from '../../../features/updateInfo/updateInfo';

const Hospitals = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllHospitals())
    }, [])

    const [startDate, setStartDate] = useState(new Date())
    const [show, setShow] = useState(null)
    const [id, setId] = useState('')
    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        if (show === 'edit') {
            console.log("edit");
            console.log(id);
            dispatch(getHospitalDetails(id))
        } else {
            console.log(show);
        }
    }, [show])

    // get the hospital details from redux store
    const { hospitals, isLoading, isSuccess, isError } = useSelector(state => state.hospitalList)
    const details = useSelector(state => state.getDetails)
    const updated = useSelector(state => state.updateSlice)
    const deleted = useSelector(state => state.deleteRecord)


    // const dept = data.departments?.join(", ") || ''

    // to show value on the edit form const updated = useSelector(state => state.updateSlice)
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
        if (details.isSuccess) {
            setHospitalName(details.data.name)
            setAddress(details.data.address)
            setLocality(details.data.locality)
            setDailyAppoints(details.data.totalDailyAppointments)
            setDepartments(details.data.departments?.join(", ") || '')
            setMinCharge(details.data.minCharge)
            setMaxCharge(details.data.maxCharge)
            setLocCoords(details.data.locCoordinates)
        }
    }, [details])


    const data = hospitals.map((d, index) => {
        var date = new Date(d.createdAt)
        date = date.toLocaleString()
        const dateSpllit = date.split(",")

        return (
            { id: d.id, image: IMG01, HospitalName: d.name, Address: d.address, DailyAppointments: d.totalDailyAppointments, Members: dateSpllit[0], Time: dateSpllit[1], status: d.isActive }
        )
    })





    // const data = [
    //     {
    //         id: 1,
    //         image: IMG01,
    //         HospitalName: "Dr. Darren Elder",
    //         Address: "abcd",
    //         DailyAppointments: 5,
    //         Members: "9 Nov 2019",
    //         Time: "11.00 AM",
    //         status: false,
    //     },
    //     {
    //         id: 2,
    //         image: IMG02,
    //         HospitalName: "Dr. Darren Elder",
    //         Address: "abcd",
    //         DailyAppointments: 5,
    //         Members: "9 Nov 2019",
    //         Time: "02.00 AM",
    //         Amount: "$3200.00",
    //         status: true,
    //     },
    //     {
    //         id: 3,
    //         image: IMG03,
    //         HospitalName: "Dr. Darren Elder",
    //         Address: "abcd",
    //         DailyAppointments: 5,
    //         Members: "9 Nov 2019",
    //         Time: "11.00 AM",
    //         Amount: "$3200.00",
    //         status: false,
    //     },
    //     {
    //         id: 4,
    //         image: IMG04,
    //         HospitalName: "Dr. Darren Elder",
    //         Address: "abcd",
    //         DailyAppointments: 5,
    //         Members: "9 Nov 2019",
    //         Time: "06.00 AM",
    //         Amount: "$3200.00",
    //         status: true,
    //     },
    //     {
    //         id: 5,
    //         image: IMG05,
    //         HospitalName: "Dr. Darren Elder",
    //         Address: "abcd",
    //         DailyAppointments: 5,
    //         Members: "9 Nov 2019",
    //         Time: "10.00 AM",
    //         Amount: "$3200.00",
    //         status: false,
    //     },
    //     {
    //         id: 6,
    //         image: IMG06,
    //         HospitalName: "Dr. Darren Elder",
    //         Address: "abcd",
    //         DailyAppointments: 5,
    //         Members: "9 Nov 2019",
    //         Time: "05.00 AM",
    //         Amount: "$3200.00",
    //         status: false,
    //     },
    //     {
    //         id: 7,
    //         image: IMG07,
    //         HospitalName: "Dr. Darren Elder",
    //         Address: "abcd",
    //         DailyAppointments: 5,
    //         Members: "9 Nov 2019",
    //         Time: "08.00 AM",
    //         Amount: "$3200.00",
    //         status: true,
    //     },
    //     {
    //         id: 8,
    //         image: IMG08,
    //         HospitalName: "Dr. Darren Elder",
    //         Address: "abcd",
    //         DailyAppointments: 5,
    //         Members: "9 Nov 2019",
    //         Time: "09.00 AM",
    //         Amount: "$3200.00",
    //         status: false,
    //     },
    // ]


    const handleClose = () => {
        setShow(false)
    }

    const handleShow = (type, id) => {
        setShow(type)
        setId(id)
    }

    const handleDelete = e => {
        dispatch(deleteInfo(id))
        setShow(false)
    }



    const updateHandler = e => {
        e.preventDefault()

        const data = { name: hospitalName, address, locality, totalDailyAppointments: dailyAppoints, departments, minCharge, maxCharge, locCoordinates: locCoords }

        const compactData = { data, id }

        dispatch(getHospitalDetails(id))
        dispatch(updateInfo(compactData))
        setTimeout(() => {

            dispatch(getAllHospitals())
        }, 500)

        setShowNoti(true)
        setRefetch(true)

        handleClose()
    }

    // useEffect(() => {
    //     if (refetch && updated) {
    //         dispatch(getAllHospitals())
    //         setRefetch(false)
    //         console.log("refetch");
    //     }
    // }, [refetch, updated])

    useEffect(() => {
        if (deleted.isSuccess) {
            setShowNoti(true)
            dispatch(getAllHospitals())
        }
    }, [deleted])

    if (showNoti) {
        setTimeout(() => {
            setShowNoti(false)
        }, 4000)
    }


    const handlemenu = () => { };

    const onChangeHandle = (e, id) => {
        const data = { isActive: e }
        const compactData = { data, id }
        dispatch(updateInfo(compactData))
        setShowNoti(true)

    }

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Hospital Name",
            dataIndex: "HospitalName",
            render: (text, record) => (
                <h2 className="table-avatar">
                    <Link to="/admin/profile" className="avatar avatar-sm mr-2"
                    >
                        <img alt="" src={record.image} />
                    </Link>
                    <Link to={`/admin/hospital/${record.id}`}>{text}</Link>
                </h2>
            ),
            sorter: (a, b) => a.leavetype.length - b.leavetype.length,
        },

        {
            title: "Daily Appointments",
            dataIndex: "DailyAppointments",
        },
        {
            title: "Address",
            dataIndex: "Address",
        },
        {
            title: "Member since",
            dataIndex: "Members",
            render: (text, record) => (
                <div className="sorting_1">
                    {text}
                    <span>
                        <small>{record.Time}</small>
                    </span>
                </div>
            ),
            sorter: (a, b) => a.leavetype.length - b.leavetype.length,
        },

        {
            title: "Account Status",
            dataIndex: "status",
            key: "status",
            render: (e, record) => (
                <Switch onChange={e => onChangeHandle(e, record.id)} defaultChecked={e} />
            ),
        },
        {
            title: 'Actions',
            render: (text, record) => (
                <div className="actions">
                    <a href="#0" className="btn btn-sm bg-success-light" onClick={() => handleShow('edit', record.id)}><i className="fe fe-pencil"></i> Edit</a>
                    <a href="#0" className="btn btn-sm bg-danger-light" onClick={() => handleShow('delete', record.id)}><i className="fe fe-trash"></i> Delete</a>
                </div>
            ),
        },
    ];

    return (
        <>

            <SidebarNav />
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-7 col-auto">
                                <h3 className="page-title">List of Hospitals</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/admin">Dashboard</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Hospital List</li>
                                </ul>
                            </div>
                            <div className="col-sm-5 col">
                                <div>
                                    <Link className="btn btn-primary float-right mt-2" to="/admin/hospital-list/create-hospital">Create New Hospital</Link>
                                </div>
                            </div>
                        </div>
                    </div>

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

                    {isSuccess && (<>
                        {(showNoti && deleted.isSuccess) && (
                            <div className="row mx-auto">
                                <div className="col-6 mx-auto">
                                    <div className="card">
                                        <div className={deleted.isSuccess === true ? "alert alert-success" : "alert alert-danger"} role="alert">
                                            {deleted.isSuccess ? <span>Successfully deleted!</span> :
                                                <span>Something Went wrong</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

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
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <Table
                                                className="table-striped"
                                                style={{ overflowX: "auto" }}
                                                columns={columns}
                                                // bordered
                                                dataSource={data}
                                                rowKey={(record) => record.id}
                                                showSizeChanger={true}
                                                pagination={{
                                                    total: data.length,
                                                    showTotal: (total, range) =>
                                                        `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                                    showSizeChanger: true,
                                                    onShowSizeChange: onShowSizeChange,
                                                    itemRender: itemRender,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)}
                </div>

                {/* Edit Modal */}
                <Modal show={show === 'edit'} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title><h5 className="modal-title">Edit Hospital</h5></Modal.Title>
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
                {/* Edit Modal */}
                {/* Delete Modal */}
                <Modal show={show === 'delete'} onHide={handleClose} centered>

                    <Modal.Body className="text-center">

                        <div className="form-content p-2">
                            <h4 className="modal-title">Delete</h4>
                            <p className="mb-4">Are you sure want to delete this hospital?</p>
                            <button type="button" className="btn btn-primary" onClick={handleDelete}>Delete </button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={handleClose}>Cancel</button>
                        </div>

                    </Modal.Body>
                </Modal>
                {/* Delete Modal */}
            </div>
        </>
    );
}

export default Hospitals;
