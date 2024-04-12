import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../static/css/SignUp.css'; // Import your CSS file
import Header from './Header';
import Footer from './Footer';

function SignUp() {
    // State for form fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const history = useHistory();

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Form data
        const formData = {
            username,
            password,
            address,
            zipcode
        };
        // Sending form data to server
        fetch('https://api.example.com/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle successful signup
            console.log('Signup successful:', data);
            // Redirect to another page after successful signup
            history.push('/dashboard'); // Change '/dashboard' to your desired route
        })
        .catch(error => {
            // Handle signup error
            console.error('Error during signup:', error);
            // Optionally, you can display an error message to the user
        });
    };

    return (
        <div>
            <Header />
            <div className="signup-container">

        <form onSubmit={handleSubmit} className="signup-form">
            <div><h2>Sign Up</h2></div>
            {/* Username */}
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                    </div>
                    <input type="text" className="form-control" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
            </div>

            {/* Password */}
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" aria-describedby="passwordHelpInline" value={password} onChange={(e) => setPassword(e.target.value)} />
                <small id="passwordHelpInline" className="text-muted">
                    Must be 8-20 characters long.
                </small>
            </div>

            {/* Address */}
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>

            {/* Zipcode */}
            <div className="form-group">
                <label htmlFor="zipcode">Zip</label>
                <input type="text" className="form-control" id="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-primary">Submit</button>
            {/* New user link */}
            <a href="/signin">Old user? Sign in</a>
           
        </form>
        </div>
        <Footer />
        </div>
    );
}

export default SignUp;
