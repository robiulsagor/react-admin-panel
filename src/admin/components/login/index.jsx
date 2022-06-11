import React, { Component, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logo-white.png';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../../features/auth/authSlice';

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()
	const history = useHistory()

	const handleLogin = e => {
		e.preventDefault()

		if (email && password) {
			const data = { mobileNo: email, password }
			dispatch(loginUser(data))
		}
	}
	const { name, isError, isLoading, isSuccess, isLoggedIn, message } = useSelector(state => state.authSlice)

	useEffect(() => {
		if (isLoggedIn) {
			history.push("/admin")
		}
	}, [isLoggedIn])
	return (
		<div>
			<div className="main-wrapper login-body">
				<div className="login-wrapper">
					<div className="container">
						<div className="loginbox">
							<div className="login-left">
								<img className="img-fluid" src={Logo} alt="Logo" />
							</div>
							<div className="login-right">
								<div className="login-right-wrap">
									<h1>Login</h1>
									<p className="account-subtitle">Access to our dashboard</p>


									<form onSubmit={handleLogin}>
										{isError && (<div className="alert alert-danger text-center" role="alert">
											<span className='text-center'> {message}</span>
										</div>)}

										<div className="form-group">
											<input className="form-control" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
										</div>
										<div className="form-group">
											<input className="form-control" type="password" value={password}
												onChange={e => setPassword(e.target.value)} placeholder="Password" required />
										</div>
										<div className="form-group">
											<button className="btn btn-primary btn-block" type="submit" disabled={isLoading}>
												{isLoading && (<span className="spinner-border spinner-border-sm" style={{ marginRight: '8px' }} role="status" aria-hidden="true"></span>)}
												<span>Login</span>
											</button>
										</div>
									</form>


									<div className="text-center forgotpass"><Link to="/admin/forgotPassword">Forgot Password?</Link></div>
									<div className="login-or">
										<span className="or-line"></span>
										<span className="span-or">or</span>
									</div>


									<div className="social-login">
										<span>Login with</span>
										<a href="#0" className="facebook"><i className="fab fa-facebook-f"></i></a>
										<a href="#0" className="google"><i className="fab fa-google"></i></a>
									</div>


									<div className="text-center dont-have">Don’t have an account? <Link to="/admin/register">Register</Link></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;