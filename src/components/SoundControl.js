function SoundControl(){
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="cpm_label">SetCPM</span>
                <input type="text" className="form-control" placeholder="120" aria-label="Username"
                       aria-describedby="cpm_label"/>
            </div>
        </>
    );
}

export default SoundControl;