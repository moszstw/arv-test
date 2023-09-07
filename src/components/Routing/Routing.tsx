import { Skeleton } from "@mui/material";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../../pages/Home"));
const Profile = React.lazy(() => import("../../pages/Profile"));

const Routing = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<SkeletonLoader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

const SkeletonLoader = () => (
    <div>
        <Skeleton variant="rectangular" height={118} />
    </div>
);

export default Routing;
