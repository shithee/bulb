import React from "react";

const Head: React.FC<{ page: number; update: Function }> = ({
    page,
    update,
}) => {
    const changepage = (pg: number) => {
        update(pg);
    };
    return (
        <div className="fixedheader w100">
            <div className="header h100 f cent">
                <div className="draft-tabs">
                    <span
                        onClick={() => changepage(1)}
                        className={page == 1 ? "active" : ""}
                    >
                        1
                    </span>
                    <span
                        onClick={() => changepage(2)}
                        className={page == 2 ? "active" : ""}
                    >
                        2
                    </span>
                    <span
                        onClick={() => changepage(3)}
                        className={page == 3 ? "active" : ""}
                    >
                        3
                    </span>
                    <span
                        onClick={() => changepage(4)}
                        className={page == 4 ? "active" : ""}
                    >
                        4
                    </span>
                    <span
                        onClick={() => changepage(5)}
                        className={page == 5 ? "active" : ""}
                    >
                        5
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Head;
