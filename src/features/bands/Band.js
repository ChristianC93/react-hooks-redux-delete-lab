import React from "react";


function Band({ band, onBandDelete }) {
    function handleDelete() {
        onBandDelete(band.id)
    };

    return (
        <div>
            <p>{ band.name }</p><button onClick={handleDelete}>Delete Band</button>
        </div>
    )
};

export default Band;