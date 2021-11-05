import React, { useState } from "react";
import { draftsinterface } from "../../core/interface";

const Title: React.FC<{
    next: Function;
    page: number;
    update: Function;
    data: draftsinterface;
}> = ({ next, page,update,data }) => {
    const nextpage = () => {
        next(page + 1);
    };
    const handleEdit = (text: string) => {
        let newdata = { ...data, title: text};
        update(newdata);
    };
    return (
        <>
            <h1>Post Title</h1>
            <div className="input-container str">
                <label>TITLE</label>
                <input
                    onChange={(e) => handleEdit(e.target.value)}
                    value={data.title}
                    placeholder="Enter your title"
                />
            </div>
            <button onClick={nextpage} className="w100">
                Next
            </button>
        </>
    );
};

export default Title;
