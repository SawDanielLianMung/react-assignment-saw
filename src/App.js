import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SongEditor from "./components/SongEditor";
import AudioControls from "./components/AudioControls";
import StrudelPlayer from "./components/StrudelPlayer";
import GraphPanel from "./components/GraphPanel";
import "./App.css";

export default function App() {
    const [songCode, setSongCode] = useState("// your Strudel code here");

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">🎶 Strudel Reactor Interface</h2>
            <div className="row">
                <div className="col-md-6">
                    <SongEditor songCode={songCode} setSongCode={setSongCode} />
                </div>
                <div className="col-md-6">
                    <StrudelPlayer songCode={songCode} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <AudioControls />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <GraphPanel />
                </div>
            </div>
        </div>
    );
}
