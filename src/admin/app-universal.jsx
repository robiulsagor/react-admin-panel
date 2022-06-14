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

import ProtectedRoute from './ProtectedRoute'
import HospitalDetails from './components/hosptitalDetails';
import DoctorDetails from './components/doctorDetails/doctorDetails';



const AppUniversal = function (props) {

	return (

		<Router basename={`${config.publicPath}`}>
			<div className="main-wrapper">
				<Route render={(props) => <Header {...props} />} />

				<Switch>
					<ProtectedRoute path="/admin" exact component={Dashboard} />
					<ProtectedRoute path="/admin/appointment-list" exact component={Appointments} />
					<ProtectedRoute path="/admin/specialities" exact component={Specialities} />
					<ProtectedRoute path="/admin/hospital-list" exact component={Hospitals} />
					<ProtectedRoute path="/admin/hospital/:id" exact component={HospitalDetails} />
					<ProtectedRoute path="/admin/hospital-list/create-hospital" exact component={CreateHospital} />
					<ProtectedRoute path="/admin/doctor-list" exact component={Doctors} />
					<ProtectedRoute path="/admin/doctor/:id" exact component={DoctorDetails} />
					<ProtectedRoute path="/admin/doctor-list/add-doctor" exact component={AddDoctor} />
					<ProtectedRoute path="/admin/patient-list" exact component={Patients} />
					<ProtectedRoute path="/admin/reviews" exact component={Reviews} />
					<ProtectedRoute path="/admin/profile" exact component={Profile} />
					<ProtectedRoute path="/admin/transactions-list" exact component={Transaction} />
					<ProtectedRoute path="/admin/settings" exact component={Settings} />
					<ProtectedRoute path="/admin/invoice-report" exact component={InvoiceReport} />
					<ProtectedRoute path="/admin/blog" exact component={Blog} />
					<ProtectedRoute path="/admin/blog-details" exact component={BlogDetails} />
					<ProtectedRoute path="/admin/add-blog" exact component={AddBlog} />
					<ProtectedRoute path="/admin/edit-blog" exact component={EditBlog} />
					<ProtectedRoute path="/admin/pending-blog" exact component={PendingBlog} />
					<ProtectedRoute path="/admin/product-list" exact component={ProductList} />
					<ProtectedRoute path="/admin/pharmacy-list" exact component={PharmacyList} />
					<ProtectedRoute path="/admin/invoice" exact component={Invoice} />
					<Route path="/admin/login" exact component={Login} />
					<Route path="/admin/register" exact component={Register} />
					<ProtectedRoute path="/admin/forgotPassword" exact component={ForgotPassword} />
					<ProtectedRoute path="/admin/lockscreen" exact component={Lockscreen} />
					<ProtectedRoute path="/admin/404" exact component={Error} />
					<ProtectedRoute path="/admin/500" exact component={ErrorPage} />
					<ProtectedRoute path="/admin/blank-page" exact component={BlankPage} />
					<ProtectedRoute path="/admin/components" exact component={Components} />
					<ProtectedRoute path="/admin/basic-input" exact component={BasicInput} />
					<ProtectedRoute path="/admin/form-input-group" exact component={FormInput} />
					<ProtectedRoute path="/admin/form-horizontal" exact component={FormHorizontal} />
					<ProtectedRoute path="/admin/form-mask" exact component={FormMask} />
					<ProtectedRoute path="/admin/form-validation" exact component={FormValidation} />
					<ProtectedRoute path="/admin/tables-basic" exact component={BasicTables} />
					<ProtectedRoute path="/admin/data-tables" exact component={DataTables} />
				</Switch>
			</div>


		</Router>
	);
}

export default AppUniversal;

