import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import User from "../components/User";
import List from "../components/List";
import { useNavigate } from "react-router-dom";

export type resType = {
    username: string;
    first_name: string;
    last_name: string;
};

const Home = () => {
    const [data, setData] = useState<resType[]>([]);
    const [searchKey, setsearchKey] = useState<string>("");
    const [interestedObj, setinterestedObj] = useState<resType>();
    const navigate = useNavigate();

    const fetchData = () => {
        axios
            .get(`https://random-data-api.com/api/users/random_user?size=5`)
            .then((response) => {
                const interest: resType[] = response.data;
                if (data.length === 0) {
                    setData(interest);
                } else {
                    setData((prevCount) => prevCount.concat(interest));
                }
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const serchValue = event.target.value;
        setsearchKey(serchValue);
    };

    const handleSeeDetail = (event: resType) => {
        setinterestedObj(event);
        navigate("/profile", {
            state: {
                userData: event,
            },
        });
    };

    return (
        <div className="h-screen px-20 m-2">
            <div className="flex items-center justify-around">
                <label className="font-bold">User Data</label>
                <div>
                    Search:{" "}
                    <input onChange={handleSearch} className="border-2" />
                </div>
            </div>
            <div className="overflow-scroll h-[400px] border rounded-sm">
                {data && (
                    <List
                        data={data}
                        keyFilter={searchKey}
                        handleSeeDetail={handleSeeDetail}
                    />
                )}
            </div>
            <div className="pt-3 flex items-center w-full justify-center">
                <button
                    onClick={fetchData}
                    className="bg-gray-500 p-3 text-white font-bold rounded-lg"
                >
                    Fetch More
                </button>
            </div>
        </div>
    );
};

export default Home;
