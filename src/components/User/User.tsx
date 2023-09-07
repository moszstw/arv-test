import React, { useMemo } from "react";
import { resType } from "../../pages/Home";

type UserType = {
    user: resType;
};

const User = ({ user }: UserType) => {
    return (
        <div style={{ padding: "10px" }}>
            <li>Username: {user.username}</li>
            <li>
                Name: {user.first_name} {user.last_name}
            </li>
        </div>
    );
};

export default React.memo(User);
