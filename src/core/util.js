const getdummydraft = () => {
    let dummy = {
        caption : "",
        image : "",
        post : "",
        created : "",
        source : "",
        source_name : "",
        title : "",
        type : "",
        updated : "",
        __v : 0,
        _id : ""
    }
    return dummy;
}

const getdummyimage = () => {
    return {
        _id : "",
        name : "",
        link : "",
        __v : 0
    }
}

module.exports = {
    getdummydraft,
    getdummyimage
}