import React, { useState, useRef } from "react";

function Collapse(props) {
    const ref = useRef(null);
    const [showCollapse, setShowCollapse] = useState(false);
    const short = props.short;
    const collapse = props.collapse;

    function showHide() {
        setShowCollapse(!showCollapse);
    }

    return (
        <>
            <p className="mb-0 text-white-50" onClick={showHide}>
                {short}
            </p>
            <div
                className={"collaps"}
                style={
                    showCollapse
                        ? { height: ref.current.offsetHeight + "px" }
                        : {}
                }
            >
                <p ref={ref} className="mb-0 text-white-50" onClick={showHide}>
                    {collapse}
                </p>
            </div>
        </>
    );
}

export default Collapse;
