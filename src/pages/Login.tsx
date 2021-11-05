import { useState, useEffect } from "react";
import { Storage } from "@ionic/storage";
import { useIonRouter } from "@ionic/react";

import land from "../assets/image/land.png";
import { authenticateServer } from "../core/server";

const Login: React.FC = () => {
    const store = new Storage();
    const router = useIonRouter();
    store.create();
    const [code, setCode] = useState<string>("");
    const handleEdit = (text: string) => {
        setCode(text);
    };
    const authenticate = async()=> {
        let response = await authenticateServer(code);
        if(response.code == 200){
            await store.set('token',response.data);
            router.push("/home", "forward", "push");
        }else{
            setCode("");
        }
    }
    return (
        <div className="log-container">
            <div className="log-container">
                <img src={land} />
                <div className="input-container str">
                    <label>Passcode</label>
                    <input
                        value={code}
                        onChange={(e) => handleEdit(e.target.value)}
                        placeholder="Enter your passcode"
                    />
                </div>
                <button onClick={authenticate}>Log In with passcode</button>
            </div>
        </div>
    );
};

export default Login;
