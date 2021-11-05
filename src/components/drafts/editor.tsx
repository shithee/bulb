import React from "react";
import { draftInterface } from "../../core/interface";
import ContentEditable from "react-contenteditable";

const Editor: React.FC<{
    data: draftInterface;
    update: Function;
    next: Function;
    page: number;
}> = ({ data, update, next, page }) => {
    const nextpage = () => {
        next(page + 1);
    };
    const handleEdit = (text: string) => {
        let newdata = { ...data, post: text };
        update(newdata);
    };
    return (
        <>
            <h1>Post Content</h1>
            <ContentEditable
                html={data.post}
                disabled={false}
                tagName="p"
                onChange={(e) => handleEdit(e.target.value)}
            />
            <button onClick={nextpage} disabled={false} className="w100">
                Next
            </button>
        </>
    );
};

export default Editor;
