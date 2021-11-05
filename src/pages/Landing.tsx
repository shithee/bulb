import { useState, useEffect } from "react";
import { Storage } from "@ionic/storage";
import { useIonRouter } from "@ionic/react";

import onboard from "../assets/image/onboard.png";
import { verifyServer } from "../core/server";

const Landing: React.FC = () => {
    const store = new Storage();
    const router = useIonRouter();
    store.create();

    const checkAccess = async () => {
        let token = await store.get("token");
        if (token) {
            let response = await verifyServer(token);
            if(response.code == 200 && response.data && response.data.email){
                router.push("/home", "forward", "push");
            }else{
                router.push("/login", "forward", "push");
            }
        } else {
            router.push("/login", "forward", "push");
        }
    };
    return (
        <div className="log-container">
            <div className="log-container">
                <img src={onboard} />
                <button onClick={checkAccess}>Verify my Access</button>
            </div>
        </div>
    );
};

export default Landing;
