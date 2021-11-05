import { useState, useEffect } from "react";
import { Storage } from "@ionic/storage";
import { IonPage, useIonRouter } from "@ionic/react";

import Head from "../components/drafts/head";
import Title from "../components/drafts/title";
import ImagePicker from "../components/drafts/image";
import Editor from "../components/drafts/editor";
import CatagoryPicker from "../components/drafts/catagory";
import Preview from "../components/drafts/preview";
import { fetchDraft } from "../core/server";
import { draftInterface } from "../core/interface";
import { getdummydraft } from "../core/util";

const Draft: React.FC = () => {
    const store = new Storage();
    store.create();

    const [page, setPage] = useState<number>(1);
    const [singledraft, setDraft] = useState<draftInterface>(getdummydraft());
    useEffect(() => {
        const getDraftdata = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            let postid = urlParams.get("id");
            let token = await store.get("token");
            let response = await fetchDraft(postid, token);
            if (response && response.code == 200 && response.data) {
                setDraft(response.data);
            }
        };
        getDraftdata();
    }, []);
    return (
        <IonPage>
            <Head page={page} update={setPage} />
            <div className="pagecontainer">
                <div className="draft-contents">
                    <div
                        className="draft-element"
                        style={{ display: page != 1 ? "none" : "" }}
                    >
                        <Title
                            page={page}
                            data={singledraft}
                            next={setPage}
                            update={setDraft}
                        />
                    </div>
                    <div
                        className="draft-element"
                        style={{ display: page != 2 ? "none" : "" }}
                    >
                        <ImagePicker
                            data={singledraft}
                            update={setDraft}
                            next={setPage}
                            page={page}
                        />
                    </div>
                    <div
                        className="draft-element"
                        style={{ display: page != 3 ? "none" : "" }}
                    >
                        <Editor
                            data={singledraft}
                            update={setDraft}
                            next={setPage}
                            page={page}
                        />
                    </div>
                    <div
                        className="draft-element"
                        style={{ display: page != 4 ? "none" : "" }}
                    >
                        <CatagoryPicker
                            data={singledraft}
                            update={setDraft}
                            next={setPage}
                            page={page}
                        />
                    </div>
                    <div
                        className="draft-element"
                        style={{ display: page != 5 ? "none" : "" }}
                    >
                        <Preview data={singledraft} />
                    </div>
                </div>
            </div>
        </IonPage>
    );
};

export default Draft;
