import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useEffect, useState } from "react";
import { GOOGLE_MAP_API } from "../../configs/Constants";

const API_KEY = GOOGLE_MAP_API;

const render = (status) => {
    return <h1>{status}</h1>;
};


const Map = ({ onClick, onIdle, children, style, ...options }) => {
    const ref = React.useRef();
    const [map, setMap] = React.useState();

    React.useEffect(() => {
        if (ref.current && !map) {
            const map = new window.google.maps.Map(ref.current, {});
            setMap(map);
        }
    }, [ref, map]);

    useEffect(() => {
        if (map) {
            ["click", "idle"].forEach((eventName) =>
                window.google.maps.event.clearListeners(map, eventName)
            );
            if (onClick) {
                map.addListener("click", onClick);
            }

            if (onIdle) {
                map.addListener("idle", () => onIdle(map));
            }
        }
    }, [map]);

    function createMarker(options) {

    }

    return (
        <>
            <div ref={ref} style={style} />
        </>
    );
};

export function GoogleMapElement() {
    const zoom = 20;
    return (
        <Wrapper
            render={render}
            apiKey={API_KEY}
        >
            <Map
                // center={center}
                zoom={zoom}
            >
            </Map>
        </Wrapper>
    )
}