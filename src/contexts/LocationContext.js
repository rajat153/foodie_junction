import { createContext, useState, useEffect } from "react";

export const LocationContext = createContext();

export function LocationProvider({ children }) {

    const [location, setLocation] = useState({ lat: null, lng: null });

    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            (error) => {
              console.error("Geolocation Error:", error);
              setLocation({ lat: 25.4358011, lng: 81.846311 });// default values
            }
          );
        } else {
          console.error("Geolocation is not supported");
        }
    }, []);
    return (
        <LocationContext.Provider value={location}>
          {children}
        </LocationContext.Provider>
    );
}