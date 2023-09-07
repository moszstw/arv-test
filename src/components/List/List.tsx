import React, { useMemo } from "react";
import { resType } from "../../pages/Home";

type ListType = {
    data: resType[];
    keyFilter: string;
    handleSeeDetail: (username: resType) => void;
};
const List = ({ data, keyFilter, handleSeeDetail }: ListType) => {
    const searchFilter = useMemo(() => {
        const filterValue = data.filter(
            (d) =>
                d.first_name.includes(keyFilter) ||
                d.last_name.includes(keyFilter) ||
                d.username.includes(keyFilter)
        );
        return filterValue;
    }, [data, keyFilter]);

    const onSeeDetail = (event: resType) => {
        handleSeeDetail?.(event);
    };
    return (
        <div>
            <ul>
                {searchFilter.map((e) => (
                    <div
                        style={{ padding: "10px" }}
                        onClick={() => onSeeDetail(e)}
                    >
                        <li>Username: {e.username}</li>
                        <li>
                            Name: {e.first_name} {e.last_name}
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default React.memo(List);
