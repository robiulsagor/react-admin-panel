import React, { Component } from "react";
import { Table, Switch } from "antd";
import { Link } from 'react-router-dom';
import SidebarNav from "../sidebar";
import {
    itemRender,
    onShowSizeChange,
} from "../../components/paginationfunction";
import IMG01 from "../../assets/images/doctors/doctor-thumb-01.jpg";
import IMG02 from "../../assets/images/doctors/doctor-thumb-02.jpg";
import IMG03 from "../../assets/images/doctors/doctor-thumb-03.jpg";
import IMG04 from "../../assets/images/doctors/doctor-thumb-04.jpg";
import IMG05 from "../../assets/images/doctors/doctor-thumb-01.jpg";
import IMG06 from "../../assets/images/doctors/doctor-thumb-02.jpg";
import IMG07 from "../../assets/images/doctors/doctor-thumb-03.jpg";
import IMG08 from "../../assets/images/doctors/doctor-thumb-04.jpg";
import { Modal } from "react-bootstrap";

class Hospitals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            show: null,
            data: [
                {
                    id: 1,
                    image: IMG01,
                    HospitalName: "Dr. Darren Elder",
                    Address: "abcd",
                    DailyAppointments: 5,
                    Members: "9 Nov 2019",
                    Time: "11.00 AM",
                    status: false,
                },
                {
                    id: 2,
                    image: IMG02,
                    HospitalName: "Dr. Darren Elder",
                    Address: "abcd",
                    DailyAppointments: 5,
                    Members: "9 Nov 2019",
                    Time: "02.00 AM",
                    Amount: "$3200.00",
                    status: true,
                },
                {
                    id: 3,
                    image: IMG03,
                    HospitalName: "Dr. Darren Elder",
                    Address: "abcd",
                    DailyAppointments: 5,
                    Members: "9 Nov 2019",
                    Time: "11.00 AM",
                    Amount: "$3200.00",
                    status: false,
                },
                {
                    id: 4,
                    image: IMG04,
                    HospitalName: "Dr. Darren Elder",
                    Address: "abcd",
                    DailyAppointments: 5,
                    Members: "9 Nov 2019",
                    Time: "06.00 AM",
                    Amount: "$3200.00",
                    status: true,
                },
                {
                    id: 5,
                    image: IMG05,
                    HospitalName: "Dr. Darren Elder",
                    Address: "abcd",
                    DailyAppointments: 5,
                    Members: "9 Nov 2019",
                    Time: "10.00 AM",
                    Amount: "$3200.00",
                    status: false,
                },
                {
                    id: 6,
                    image: IMG06,
                    HospitalName: "Dr. Darren Elder",
                    Address: "abcd",
                    DailyAppointments: 5,
                    Members: "9 Nov 2019",
                    Time: "05.00 AM",
                    Amount: "$3200.00",
                    status: false,
                },
                {
                    id: 7,
                    image: IMG07,
                    HospitalName: "Dr. Darren Elder",
                    Address: "abcd",
                    DailyAppointments: 5,
                    Members: "9 Nov 2019",
                    Time: "08.00 AM",
                    Amount: "$3200.00",
                    status: true,
                },
                {
                    id: 8,
                    image: IMG08,
                    HospitalName: "Dr. Darren Elder",
                    Address: "abcd",
                    DailyAppointments: 5,
                    Members: "9 Nov 2019",
                    Time: "09.00 AM",
                    Amount: "$3200.00",
                    status: false,
                },
            ],
        };
    }


    handleClose = () => {
        this.setState({
            show: false
        });
    }

    handleShow = (id) => {
        this.setState({
            show: id
        });
    }


    handlemenu = () => { };
    render() {
        const { data } = this.state;

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
                        <Link to="/admin/profile">{text}</Link>
                    </h2>
                ),
                sorter: (a, b) => a.leavetype.length - b.leavetype.length,
            },

            {
                title: "Daily_Appointments",
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
                render: (e) => (
                    <Switch onChange={this.onChangeHandle} defaultChecked={e} />
                ),
                sorter: (a, b) => a.leavetype.length - b.leavetype.length,
            },
            {
                title: 'Actions',
                render: (text, record) => (
                    <div className="actions">
                        <a href="#0" className="btn btn-sm bg-success-light" onClick={() => this.handleShow('edit')}><i className="fe fe-pencil"></i> Edit</a>
                        <a href="#0" className="btn btn-sm bg-danger-light" onClick={() => this.handleShow('delete')}><i className="fe fe-trash"></i> Delete</a>
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
                                        <li className="breadcrumb-item active">Hospitals</li>
                                    </ul>
                                </div>
                                <div className="col-sm-5 col">
                                    <div>
                                        <Link className="btn btn-primary float-right mt-2" to="/admin/hospital-list/create-hospital">Create New Hospital</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                    </div>

                    {/* Edit Modal */}
                    <Modal show={this.state.show === 'edit'} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title><h5 className="modal-title">Edit Hospital</h5></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="row form-row">
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Hospital Name" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Daily Appoinments" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label for="date">Member Since</label>
                                            <input type="datetime-local" className="form-control" id="date"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label for="address">Address</label>
                                            <textarea name="address" className="form-control" id="address" cols="30" rows="5">

                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label for="address">Account Status</label>
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />

                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-primary" onClick={this.handleClose}>Close</button>
                                    <button type="button" class="btn btn-primary" onClick={this.handleClose}>Save</button>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>
                    {/* Edit Modal */}
                    {/* Delete Modal */}
                    <Modal show={this.state.show === 'delete'} onHide={this.handleClose} centered>

                        <Modal.Body className="text-center">

                            <div className="form-content p-2">
                                <h4 className="modal-title">Delete</h4>
                                <p className="mb-4">Are you sure want to delete?</p>
                                <button type="button" className="btn btn-primary" onClick={this.handleClose}>Save </button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.handleClose}>Close</button>
                            </div>

                        </Modal.Body>
                    </Modal>
                    {/* Delete Modal */}
                </div>
            </>
        );
    }
}

export default Hospitals;
