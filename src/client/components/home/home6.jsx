import React, { Component } from 'react';
import HomeClinic from './clinic';
import BookourBestDoctor from './bookourbestdoctor';
import BrowsebySpecialities from './browsebySpecialities';
import HomeFeatures from './features';
import HomeBlog from './blog';
import {Link} from "react-router-dom";
import { drslider } from "./image.jsx";
import logo from "../../assets/images/logo.png";
import IMG01 from "../../assets/images/doctors/doctor-thumb-02.jpg";
import Slider4 from "../../assets/images/slider/slider-4.jpg"
import Slider5 from "../../assets/images/slider/slider-5.jpg"
import Slider6 from "../../assets/images/slider/slider-6.jpg"
import Slider7 from "../../assets/images/slider/slider-7.jpg"
import Cat01 from "../../assets/images/icons/set-cat-01.png"
import Cat02 from "../../assets/images/icons/set-cat-02.png"
import Cat03 from "../../assets/images/icons/set-cat-03.png"
import clinic01 from "../../assets/images/clinic/clinic-1.jpg"
import clinic02 from "../../assets/images/clinic/clinic-2.jpg"
import clinic03 from "../../assets/images/clinic/clinic-3.jpg"
import clinic04 from "../../assets/images/clinic/clinic-4.jpg"
import clinic05 from "../../assets/images/clinic/clinic-5.jpg"
import clinic06 from "../../assets/images/clinic/clinic-6.jpg"
import clinic07 from "../../assets/images/clinic/clinic-7.jpg"
import clinic08 from "../../assets/images/clinic/clinic-8.jpg"
import clinic09 from "../../assets/images/clinic/clinic-9.jpg"
import clinic10 from "../../assets/images/clinic/clinic-10.jpg"
import blog1 from "../../assets/images/blog/blog-wrap-01.jpg"
import blog2 from "../../assets/images/blog/blog-wrap-02.jpg"
import blog3 from "../../assets/images/blog/blog-wrap-03.jpg"
import blog4 from "../../assets/images/blog/blog-wrap-04.jpg"
import DoctorThumb01 from "../../assets/images/doctors/doctor-thumb-01.jpg"
import BannerImg from "../../assets/images/doctor-banner.png"
import Shape1 from "../../assets/images/shapes/shape-1.png"
import Shape2 from "../../assets/images/shapes/shape-2.png"
import Shape3 from "../../assets/images/shapes/shape-3.png"
import Shape4 from "../../assets/images/shapes/shape-4.png"
import Category1 from "../../assets/images/category/1.png"
import Category2 from "../../assets/images/category/2.png"
import Category3 from "../../assets/images/category/3.png"
import Category4 from "../../assets/images/category/4.png"
import Category5 from "../../assets/images/category/5.png"
import Doctor1 from "../../assets/images/doctors/doctor-01.jpg"
import Doctor2 from "../../assets/images/doctors/doctor-02.jpg"
import Doctor3 from "../../assets/images/doctors/doctor-03.jpg"
import Doctor4 from "../../assets/images/doctors/doctor-04.jpg"
import FooterLogo from "../../assets/images/footer-logo.png"
import LoginButton from "../../assets/images/login-btn.png"
import config from "config";
import Dropdown from "react-bootstrap/Dropdown";
import Header from "../header";
import Slider from "react-slick";

class Home1 extends Component{
  onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

 onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };
  componentDidMount() {
    $(".main-nav a").on("click", function (e) {
      if ($(this).parent().hasClass("has-submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("submenu")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("submenu");
        $(this).next("ul").slideDown(350);
        $(this).addClass("submenu");
      } else if ($(this).hasClass("submenu")) {
        $(this).removeClass("submenu");
        $(this).next("ul").slideUp(350);
      }
    });

    if($('.header-trans').length > 0) {
		$(document).ready(function(){
		  $(window).scroll(function(){
			var scroll = $(window).scrollTop();
			  if (scroll > 95) {
				$(".header-trans").css("background" , "#FFFFFF");
			  }

			  else{
				  $(".header-trans").css("background" , "transparent");  	
			  }
		  })
		})
	}

    if($('.owl-carousel.clinics').length > 0) {
		$('.owl-carousel.clinics').owlCarousel({
			loop:true,
			margin:15,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-1',
			navText: [ '<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>' ], 
			rtl:true,
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:3
				},
				1000:{
					items:4
				},
				1300:{
					items:6
				}
			}
		})	
	}

    if($('.owl-carousel.blogs').length > 0) {
		$('.owl-carousel.blogs').owlCarousel({
			loop:true,
			margin:15,
			dots: false,
			rtl:true,
			nav:true,
			navContainer: '.slide-nav-4',
			navText: [ '<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>' ], 
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:2
				},
				1000:{
					items:3
				},
				1300:{
					items:4
				}
			}
		})	
	}
	

    if($('.owl-carousel.clinic-feature').length > 0) {
		$('.owl-carousel.clinic-feature').owlCarousel({
			loop:true,
			margin:15,
			dots: false,
			rtl:true,
			nav:true,
			navContainer: '.slide-nav-3',
			navText: [ '<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>' ], 
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:3
				},
				1000:{
					items:4
				},
				1300:{
					items:5
				}
			}
		})	
	}
    
    if($('.owl-carousel.our-doctors').length > 0) {
		$('.owl-carousel.our-doctors').owlCarousel({
			loop:true,
			margin:15,
			dots: false,
			rtl:true,
			nav:true,
			navContainer: '.slide-nav-2',
			navText: [ '<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>' ], 
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:2
				},
				1000:{
					items:3
				},
				1300:{
					items:4
				}
			}
		})	
	}
  }
    render(){
      let pathnames = window.location.pathname
      const url = pathnames.split("/").slice(0, -1).join("/");
        const settings = {
            dots: true,
			autoplay:false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			rtl: true,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 1
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 1
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 1
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
          };      

          const clinicsettings = {
            dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			rtl: true,
			rows: 2,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
          };

          const specialitysettings = {
            dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			rtl: true,
			rows: 2,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
          }

          const doctorsslidersettings= {
            dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			rtl: true,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
          }

          const availablesettings = {
            dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			rtl: true,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
          }
        return(
            <>
                <div className="main-wrapper">
                    {/* Header */}
                    <header className="header header-trans" style={{background: "transparent"}}>
          <nav className={`navbar navbar-expand-lg header-nav ${pathnames.includes("home1") ? "nav-transparent" : "" }`}>
            <div className="navbar-header">
              <a href="#0" id="mobile_btn" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <Link to="/home" className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
                <a
                  href="#0"
                  id="menu_close"
                  className="menu-close"
                  onClick={() => onhandleCloseMenu()}
                >
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <ul className="main-nav">
                {/* <li className={`${pathnames === "/home" ? "active" : ""}`}>
                <a href="/home" to="/home">
                Home
                  </a>
                </li> */}
                 <li className={`has-submenu ${pathnames.includes("home") || pathnames.includes("home1") || pathnames.includes("home2") || pathnames.includes("homeslider1") || pathnames.includes("home4") || pathnames.includes("homeslider2") || pathnames.includes("home6") || pathnames.includes("home7") || pathnames.includes("home8") ? "active" : ""}`}>
                  <a href="">Home <i className="fas fa-chevron-down" /></a>
                  <ul className="submenu">
                  <li className={pathnames.includes("home") && !pathnames.includes("home1") && !pathnames.includes("home2") && !pathnames.includes("homeslider1") && !pathnames.includes("home4") && !pathnames.includes("homeslider2") && !pathnames.includes("home6") && !pathnames.includes("home7") && !pathnames.includes("home8")  ? "active" : ""}><Link to="/home">Home</Link></li>
                    <li><Link to="/home1">Home 1</Link></li>
                    <li><Link to="/home2">Home 2</Link></li>
                    <li><Link to="/homeslider1">Home 3</Link></li>
                    <li><Link to="/home4">Home 4</Link></li>
                    <li><Link to="/homeslider2">Home 5</Link></li>
                    <li className="active"><Link to="/home6">Home 6</Link></li>
                    <li><Link to="/home7">Home 7</Link></li>
                    <li><Link to="/home8">Home 8</Link></li>
                  </ul>
                </li>
                <li className={`has-submenu ${url.includes("/doctor") ? "active" : ""}`}>
                  <a href="#0">
                    Doctors<i className="fas fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul className={`submenu`}>
                    <li className={pathnames.includes("doctor-dashboard") ? "active" : ""}>
                      <Link to="/doctor/doctor-dashboard" onClick={()=>this.onhandleCloseMenu()}>Doctor Dashboard</Link>
                    </li>
                    <li className={pathnames.includes("appointments") ? "active" : ""}>
                      <Link to="/doctor/appointments" onClick={()=>this.onhandleCloseMenu()}>Appointments</Link>
                    </li>
                    <li className={pathnames.includes("schedule-timing") ? "active" : ""}>
                      <Link to="/doctor/schedule-timing" onClick={()=>this.onhandleCloseMenu()}>Schedule Timing</Link>
                    </li>
                    <li className={pathnames.includes("my-patients") ? "active" : ""}>
                      <Link to="/doctor/my-patients" onClick={()=>this.onhandleCloseMenu()}>Patients List</Link>
                    </li>
                    <li className={pathnames.includes("patient-profile") ? "active" : ""}>
                      <Link to="/doctor/patient-profile" onClick={()=>this.onhandleCloseMenu()}>Patients Profile</Link>
                    </li>
                    <li className={pathnames.includes("chat-doctor") ? "active" : ""}>
                      <Link to="/doctor/chat-doctor" onClick={()=>this.onhandleCloseMenu()}>Chat</Link>
                    </li>
                    <li className={pathnames.includes("invoice") ? "active" : ""}>
                      <Link to="/pages/invoice" onClick={()=>this.onhandleCloseMenu()}>Invoices</Link>
                    </li>
                    <li className={pathnames.includes("profile-setting") ? "active" : ""}>
                      <Link to="/doctor/profile-setting" onClick={()=>this.onhandleCloseMenu()}>Profile Settings</Link>
                    </li>
                    <li className={pathnames.includes("review") ? "active" : ""}>
                      <Link to="/doctor/review" onClick={()=>this.onhandleCloseMenu()}>Reviews</Link>
                    </li>
                    <li className={pathnames.includes("doctor-register") ? "active" : ""}>
                      <Link to="/doctor/doctor-register" onClick={()=>this.onhandleCloseMenu()}>Doctor Register</Link>
                    </li>
                  </ul>
                </li>
                <li className={`has-submenu ${url.includes("/patient") ? "active" : ""}`}>
                  <a href="#0">
                    Patients <i className="fas fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul className={`submenu`}>
                    <li className={`has-submenu ${pathnames.includes("doctor") && !pathnames.includes("doctor-profile")  ? "active" : ""}`}>
                      <a href="#0">Doctors</a>
                      <ul className="submenu">
                        <li className={pathnames.includes("doctor-grid") ? "active" : ""}>
                          <Link to="/patient/doctor-grid" onClick={()=>this.onhandleCloseMenu()}>Map Grid</Link>
                        </li>
                        <li className={pathnames.includes("doctor-list") ? "active" : ""}>
                          <Link to="/patient/doctor-list" onClick={()=>this.onhandleCloseMenu()}>Map List</Link>
                        </li>
                      </ul>
                    </li>
                    <li className={pathnames.includes("search-doctor") ? "active" : ""}>
                      <Link to="/patient/search-doctor" onClick={()=>this.onhandleCloseMenu()}>Search Doctor</Link>
                    </li>
                    <li className={pathnames.includes("doctor-profile")  ? "active" : ""}>
                      <Link to="/patient/doctor-profile" onClick={()=>this.onhandleCloseMenu()}>Doctor Profile</Link>
                    </li>
                    <li className={pathnames.includes("booking") ? "active" : ""}>
                      <Link to="/patient/booking" onClick={()=>this.onhandleCloseMenu()}>Booking</Link>
                    </li>
                    <li className={pathnames.includes("checkout") ? "active" : ""}>
                      <Link to="/patient/checkout" onClick={()=>this.onhandleCloseMenu()}>Checkout</Link>
                    </li>
                    <li className={pathnames.includes("booking-success") ? "active" : ""}>
                      <Link to="/patient/booking-success" onClick={()=>this.onhandleCloseMenu()}>Booking Success</Link>
                    </li>
                    <li className={pathnames.includes("dashboard") ? "active" : ""}>
                      <Link to="/patient/dashboard" onClick={()=>this.onhandleCloseMenu()}>Patient Dashboard</Link>
                    </li>
                    <li className={pathnames.includes("favourites") ? "active" : ""}>
                      <Link to="/patient/favourites" onClick={()=>this.onhandleCloseMenu()}>Favourites</Link>
                    </li>
                    <li className={pathnames.includes("patient-chat") ? "active" : ""}>
                      <Link to="/patient/patient-chat" onClick={()=>this.onhandleCloseMenu()}>Chat</Link>
                    </li>
                    <li className={pathnames.includes("profile") && !pathnames.includes("doctor-profile") ? "active" : ""}>
                      <Link to="/patient/profile" onClick={()=>this.onhandleCloseMenu()}>Profile Settings</Link>
                    </li>
                    <li className={pathnames.includes("change-password") ? "active" : ""}>
                      <Link to="/patient/change-password" onClick={()=>this.onhandleCloseMenu()}>Change Password</Link>
                    </li>
                  </ul>
                </li>
                <li className={`has-submenu ${url.includes("/Pharmacy") ? "active" : ""}`}>
                  <a href="">Pharmacy <i className="fas fa-chevron-down" /></a>
                  <ul className="submenu">
                    <li className={pathnames.includes("Pharmacy-index") ? "active" : ""}><Link to="/Pharmacy/Pharmacy-index">Pharmacy</Link></li>
                    <li className={pathnames.includes("Pharmacy-details") ? "active" : ""}><Link to="/Pharmacy/Pharmacy-details">Pharmacy Details</Link></li>
                    <li className={pathnames.includes("pharmacy-search") ? "active" : ""}><Link to="/Pharmacy/pharmacy-search">Pharmacy Search</Link></li>
                    <li className={pathnames.includes("product-all") ? "active" : ""}><Link to="/Pharmacy/product-all">Product</Link></li>
                    <li className={pathnames.includes("product-description") ? "active" : ""}><Link to="/Pharmacy/product-description">Product Description</Link></li>
                    <li className={pathnames.includes("cart") ? "active" : ""}><Link to="/Pharmacy/cart">Cart</Link></li>
                    <li className={pathnames.includes("product-checkout") ? "active" : ""}><Link to="/Pharmacy/product-checkout">Product Checkout</Link></li>
                    <li className={pathnames.includes("payment-success") ? "active" : ""}><Link to="/Pharmacy/payment-success">Payment Success</Link></li>
                  </ul>
                </li>
                <li className={`has-submenu ${url.includes("/pages") ? "active" : ""}`}>
                  <a href="#0">
                    Pages<i className="fas fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul className={`submenu`}>
                    <li className={`${(pathnames).includes("/voice-call") ? "active" : ""}`}>
                      <Link to="/pages/voice-call" onClick={()=>this.onhandleCloseMenu()}>Voice Call</Link>
                    </li>
                    <li className={`${(pathnames).includes("/video-call") ? "active" : ""}`}>
                      <Link to="/pages/video-call" onClick={()=>this.onhandleCloseMenu()}>Video Call</Link>
                    </li>
    
                    <li className={`${(pathnames).includes("/calendar") ? "active" : ""}`}>
                      <Link to="/pages/calendar" onClick={()=>this.onhandleCloseMenu()}>Calendar</Link>
                    </li>
                    <li className={`${(pathnames).includes("/component") ? "active" : ""}`}>
                      <Link to="/pages/component" onClick={()=>this.onhandleCloseMenu()}>Components</Link>
                    </li>
                   
    
                    <li className={`has-submenu ${(pathnames).includes("/invoice-view") ? "active" : ""}`}>
                      <a href="#0">Invoices</a>
                      <ul className="submenu">
                        <li className={pathnames.includes("invoice") ? "active" : ""}><Link to="/pages/invoice" onClick={()=>onhandleCloseMenu()}>Invoices</Link></li>
                        <li className={pathnames.includes("-view") ? "active" : ""}><Link to="/pages/invoice-view" onClick={()=>onhandleCloseMenu()}>Invoice View</Link></li>
                      </ul>
                    </li>
                    <li className={`${(pathnames).includes("/blank-page") ? "active" : ""}`}>
                      <Link to="/pages/blank-page" onClick={()=>this.onhandleCloseMenu()}>Starter Page</Link>
                    </li>
    
                    <li className={pathnames.includes("login") ? "active" : ""}>
                      <Link to="/login" onClick={()=>this.onhandleCloseMenu()}>Login</Link>
                    </li>
                    <li className={pathnames.includes("/register") ? "active" : ""}>
                      <Link to="/register"onClick={()=>this.onhandleCloseMenu()}>Register</Link>
                    </li>
                    <li className={`${pathnames === "/forgot-password" ? "active" : ""}`}>
                      <Link to="/forgot-password" onClick={()=>this.onhandleCloseMenu()}>Forgot Password</Link>
                    </li>
                  </ul>
                </li>
                <li className={`has-submenu ${url.includes("/blog") ? "active" : ""}`}>
                  <a href="">Blog<i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li className={pathnames.includes("blog-list") ? "active" : ""}>
                      <Link to="/blog/blog-list" onClick={()=>this.onhandleCloseMenu()}>Blog List</Link>
                    </li>
                    <li className={pathnames.includes("blog-grid") ? "active" : ""}>
                      <Link to="/blog/blog-grid" onClick={()=>this.onhandleCloseMenu()}>Blog Grid</Link>
                    </li>
                    <li className={pathnames.includes("blog-details") ? "active" : ""}>
                      <Link to="/blog/blog-details" onClick={()=>this.onhandleCloseMenu()}>Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#" target="_blank">Admin <i className="fas fa-chevron-down" /></a>
                  <ul className="submenu">
                    <li><a href={`${config.publicPath}/admin`} target="_blank" >Admin</a></li>
                    <li><a href={`${config.publicPath}/pharmacyadmin`} target="_blank">Pharmacy Admin</a></li>
                  </ul>
                </li>
                {/* <li>
                  <a href="/admin" target="_blank" to="/admin">
                    Admin
                  </a>
                </li> */}
                <li className="login-link" onClick={()=>this.onhandleCloseMenu()}>
                  <Link to="/">Login / Signup</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
                <li className="nav-item contact-item">
                    <div className="header-contact-img">
                    <i className="fas fa-phone-alt" />					
                    </div>
                    <div className="header-contact-detail">
                    <p className="contact-info-header">Contact: +1 315 369 5943</p>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link header-login" to="/pages/login"><img src={LoginButton} className="img-fluid mr-2" />login / Signup </Link>
                </li>
            </ul>
          </nav>
        </header>
  {/* /Header */}
     {/* Home Banner  */}
  <section className="doctor-search-section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="doctor-search">
          <div className="banner-header">
            <h2>Search Doctor, <br /> Make an Appointment</h2>
          </div>
          <div className="doctor-form">
            <form action="#" className="doctor-search-form">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Location</label>
                    <div className="form-custom">
                      <input type="text" className="form-control" defaultValue />
                      <i className="far fa-compass" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <div className="form-custom">
                      <input type="text" className="form-control" defaultValue />
                      <i className="far fa-smile" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Department</label>
                    <div className="form-custom">
                      <input type="text" className="form-control" defaultValue />
                      <i className="fas fa-user-check" />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <Link to="/patient/search-doctor" className="btn banner-btn mt-3">MAKE APPOINTMENT</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <img src={BannerImg} className="img-fluid dr-img" />
      </div>
    </div>
  </div>
</section>
  {/* /Home Banner */}
 
  {/* Clinic Section */}
<section className="clinics-section">
  <div className="shapes">
    <img src={Shape1} className="img-fluid shape-1" />
    <img src={Shape2} className="img-fluid shape-2" />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="section-heading">
          <h2>Clinic &amp; Specialities</h2>
          <p>Access to expert physicians and surgeons, advanced technologies and top-quality surgery facilities right here.</p>
        </div>
      </div>
      <div className="col-md-6 text-right">
        <div className="owl-nav slide-nav-1 text-right nav-control" />
      </div>
    </div>
    <div className="owl-carousel clinics owl-theme">
      <div className="item">
        <div className="clinic-item">
          <div className="clinics-card">
            <div className="clinics-img">
              <img src={clinic01} className="img-fluid" />
            </div>
            <div className="clinics-info">
              <img src={Category1} className="img-fluid" />
              <a href="#"><span>UROLOGY</span></a>
            </div>
          </div>
          <div className="clinics-icon">
            <a href="#"><i className="fas fa-long-arrow-alt-right" /></a>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="clinic-item">
          <div className="clinics-card">
            <div className="clinics-img">
              <img src={clinic02} className="img-fluid" />
            </div>
            <div className="clinics-info">
              <img src={Category2} className="img-fluid" />
              <a href="#"><span>Orthopedic</span></a>
            </div>
          </div>
          <div className="clinics-icon">
            <a href="#"><i className="fas fa-long-arrow-alt-right" /></a>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="clinic-item">
          <div className="clinics-card">
            <div className="clinics-img">
              <img src={clinic04} className="img-fluid" />
            </div>
            <div className="clinics-info">
              <img src={Category4} className="img-fluid" />
              <a href="#"><span>Cardiologist</span></a>
            </div>
          </div>
          <div className="clinics-icon">
            <a href="#"><i className="fas fa-long-arrow-alt-right" /></a>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="clinic-item">
          <div className="clinics-card">
            <div className="clinics-img">
              <img src={clinic03} className="img-fluid" />
            </div>
            <div className="clinics-info">
              <img src={Category5} className="img-fluid" />
              <a href="#"><span>Dentist</span></a>
            </div>
          </div>
          <div className="clinics-icon">
            <a href="#"><i className="fas fa-long-arrow-alt-right" /></a>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="clinic-item">
          <div className="clinics-card">
            <div className="clinics-img">
              <img src={clinic05} className="img-fluid" />
            </div>
            <div className="clinics-info">
              <img src={Category3} className="img-fluid" />
              <a href="#"><span>Neurology</span></a>
            </div>
          </div>
          <div className="clinics-icon">
            <a href="#"><i className="fas fa-long-arrow-alt-right" /></a>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="clinic-item">
          <div className="clinics-card">
            <div className="clinics-img">
              <img src={clinic01} className="img-fluid" />
            </div>
            <div className="clinics-info">
              <img src={Category4} className="img-fluid" />
              <a href="#"><span>Cardiologist</span></a>
            </div>
          </div>
          <div className="clinics-icon">
            <a href="#"><i className="fas fa-long-arrow-alt-right" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* /Clinic Section */}
  {/* /Browse by Specialities */}
  <section className="specialities-section">
  <div className="shapes">
    <img src={Shape3} className="img-fluid shape-3" />
    <img src={Shape4} className="img-fluid shape-4" />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="section-heading bg-area">
          <h2>Browse by Specialities</h2>
          <p>Find experienced doctors across all specialties</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="specialist-card d-flex">
          <div className="specialist-img">
            <img src={Category1} className="img-fluid" />
          </div>
          <div className="specialist-info">
            <a href="#"><h4>Urology</h4></a>
            <p>21 Doctors</p>
          </div>
          <div className="specialist-nav ml-auto">
            <a href="#"><i className="fas fa-long-arrow-alt-right" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="specialist-card d-flex">
          <div className="specialist-img">
            <img src={Category3} className="img-fluid" />
          </div>
          <div className="specialist-info">
            <a href="#"><h4>Neurology</h4></a>
            <p>21 Doctors</p>
          </div>
          <div className="specialist-nav ml-auto">
            <a href="#"><i className="fas fa-long-arrow-alt-right" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="specialist-card d-flex">
          <div className="specialist-img">
            <img src={Category2} className="img-fluid" />
          </div>
          <div className="specialist-info">
            <a href="#"><h4>Orthopedic</h4></a>
            <p>21 Doctors</p>
          </div>
          <div className="specialist-nav ml-auto">
            <a href="#"><i className="fas fa-long-arrow-alt-right" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="specialist-card d-flex">
          <div className="specialist-img">
            <img src={Category4} className="img-fluid" />
          </div>
          <div className="specialist-info">
            <a href="#"><h4>Cardiologist</h4></a>
            <p>21 Doctors</p>
          </div>
          <div className="specialist-nav ml-auto">
            <a href="#"><i className="fas fa-long-arrow-alt-right" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="specialist-card d-flex">
          <div className="specialist-img">
            <img src={Category1} className="img-fluid" />
          </div>
          <div className="specialist-info">
            <a href="#"><h4>Urology</h4></a>
            <p>21 Doctors</p>
          </div>
          <div className="specialist-nav ml-auto">
            <a href="#"><i className="fas fa-long-arrow-alt-right" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="specialist-card d-flex">
          <div className="specialist-img">
            <img src={Category3} className="img-fluid" />
          </div>
          <div className="specialist-info">
            <a href="#"><h4>Neurology</h4></a>
            <p>21 Doctors</p>
          </div>
          <div className="specialist-nav ml-auto">
            <a href="#"><i className="fas fa-long-arrow-alt-right" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="specialist-card d-flex">
          <div className="specialist-img">
            <img src={Category2} className="img-fluid" />
          </div>
          <div className="specialist-info">
            <a href="#"><h4>Orthopedic</h4></a>
            <p>21 Doctors</p>
          </div>
          <div className="specialist-nav ml-auto">
            <a href="#"><i className="fas fa-long-arrow-alt-right" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="specialist-card d-flex">
          <div className="specialist-img">
            <img src={Category4} className="img-fluid" />
          </div>
          <div className="specialist-info">
            <a href="#"><h4>Cardiologist</h4></a>
            <p>21 Doctors</p>
          </div>
          <div className="specialist-nav ml-auto">
            <a href="#"><i className="fas fa-long-arrow-alt-right" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  {/* /Browse by Specialities */}
  {/* Book Doctors*/}
  <section className="our-doctors-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="section-heading">
          <h2>Clinic &amp; Specialities</h2>
          <p>Access to expert physicians and surgeons, advanced technologies and top-quality surgery facilities right here.</p>
        </div>
      </div>
      <div className="col-md-6 text-right">
        <div className="owl-nav slide-nav-2 text-right nav-control" />
      </div>
    </div>
    <div className="owl-carousel our-doctors owl-theme">
      <div className="item">
        <div className="our-doctors-card">
          <div className="doctors-header">
            <a href="#"><img src={Doctor1} className="img-fluid" /></a>
            <div className="img-overlay">
              <span>$20 - $50</span>
            </div>
          </div>
          <div className="doctors-body">
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <span className="d-inline-block average-ratings">3.5</span>
            </div>
            <Link to="/patient/doctor-profile"><h4>Dr. Ruby Perrin</h4></Link>
            <p>BDS, MDS - Oral &amp; Maxillofacial Surgery</p>
            <div className="location d-flex">
              <p><i className="fas fa-map-marker-alt" /> Georgia, USA</p>
              <p className="ml-auto"><i className="fas fa-user-md" /> 450 Consultations</p>
            </div>
            <div className="row row-sm">
              <div className="col-6">
                <Link to="/patient/doctor-profile" className="btn view-btn" tabIndex={0}>View Profile</Link>
              </div>
              <div className="col-6">
                <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="our-doctors-card">
          <div className="doctors-header">
            <a href="#"><img src={Doctor4} className="img-fluid" /></a>
            <div className="img-overlay">
              <span>$20 - $50</span>
            </div>
          </div>
          <div className="doctors-body">
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <span className="d-inline-block average-ratings">3.5</span>
            </div>
            <Link to="/patient/doctor-profile"><h4>Dr. Deborah Angel</h4></Link>
            <p>MBBS, MD - General Medicine, DNB</p>
            <div className="location d-flex">
              <p><i className="fas fa-map-marker-alt" /> Georgia, USA</p>
              <p className="ml-auto"><i className="fas fa-user-md" /> 450 Consultations</p>
            </div>
            <div className="row row-sm">
              <div className="col-6">
                <Link to="/patient/doctor-profile" className="btn view-btn" tabIndex={0}>View Profile</Link>
              </div>
              <div className="col-6">
                <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="our-doctors-card">
          <div className="doctors-header">
            <a href="#"><img src={Doctor3} className="img-fluid" /></a>
            <div className="img-overlay">
              <span>$20 - $50</span>
            </div>
          </div>
          <div className="doctors-body">
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <span className="d-inline-block average-ratings">3.5</span>
            </div>
            <Link to="/patient/doctor-profile"><h4>Dr. Sofia Brient</h4></Link>
            <p>MBBS, MS - General Surgery, MCh</p>
            <div className="location d-flex">
              <p><i className="fas fa-map-marker-alt" /> Georgia, USA</p>
              <p className="ml-auto"><i className="fas fa-user-md" /> 450 Consultations</p>
            </div>
            <div className="row row-sm">
              <div className="col-6">
                <Link to="/patient/doctor-profile" className="btn view-btn" tabIndex={0}>View Profile</Link>
              </div>
              <div className="col-6">
                <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="our-doctors-card">
          <div className="doctors-header">
            <a href="#"><img src={Doctor2} className="img-fluid" /></a>
            <div className="img-overlay">
              <span>$20 - $50</span>
            </div>
          </div>
          <div className="doctors-body">
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <span className="d-inline-block average-ratings">3.5</span>
            </div>
            <Link to="/patient/doctor-profile"><h4>Dr. Darren Elder</h4></Link>
            <p>BDS, MDS - Oral &amp; Maxillofacial Surgery</p>
            <div className="location d-flex">
              <p><i className="fas fa-map-marker-alt" /> Georgia, USA</p>
              <p className="ml-auto"><i className="fas fa-user-md" /> 450 Consultations</p>
            </div>
            <div className="row row-sm">
              <div className="col-6">
                <Link to="/patient/doctor-profile" className="btn view-btn" tabIndex={0}>View Profile</Link>
              </div>
              <div className="col-6">
                <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  {/* /Book Doctors*/}
  {/* Clinic Features Section */}
<section className="clinic-features-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="section-heading">
          <h2>Availabe Features in Our Clinic</h2>
          <p>Meet our Experts &amp; Book Online</p>
        </div>
      </div>
      <div className="col-md-6 text-right">
        <div className="owl-nav slide-nav-3 text-right nav-control" />
      </div>
    </div>
    <div className="owl-carousel clinic-feature owl-theme">
      <div className="item">
        <div className="clinic-features">
          <img src={clinic06} className="img-fluid" />
        </div>
        <div className="clinic-feature-overlay">
          <a href="#" className="img-overlay">Operation</a>
        </div>
      </div>
      <div className="item">
        <div className="clinic-features">
          <img src={clinic07} className="img-fluid" />
        </div>
        <div className="clinic-feature-overlay">
          <a href="#" className="img-overlay">Medical</a>
        </div>
      </div>
      <div className="item">
        <div className="clinic-features">
          <img src={clinic08} className="img-fluid" />
        </div>
        <div className="clinic-feature-overlay">
          <a href="#" className="img-overlay">Patient Ward</a>
        </div>
      </div>
      <div className="item">
        <div className="clinic-features">
          <img src={clinic09} className="img-fluid" />
        </div>
        <div className="clinic-feature-overlay">
          <a href="#" className="img-overlay">TEST ROOM</a>
        </div>
      </div>
      <div className="item">
        <div className="clinic-features">
          <img src={clinic10} className="img-fluid" />
        </div>
        <div className="clinic-feature-overlay">
          <a href="#" className="img-overlay">ICU</a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* /Clinic Features Section */}
  {/* Blog Section */}
<section className="our-blog-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="section-heading">
          <h2>Blogs and News</h2>
          <p>Read Professional Articles and Latest Articles</p>
        </div>
      </div>
      <div className="col-md-6 text-right">
        <div className="owl-nav slide-nav-4 text-right nav-control" />
      </div>
    </div>
    <div className="owl-carousel blogs owl-theme">
      <div className="item">
        <div className="our-blogs">
          <div className="blogs-img">
            <Link to="/blog/blog-details"><img src={blog1} className="img-fluid" /></Link>
            <div className="blogs-overlay d-flex">
              <img src={DoctorThumb01} className="img-fluid" />
              <span className="blogs-writter">Dr. Ruby Perrin</span>
            </div>
          </div>
          <div className="blogs-info">
            <span>Urology</span>
            <Link to="/blog/blog-details"><h4>Doccure – Making your clinic painless visit?</h4></Link>
            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
            <span className="blogs-time"><i className="far fa-clock" /> 3 Dec 2021</span>
          </div>
          <div className="blogs-nav">
            <Link to="/blog/blog-details" className="blogs-btn">Read More</Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="our-blogs">
          <div className="blogs-img">
            <Link to="/blog/blog-details"><img src={blog2} className="img-fluid" /></Link>
            <div className="blogs-overlay d-flex">
              <img src={DoctorThumb01} className="img-fluid" />
              <span className="blogs-writter">Dr. Ruby Perrin</span>
            </div>
          </div>
          <div className="blogs-info">
            <span>Neurology</span>
            <Link to="/blog/blog-details"><h4>What are the benefits of Online Doctor Booking?</h4></Link>
            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
            <span className="blogs-time"><i className="far fa-clock" /> 3 Dec 2021</span>
          </div>
          <div className="blogs-nav">
            <Link to="/blog/blog-details" className="blogs-btn">Read More</Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="our-blogs">
          <div className="blogs-img">
            <Link to="/blog/blog-details"><img src={blog3} className="img-fluid" /></Link>
            <div className="blogs-overlay d-flex">
              <img src={DoctorThumb01} className="img-fluid" />
              <span className="blogs-writter">Dr. Ruby Perrin</span>
            </div>
          </div>
          <div className="blogs-info">
            <span>Orthopedic</span>
            <Link to="/blog/blog-details"><h4>Benefits of consulting with an Online Doctor</h4></Link>
            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
            <span className="blogs-time"><i className="far fa-clock" /> 3 Dec 2021</span>
          </div>
          <div className="blogs-nav">
            <Link to="/blog/blog-details" className="blogs-btn">Read More</Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="our-blogs">
          <div className="blogs-img">
            <Link to="/blog/blog-details"><img src={blog4} className="img-fluid" /></Link>
            <div className="blogs-overlay d-flex">
              <img src={DoctorThumb01} className="img-fluid" />
              <span className="blogs-writter">Dr. Ruby Perrin</span>
            </div>
          </div>
          <div className="blogs-info">
            <span>Cardiologist</span>
            <Link to="/blog/blog-details"><h4>5 Great reasons to use an Online Doctor</h4></Link>
            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
            <span className="blogs-time"><i className="far fa-clock" /> 3 Dec 2021</span>
          </div>
          <div className="blogs-nav">
            <Link to="/blog/blog-details" className="blogs-btn">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* /Blog Section */}
  {/* Footer */}
  <footer className="footer footer-2 footer-four">
    {/* Footer Top */}
    <div className="footer-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">Quick Links</h2>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Our Approach</a></li>
                <li><a href="#">Our History</a></li>
                <li><a href="#">Awards And Achievements</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Appointment</a></li>
                <li><a href="#">Facilities</a></li>
                <li><a href="#">Pricing Plans</a></li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-about">
              <div className="footer-logo">
                <img src={FooterLogo} alt="logo" />
              </div>
              <div className="footer-about-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              <div className="footer-widget footer-contact mt-4">
                <h2 className="footer-title">Our Location</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span><i className="fas fa-map-marker-alt" /></span>
                    <p> 3556  Beech Street, San Francisco,<br /> California, CA 94108 </p>
                  </div>
                  <p>
                    <i className="fas fa-phone-alt" />
                    +1 315 369 5943
                  </p>
                  <p className="mb-0">
                    <i className="fas fa-envelope" />
                    doccure@example.com
                  </p>
                </div>
              </div>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">Services</h2>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><a href="#">Cardiology</a></li>
                    <li><a href="#">Diabetes</a></li>
                    <li><a href="#">Plastic Surgery</a></li>
                    <li><a href="#">Gastroenterology</a></li>
                    <li><a href="#">Gynecology</a></li>
                    <li><a href="#">Hepatology</a></li>
                    <li><a href="#">Neurology</a></li>
                    <li><a href="#">Radiology</a></li>
                    <li><a href="#">Rhinology</a></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><a href="#">Obstetrics</a></li>
                    <li><a href="#">Ophthalmology</a></li>
                    <li><a href="#">Oral Health</a></li>
                    <li><a href="#">Orthopedics</a></li>
                    <li><a href="#">Osteology</a></li>
                    <li><a href="#">Otology</a></li>
                    <li><a href="#">Pediatrics</a></li>
                    <li><a href="#">Psychiatry</a></li>
                    <li><a href="#">Pulmonology</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-2 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">For Patients</h2>
              <ul>
              <li>
                    <Link to="/patient/search-doctor">Search for Doctors</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/patient/booking">Booking</Link>
                  </li>
                  <li>
                    <Link to="/patient/dashboard">Patient Dashboard</Link>
                  </li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-2 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">For Doctors</h2>
              <ul>
                <li>
                     <Link to="/doctor/appointments">Appointments</Link>
                </li>
                <li>
                     <Link to="/doctor/chat-doctor">Chat</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                     <Link to="/doctor/doctor-register">Register</Link>
                </li>
                <li>
                    <Link to="/doctor/doctor-dashboard">Doctor Dashboard</Link>
                </li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
        </div>
      </div>
    </div>
    {/* /Footer Top */}
    {/* Footer Bottom */}
    <div className="footer-bottom">
      <div className="container-fluid">
        {/* Copyright */}
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="copyright-text">
                <p className="mb-0">© 2020 <span>Doccure</span>. All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              {/* Copyright Menu */}
              <div className="copyright-menu">
                <ul className="policy-menu">
                  <li><Link to="/terms">Terms and Conditions</Link></li>
                  <li><Link to="/privacy-policy">Policy</Link></li>
                </ul>
              </div>
              {/* /Copyright Menu */}
            </div>
          </div>
        </div>
        {/* /Copyright */}
      </div>
    </div>
    {/* /Footer Bottom */}
  </footer>
  {/* /Footer */}
</div>
{/* /Main Wrapper */}
            </>
        );
    }
}
export default Home1;