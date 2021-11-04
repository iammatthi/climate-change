import React, { useRef, useEffect } from "react";

const { tableau } = window;

function TableEmbed({ url }) {
    const ref = useRef(null);

    const option = {
        device: "desktop",
    };

    function initViz() {
        new tableau.Viz(ref.current, url, option);
    }

    useEffect(() => {
        initViz();
    }, [])

    return (
        <div>
            <div ref={ref} style={{ marginBottom:"20px" }}></div>
        </div>
    );
}

export default TableEmbed;