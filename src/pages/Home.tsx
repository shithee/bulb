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
    const [drafts, setDrafts] = useState<draftsinterface[]>([]);
    useEffect(() => {
        const getDrafts = async () => {
            let token = await store.get("token");
            let response = await fetchDrafts(token);
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
    }, []);
    const viewDraft = async (id: string) => {
        router.push(`/drafts?id=${id}`, "forward", "push");
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
                            </div>
                        );
                    })}
                </div>
            </div>
        </IonPage>
    );
};

export default Home;
