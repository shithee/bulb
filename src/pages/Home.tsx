import { useState, useEffect } from "react";
import { Storage } from "@ionic/storage";
import { IonPage, useIonRouter } from "@ionic/react";
import Header from "../components/header";
import { fetchDrafts } from "../core/server";
import { draftsinterface } from "../core/interface";

const Home: React.FC = () => {
    const store = new Storage();
    const router = useIonRouter();
    store.create();
    const [hpage, sethpage] = useState<number>(1);
    const [drafts, setDrafts] = useState<draftsinterface[]>([]);
    useEffect(() => {
        const getDrafts = async () => {
            let token = await store.get("token");
            let response = await fetchDrafts(token, hpage);
            if (
                response &&
                response.code == 200 &&
                response.data.list &&
                response.data.list
            ) {
                setDrafts(response.data.list);
            }
        };
        getDrafts();
    }, [hpage]);
    const viewDraft = async (id: string) => {
        router.push(`/drafts?id=${id}`, "forward", "push");
    };
    const loadmore = () => {
        sethpage(hpage + 1);
    };
    return (
        <IonPage>
            <Header />
            <div className="pagecontainer">
                <div className="drafts-list">
                    {drafts.map((post, i) => {
                        return (
                            <div
                                className="draft"
                                onClick={() => viewDraft(post._id)}
                                key={i}
                            >
                                <span>{post.title}</span>
                                <span className="f metadata">
                                    <span className="tag">
                                        {post.source_name}
                                    </span>
                                    <span className="smallletter">
                                        {new Date(
                                            post.created
                                        ).toLocaleTimeString()}
                                    </span>
                                </span>
                            </div>
                        );
                    })}
                    <button className="loadmore" onClick={loadmore}>Load more data</button>
                </div>
            </div>
        </IonPage>
    );
};

export default Home;
