const authenticateServer = async (passcode) => {
    let url = "https://api.cricketist.in/check-code";
    try {
        let apirequest = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ code: passcode }),
        });
        let data = await apirequest.json();
        return data;
    } catch {
        return false;
    }
};
const verifyServer = async (passcode) => {
    let url = "https://api.cricketist.in/verify-code";
    try {
        let apirequest = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ code: passcode }),
        });
        let data = await apirequest.json();
        return data;
    } catch {
        return false;
    }
};

const fetchDrafts = async (token,page) => {
    let url = "https://api.cricketist.in/admin/api/drafts?page="+page;
    try {
        let apirequest = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                // 'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
        });
        let data = await apirequest.json();
        return data;
    } catch {
        return false;
    }
};

const fetchDraft = async (id, token) => {
    let url = `https://api.cricketist.in/admin/api/drafts/${id}`;
    try {
        let apirequest = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                authorization: `Bearer ${token}`,
            },
        });
        let data = await apirequest.json();
        return data;
    } catch {
        return false;
    }
};
const fetchImages = async (key, type, token) => {
    let url =
        type == "."
            ? `https://api.cricketist.in/admin/api/images?key=${key}`
            : `https://api.cricketist.in/admin/api/images/search?key=${key}`;
    try {
        let apirequest = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                authorization: `Bearer ${token}`,
            },
        });
        let data = await apirequest.json();
        return data;
    } catch {
        return false;
    }
};

const uploadImage = async (link, key, token) => {
    let url = "https://api.cricketist.in/admin/api/images";
    try {
        let apirequest = await fetch(url, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ link, caption: key }),
        });
        let data = await apirequest.json();
        return data;
    } catch {
        return false;
    }
};
const publishPost = async (post, token) => {
    let url = "https://api.cricketist.in/admin/api/jobs";
    try {
        let apirequest = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                params: JSON.stringify(post),
                function: "add_blog_manual",
            }),
        });
        let data = await apirequest.json();
        return data;
    } catch {
        return false;
    }
};

export {
    authenticateServer,
    verifyServer,
    fetchDrafts,
    fetchDraft,
    fetchImages,
    uploadImage,
    publishPost,
};