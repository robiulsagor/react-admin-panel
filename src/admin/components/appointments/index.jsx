import React, { Component } from "react";
import { Table, Switch } from "antd";
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
import { Link } from "react-router-dom";

const Appointments = () => {
  const data = [
    {
      id: 1,
      image: IMG01,
      Name: "Dr. Ruby Perrin",
      Speciality: "Dental",
      PatientImg: IMG06,
      PatientName: "Walter Roberson",
      AppointmentDate: "9 Nov 2019",
      AppointmentTime: "11.00 AM - 11.15 AM",
      status: true,
      Amount: "$3200.00",
    },
    {
      id: 2,
      image: IMG02,
      Name: "Dr. Darren Elder",
      Speciality: "Cardiology",
      PatientImg: IMG07,
      PatientName: "Elsie Gilley",
      AppointmentDate: "9 Nov 2019",
      AppointmentTime: "11.00 AM - 11.15 AM",
      status: true,
      Amount: "$3200.00",
    },
    {
      id: 3,
      image: IMG03,
      Name: "Dr. Deborah Angel",
      Speciality: "Orthopaedics",
      PatientImg: IMG08,
      PatientName: "Joan Gardner",
      AppointmentDate: "9 Nov 2019",
      AppointmentTime: "11.00 AM - 11.15 AM",
      status: true,
      Amount: "$3200.00",
    },
    {
      id: 4,
      image: IMG04,
      Name: "Dr. Ruby Perrin",
      Speciality: "Dermatology",
      PatientImg: IMG06,
      PatientName: "Charlene Reed",
      AppointmentDate: "9 Nov 2019",
      AppointmentTime: "11.00 AM - 11.15 AM",
      status: true,
      Amount: "$3200.00",
    },
    {
      id: 5,
      image: IMG05,
      Name: "Dr. John Gibbs",
      Speciality: "Orthopaedics",
      PatientImg: IMG07,
      PatientName: " Daniel Griffing",
      AppointmentDate: "9 Nov 2019",
      AppointmentTime: "11.00 AM - 11.15 AM",
      status: true,
      Amount: "$3200.00",
    },
    {
      id: 6,
      image: IMG01,
      Name: "Dr. Katharine Berthold",
      Speciality: "Dental",
      PatientImg: IMG08,
      PatientName: "Charlene Reed",
      AppointmentDate: "9 Nov 2019",
      AppointmentTime: "11.00 AM - 11.15 AM",
      status: true,
      Amount: "$3200.00",
    },
    {
      id: 7,
      image: IMG02,
      Name: "Dr. Linda Tobin",
      Speciality: "Dermatology",
      PatientImg: IMG05,
      PatientName: "Charlene Reed",
      AppointmentDate: "9 Nov 2019",
      AppointmentTime: "11.00 AM - 11.15 AM",
      status: true,
      Amount: "$3200.00",
    },
    {
      id: 8,
      image: IMG03,
      Name: "Dr. Marvin Campbell",
      Speciality: "Cardiology",
      PatientImg: IMG06,
      PatientName: "Walter Roberson",
      AppointmentDate: "9 Nov 2019",
      AppointmentTime: "11.00 AM - 11.15 AM",
      status: true,
      Amount: "$3200.00",
    },
    {
      id: 9,
      image: IMG04,
      Name: "Dr. Ruby Perrin",
      Speciality: "Dental",
      PatientImg: IMG07,
      PatientName: "Elsie Gilley",
      AppointmentDate: "9 Nov 2019",
      AppointmentTime: "11.00 AM - 11.15 AM",
      status: true,
      Amount: "$3200.00",
    },
    {
      id: 10,
      image: IMG05,
      Name: "Dr. Ruby Perrin",
      Speciality: "Neurology",
      PatientImg: IMG08,
      PatientName: "Gina Moore",
      AppointmentDate: "9 Nov 2019",
      AppointmentTime: "11.00 AM - 11.15 AM",
      status: true,
      Amount: "$3200.00",
    },
    {
      id: 11,
      image: IMG01,
      Name: "Dr. Ruby Perrin",
      Speciality: "Urology",
      PatientImg: IMG06,
      PatientName: "Joan Gardner",
      AppointmentDate: "9 Nov 2019",
      AppointmentTime: "11.00 AM - 11.15 AM",
      status: true,
      Amount: "$3200.00",
    },
    {
      id: 12,
      image: IMG02,
      Name: "Dr. Ruby Perrin",
      Speciality: "Neurology",
      PatientImg: IMG07,
      PatientName: "Gina Moore",
      AppointmentDate: "9 Nov 2019",
      AppointmentTime: "11.00 AM - 11.15 AM",
      status: true,
      Amount: "$3200.00",
    },
    {
      id: 13,
      image: IMG03,
      Name: "Dr. Ruby Perrin",
      Speciality: "Urology",
      PatientImg: IMG08,
      PatientName: " Daniel Griffing",
      AppointmentDate: "9 Nov 2019",
      AppointmentTime: "11.00 AM - 11.15 AM",
      status: true,
      Amount: "$3200.00",
    },
  ]

  const columns = [
    {
      title: "Doctor Name",
      dataIndex: "Name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link
            to="/admin/profile"
            className="avatar avatar-sm mr-2"
          >
            <img alt="" src={record.image} />
          </Link>
          <Link to="/admin/profile">{text}</Link>
        </h2>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Speciality",
      dataIndex: "Speciality",
      sorter: (a, b) => a.Speciality.length - b.Speciality.length,
    },
    {
      title: "Patient Name",
      dataIndex: "PatientName",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link
            to="/admin/profile"
            className="avatar avatar-sm mr-2"
          >
            <img alt="" src={record.PatientImg} />
          </Link>
          <Link to="/admin/profile">{record.PatientName}</Link>
        </h2>
      ),
      sorter: (a, b) => a.PatientName.length - b.PatientName.length,
    },
    {
      title: "Appointment Time",
      dataIndex: "AppointmentTime",
      render: (text, record) => (
        <>
          <span>{record.AppointmentDate}</span>
          <span className="text-primary d-block">{text}</span>
        </>
      ),
      sorter: (a, b) => a.AppointmentTime.length - b.AppointmentTime.length,
    },
    {
      title: "Status",
      dataIndex: "status",

      render: (e) => (
        <Switch />
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
  ];

  return (
    <>
      <SidebarNav />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Appointments</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Appointments</li>
                </ul>
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
      </div>
    </>
  );
}


export default Appointments;
