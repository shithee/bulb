import React from "react";
import { draftInterface } from "../../core/interface";

const CatagoryPicker: React.FC<{
    data: draftInterface;
    update: Function;
    next: Function;
    page: number;
}> = ({ data, update, next, page }) => {
    const nextpage = () => {
        next(page + 1);
    };
    const handleEdit = (text: string) => {
        let newdata = { ...data, type: text };
        update(newdata);
    };
    return (
        <>
            <h1>Post Catagory</h1>
            <div className="input-container str">
                <label>Post Catagory</label>
                <select onChange={(e) => handleEdit(e.target.value)} >
                    <option>Select Catagory</option>
                    <option value="1">Flash News</option>
                    <option value="2">Player Quotes</option>
                    <option value="3">Match Updates</option>
                    <option value="4">Statistics</option>
                    <option value="5">Twitter Feed</option>
                </select>
            </div>
            <button onClick={nextpage} className="w100">Next</button>
        </>
    );
};

export default CatagoryPicker;