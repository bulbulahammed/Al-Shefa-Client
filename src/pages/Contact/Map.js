import { useLoadScript } from '@react-google-maps/api';
import React from 'react';

const Map = () => {
    const {isLoaded} = useLoadScript({
        googleMapApiKey = process.env.MAP_API_KEY;
    })
    return (
        <div>
            
        </div>
    );
};

export default Map;