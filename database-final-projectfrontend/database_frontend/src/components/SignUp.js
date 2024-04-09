import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../static/css/SignUp.css';

function SignUp() {


    return (
        <form>
            <div><h2>Sign Up</h2></div>
            {/* Username */}
            <div class="col-auto">
                <label class="sr-only" for="inlineFormInputGroup">Username</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">@</div>
                    </div>
                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                </div>
            </div>

            {/* password */}

            <div class="form-group">
                <label for="inputPassword6">Password</label>
                <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                <small id="passwordHelpInline" class="text-muted">
                    Must be 8-20 characters long.
                </small>
            </div>

            {/* Address */}
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>

            {/* Zipcode */}
            <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip" />
            </div>

            {/* Submit button */}
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}

export default SignUp;
