import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
    const { state } = useLocation();
    const { userData } = state;
    console.log("state", userData);

    return (
        <div className="h-screen">
            <div className="flex flex-col p-5">
                <div>id: {userData.id}</div>
                <div>UserName: {userData.username}</div>
                <div>FirstName: {userData.first_name}</div>
                <div> LastName: {userData.lastName}</div>
            </div>
        </div>
    );
};

export default Profile;
