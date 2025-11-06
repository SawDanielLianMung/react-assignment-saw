import React from "react";

export default function SongEditor({ songCode, setSongCode }) {
    return (
        <div className="card p-3">
            <h5>Song Editor</h5>
            <textarea
                className="form-control"
                rows={10}
                value={songCode}
                onChange={(e) => setSongCode(e.target.value)}
            />
        </div>
    );
}
