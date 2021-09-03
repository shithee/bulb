const refactorData = (data) => {
    if (data && data.length) {
        data = JSON.parse(data);
        data = removePreviousweek(data);
        return data;
    } else {
        // Empty data from storage
        data = getdefaultdata();
        return data;
    }
}

const removePreviousweek = (existing) => {
    let current = new Date();
    current.setDate(current.getDate() - current.getDay() + 1);
    let weekstart = new Date(current.getFullYear(), current.getMonth(), current.getDate()).getTime();
    existing = existing.filter(e => e.timestamp >= weekstart);
    existing = (existing && existing.length) ? existing : getdefaultdata();
    return existing;
}

const getdefaultdata = () => {
    let defaultdata = [];
    let weeks = getweekdata();
    weeks.map(week => {
        defaultdata.push({
            ...week,
            tasks: []
        });
    });
    return defaultdata;
}

const getweekdata = () => {

    let current = new Date();
    var week = new Array();
    // Starting Monday not Sunday
    current.setDate(current.getDate() - current.getDay() + 1);
    for (var i = 0; i < 7; i++) {
        week.push({
            text: new Date(current).toDateString(),
            timestamp: new Date(current).getTime()
        });
        current.setDate(current.getDate() + 1);
    }
    return week;
};

const getemptytask = () => {
    return {
        id: Math.floor(Math.random() * (1000 + 1)),
        name: "Task 1",
        status: true,
        active: false
    }
}

export { refactorData, getemptytask };