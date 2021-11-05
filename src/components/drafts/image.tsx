import React, { useState } from "react";
import { Storage } from "@ionic/storage";

import { draftsinterface, imageInterface } from "../../core/interface";
import { fetchImages, uploadImage } from "../../core/server";

const ImagePicker: React.FC<{
    data: draftsinterface;
    update: Function;
    next: Function;
    page: number;
}> = ({ data, update, next, page }) => {
    const store = new Storage();
    store.create();
    const nextpage = () => {
        next(page + 1);
    };
    const [key, updatekey] = useState<string>("");
    const [imagelist, updateimagelist] = useState<imageInterface[]>([]);
    const [searchlist, updatesearchlist] = useState<string[]>([]);
    const [selectedimage, updateselectedimage] = useState<string>("");
    const handleimage = async (value: string) => {
        updatekey(value);
        let character = value.slice(-1);
        let key = value.slice(0, -1);
        if (["#", "."].includes(character)) {
            let token = await store.get("token");
            let response = await fetchImages(key, character, token);
            if (response && response.code == 200) {
                if (character == ".") {
                    updateimagelist(response.data);
                    updatesearchlist([]);
                } else {
                    updatesearchlist(response.data);
                    updateimagelist([]);
                }
            }
        }
    };
    const selectImage = async (link: string) => {
        let token = await store.get("token");
        let search = key.slice(0, -1);
        let character = key.slice(-1);
        if (character == ".") {
            let newdata = { ...data, image: link };
            update(newdata);
            updateimagelist([]);
            updateselectedimage(link);
        } else {
            let response = await uploadImage(link, search, token);
            if (response.code == 200) {
                updatesearchlist([]);
            }
        }
    };
    return (
        <>
            <h1>Image Picker</h1>
            {selectedimage && <img className="selected" src={selectedimage} />}
            <div className="input-container str">
                <label>Search Image</label>
                <input
                    name="searchkey"
                    value={key}
                    onChange={(e) => handleimage(e.target.value)}
                    placeholder="end with (dot) for cricketist, # for google search"
                />
            </div>
            <div className="image-list">
                {imagelist.map((currentimage, j) => {
                    return (
                        <img
                            onClick={() => selectImage(currentimage.link)}
                            src={currentimage.link}
                            key={j}
                        />
                    );
                })}
                {searchlist.map((currentimage, j) => {
                    return (
                        <img
                            onClick={() => selectImage(currentimage)}
                            src={currentimage}
                            key={j}
                        />
                    );
                })}
            </div>
            <button onClick={nextpage} className="w100">
                Next
            </button>
        </>
    );
};

export default ImagePicker;
