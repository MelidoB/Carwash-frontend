import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';


function SignIn() {
    return (
        
        <form>
            <div><h2>Sign In</h2></div>
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

            {/* Submit button */}
            <button type="submit" class="btn btn-primary">Submit</button>

            <a href="/signup">New user? Sign up</a>
        </form>
    );
}

export default SignIn;
