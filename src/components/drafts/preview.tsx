import { useIonRouter } from "@ionic/react";
import React from "react";
import { Storage } from "@ionic/storage";
import { draftInterface } from "../../core/interface";
import { publishPost } from "../../core/server";

const Preview: React.FC<{ data: draftInterface }> = ({ data }) => {
    const store = new Storage();
    const router = useIonRouter();
    store.create();
    const publish = async () => {
        let postdata = {
            title: data.title,
            post: data.post.replace('<br>',''),
            catagory: parseInt(data.type),
            tags: [],
            image: data.image,
            source: {
                name: data.source_name,
                link: data.source,
            },
            lastupdated: Date.now(),
            status: true,
        };
        let token = await store.get("token");
        let response = await publishPost(postdata, token);
        if (response && response.code == 200) {
            router.goBack();
        }
    };
    return (
        <>
            <h1>Post Preview</h1>
            <div className="post-preview">
                <div className="post-container">
                    <h1>{data.title}</h1>
                    <div className="catagory">Catagory {data.type}</div>
                    <img src={data.image} />
                    <div
                        className="post"
                        dangerouslySetInnerHTML={{ __html: data.post }}
                    ></div>
                </div>
            </div>
            <button onClick={publish} className="w100">
                Publish
            </button>
        </>
    );
};

export default Preview;
