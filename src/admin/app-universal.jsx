import React from 'react';
import config from 'config';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/header/index';
import Dashboard from './components/dashboard';
import Appointments from './components/appointments';
import Specialities from './components/specialities';
import Doctors from './components/doctors';
import Patients from './components/patients';
import Reviews from './components/reviews';
import Transaction from './components/transaction';
import Settings from './components/settings';
import InvoiceReport from './components/invoicereport';
import Invoice from './components/invoicereport/invoice';
import ProductList from './components/productlist';
import PharmacyList from './components/pharmacylist';
import Blog from './components/Blog/blog'
import BlogDetails from './components/Blog/blogdetails'
import AddBlog from './components/Blog/addblog'
import EditBlog from './components/Blog/editblog'
import PendingBlog from './components/Blog/pendingblog'
import Profile from './components/profile';
import Login from './components/login';
import Register from './components/register';
import ForgotPassword from './components/forgotpassword';
import Lockscreen from './components/lockscreen';
import Error from './components/error404';
import ErrorPage from './components/error500';
import BasicInput from './components/forms/baiscinput';
import FormInput from './components/forminput';
import FormHorizontal from './components/formhorizontal';
import FormMask from './components/formask';
import FormValidation from './components/formvalidation';
import BlankPage from './components/blankpage';
import Components from './components/component';
import DataTables from './components/datatables';
import BasicTables from './components/basictables';
import AddDoctor from './components/adddoctor';
import Hospitals from './components/hospitals';
import CreateHospital from './components/createHospital';

const AppUniversal = function (props) {

	// after login and registration api inrtegration, it need to be changed
	const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMThlNzEwMDM0NDJiMjI0NGY2Mzc2NCIsImVtYWlsIjoiR2VyaGFyZDQ0QGdtYWlsLmNvbSIsImlhdCI6MTY1NDc3MDc1MiwiZXhwIjoxNjU1MzcwNzUyfQ.q9ifAY-duzDfu5BvqapBmmeWo5soUJL2Fa63fjczkKs'

	const getToken = localStorage.getItem("accessToken")
	!getToken && localStorage.setItem("accessToken", token)
	// ================


	return (

		<Router basename={`${config.publicPath}`}>
			<div className="main-wrapper">


				<Route render={(props) => <Header {...props} />} />
				<Switch>
					<Route path="/admin" exact component={Dashboard} />
					<Route path="/admin/appointment-list" exact component={Appointments} />
					<Route path="/admin/specialities" exact component={Specialities} />
					<Route path="/admin/hospital-list" exact component={Hospitals} />
					<Route path="/admin/hospital-list/create-hospital" exact component={CreateHospital} />
					<Route path="/admin/doctor-list" exact component={Doctors} />
					<Route path="/admin/doctor-list/add-doctor" exact component={AddDoctor} />
					<Route path="/admin/patient-list" exact component={Patients} />
					<Route path="/admin/reviews" exact component={Reviews} />
					<Route path="/admin/profile" exact component={Profile} />
					<Route path="/admin/transactions-list" exact component={Transaction} />
					<Route path="/admin/settings" exact component={Settings} />
					<Route path="/admin/invoice-report" exact component={InvoiceReport} />
					<Route path="/admin/blog" exact component={Blog} />
					<Route path="/admin/blog-details" exact component={BlogDetails} />
					<Route path="/admin/add-blog" exact component={AddBlog} />
					<Route path="/admin/edit-blog" exact component={EditBlog} />
					<Route path="/admin/pending-blog" exact component={PendingBlog} />
					<Route path="/admin/product-list" exact component={ProductList} />
					<Route path="/admin/pharmacy-list" exact component={PharmacyList} />
					<Route path="/admin/invoice" exact component={Invoice} />
					<Route path="/admin/login" exact component={Login} />
					<Route path="/admin/register" exact component={Register} />
					<Route path="/admin/forgotPassword" exact component={ForgotPassword} />
					<Route path="/admin/lockscreen" exact component={Lockscreen} />
					<Route path="/admin/404" exact component={Error} />
					<Route path="/admin/500" exact component={ErrorPage} />
					<Route path="/admin/blank-page" exact component={BlankPage} />
					<Route path="/admin/components" exact component={Components} />
					<Route path="/admin/basic-input" exact component={BasicInput} />
					<Route path="/admin/form-input-group" exact component={FormInput} />
					<Route path="/admin/form-horizontal" exact component={FormHorizontal} />
					<Route path="/admin/form-mask" exact component={FormMask} />
					<Route path="/admin/form-validation" exact component={FormValidation} />
					<Route path="/admin/tables-basic" exact component={BasicTables} />
					<Route path="/admin/data-tables" exact component={DataTables} />
				</Switch>
			</div>

		</Router>
	);
}

export default AppUniversal;

