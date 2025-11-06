import React from "react";

export default function StrudelPlayer({ songCode }) {
    return (
        <div className="card p-3">
            <h5>Strudel Output</h5>
            <pre style={{ background: "#222", color: "#0f0", padding: "10px" }}>
        {songCode}
      </pre>
        </div>
    );
}
