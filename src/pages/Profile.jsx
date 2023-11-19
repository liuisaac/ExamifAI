import React from "react";
import { NavbarP, SignUp } from "../components";

const Profile = () => {
    return (
        <div>
            <div>
                <NavbarP />
            </div>
            <div className="mt-16">
                <SignUp />
            </div>
        </div>
    );
};

export default Profile;
