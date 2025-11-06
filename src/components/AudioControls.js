import React from "react";
import { Button } from "react-bootstrap";

export default function AudioControls() {
    const startAudio = () => alert("Audio will play here soon!");
    const stopAudio = () => alert("Stop audio!");

    return (
        <div className="card p-3">
            <h5>Audio Controls</h5>
            <Button variant="success" onClick={startAudio} className="me-2">
                ▶️ Play
            </Button>
            <Button variant="danger" onClick={stopAudio}>
                ⏹ Stop
            </Button>
        </div>
    );
}
