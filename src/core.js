const getallbulbs = () => {
    let data = localStorage.getItem("bulbs");
    data = data ? data : {};
    let response = data && data.tasks ? data.tasks : [];
    return response;
};

const getweekdata = () => {

    let current = new Date(2017, 1, 27);
    var week = new Array();
    // Starting Monday not Sunday
    current.setDate(current.getDate() - current.getDay() + 1);
    for (var i = 0; i < 7; i++) {
        week.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }
    return week;
};

export { getallbulbs };