import React from "react";
import { Button, Form } from "react-bootstrap";

export default function ControlPanel({ settings, onSettingChange, onPreprocess }) {
    return (
        <div className="card p-3">
            <h5>Preprocessor Controls</h5>
            <Form.Check
                type="radio"
                label="Instrument On"
                name="instrument1"
                checked={settings.instrumentOn}
                onChange={() => onSettingChange("instrumentOn", true)}
            />
            <Form.Check
                type="radio"
                label="Instrument Hush"
                name="instrument1"
                checked={!settings.instrumentOn}
                onChange={() => onSettingChange("instrumentOn", false)}
            />

            <Form.Label className="mt-2">Volume</Form.Label>
            <Form.Range
                min={0}
                max={100}
                value={settings.volume}
                onChange={(e) => onSettingChange("volume", parseInt(e.target.value))}
            />

            <Form.Check
                type="checkbox"
                label="Enable Reverb"
                checked={settings.reverb > 0}
                onChange={(e) => onSettingChange("reverb", e.target.checked ? 40 : 0)}
            />

            <Button variant="primary" className="mt-3" onClick={onPreprocess}>
                🔄 Apply Preprocess
            </Button>
        </div>
    );
}
