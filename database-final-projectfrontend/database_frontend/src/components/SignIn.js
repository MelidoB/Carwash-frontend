import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../static/css/SignIn.css'; // Import the CSS file for styling

function SignIn() {
    return (
        <div>
        <Header />
        <div className="signin-container">
           
            <form className="signin-form">
                <h2>Sign In</h2>
                {/* Username */}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Username" />
                </div>

                {/* Password */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary">Submit</button>

                {/* New user link */}
                <a href="/signup">New user? Sign up</a>
            </form>
        </div>
            <Footer />
        </div>
    );
}

export default SignIn;
