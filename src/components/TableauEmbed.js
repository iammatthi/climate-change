import React, { useRef, useEffect } from "react";

const { tableau } = window;

function TableEmbed() {
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/WorldTemperaturesHeatmap/WorldTemperaturesHeatmap";

    const option = {
        devvice: "desktop",
    };

    function initViz() {
        new tableau.Viz(ref.current, url, option);
    }

    useEffect(() => {
        initViz();
    }, [])

    return (
        <div>
            <div ref={ref}></div>
        </div>
    );
}

export default TableEmbed;