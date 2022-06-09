import React, { useState } from "react";
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

const Doctors = () => {
  const [show, setShow] = useState(null)
  const data = [
    {
      id: 1,
      image: IMG01,
      Name: "Dr. Darren Elder",
      Hospital: "abc",
      Speciality: "Urology",
      DailyAppointments: 5,
      Members: "9 Nov 2019",
      Time: "11.00 AM",
      Amount: "$3200.00",
      status: false,
    },
    {
      id: 2,
      image: IMG02,
      Name: "Dr. John Gibbs",
      Hospital: "abc",
      Speciality: "Cardiology",
      DailyAppointments: 5,
      Members: "9 Nov 2019",
      Time: "02.00 AM",
      Amount: "$3200.00",
      status: true,
    },
    {
      id: 3,
      image: IMG03,
      Name: "Dr. Linda Tobin",
      Hospital: "abc",
      Speciality: "Orthopaedics",
      DailyAppointments: 5,
      Members: "9 Nov 2019",
      Time: "11.00 AM",
      Amount: "$3200.00",
      status: false,
    },
    {
      id: 4,
      image: IMG04,
      Name: "Dr. Sofia Brient",
      Hospital: "abc",
      Speciality: "Orthopaedics",
      DailyAppointments: 5,
      Members: "9 Nov 2019",
      Time: "06.00 AM",
      Amount: "$3200.00",
      status: true,
    },
    {
      id: 5,
      image: IMG05,
      Name: "Dr. Ruby Perrin",
      Hospital: "abc",
      Speciality: "Dental",
      DailyAppointments: 5,
      Members: "9 Nov 2019",
      Time: "10.00 AM",
      Amount: "$3200.00",
      status: false,
    },
    {
      id: 6,
      image: IMG06,
      Name: "Dr. Katharine Berthold",
      Hospital: "abc",
      Speciality: "Neurology",
      DailyAppointments: 5,
      Members: "9 Nov 2019",
      Time: "05.00 AM",
      Amount: "$3200.00",
      status: false,
    },
    {
      id: 7,
      image: IMG07,
      Name: "Dr. Ruby Perrin",
      Hospital: "abc",
      Speciality: "Dental",
      DailyAppointments: 5,
      Members: "9 Nov 2019",
      Time: "08.00 AM",
      Amount: "$3200.00",
      status: true,
    },
    {
      id: 8,
      image: IMG08,
      Name: "Dr. Deborah Angel",
      Hospital: "abc",
      Speciality: "Dermatology",
      DailyAppointments: 5,
      Members: "9 Nov 2019",
      Time: "09.00 AM",
      Amount: "$3200.00",
      status: false,
    },
  ]

  const handleClose = () => {
    setShow(false)
  }

  const handleShow = (id) => {
    setShow(id)
  }
  const onChangeHandle = () => {

  }


  const handlemenu = () => { }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Doctor Name",
      dataIndex: "Name",
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
      title: "Speciality",
      dataIndex: "Speciality",
      sorter: (a, b) => a.leavetype.length - b.leavetype.length,
    },
    {
      title: "No. of Daily Appointments",
      dataIndex: "DailyAppointments",
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
      title: "Earned",
      dataIndex: "Amount",
      sorter: (a, b) => a.leavetype.length - b.leavetype.length,
    },
    {
      title: "Account Status",
      dataIndex: "status",
      key: "status",
      render: (e) => (
        <Switch onChange={onChangeHandle} defaultChecked={e} />
      ),
      sorter: (a, b) => a.leavetype.length - b.leavetype.length,
    },
    {
      title: 'Actions',
      render: (text, record) => (
        <div className="actions">
          <a href="#0" className="btn btn-sm bg-success-light" onClick={() => handleShow('edit')}><i className="fe fe-pencil"></i> Edit</a>
          <a href="#0" className="btn btn-sm bg-danger-light" onClick={() => handleShow('delete')}><i className="fe fe-trash"></i> Delete</a>
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
                <h3 className="page-title">List of Doctors</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#0">Users</Link>
                  </li>
                  <li className="breadcrumb-item active">Doctor</li>
                </ul>
              </div>
              <div className="col-sm-5 col">
                <div>
                  <Link className="btn btn-primary float-right mt-2" to="/admin/doctor-list/add-doctor">Add Doctor</Link>
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
        <Modal show={show === 'edit'} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title><h5 className="modal-title">Edit Specialities</h5></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="row form-row">
                <div className="col-12 col-sm-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name" />
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Specialities" />
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="form-group">
                    <input type="number" className="form-control" placeholder="Phone Number" />
                  </div>
                </div><div className="col-12 col-sm-6">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email ID" />
                  </div>
                </div>

              </div>

              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary" onClick={handleClose}>Close</button>
                <button type="button" class="btn btn-primary" onClick={handleClose}>Save</button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
        {/* Edit Modal */}
        {/* Delete Modal */}
        <Modal show={show === 'delete'} onHide={handleClose} centered>

          <Modal.Body className="text-center">

            <div className="form-content p-2">
              <h4 className="modal-title">Delete</h4>
              <p className="mb-4">Are you sure want to delete?</p>
              <button type="button" className="btn btn-primary" onClick={handleClose}>Save </button>
              <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={handleClose}>Close</button>
            </div>

          </Modal.Body>
        </Modal>
        {/* Delete Modal */}
      </div>
    </>
  );
}


export default Doctors;
