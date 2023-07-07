import React, { FC, createContext, useContext, useState } from 'react';

interface LocationContextType {
  city: any;
  setCity: (newCity: any) => void;
  neighborhood: any;
  setNeighborhood: (newNeighborhood: any) => void;
  neighborhoods: any;
  setNeighborhoods: (newNeighborhood: any) => void;
}

const LocationContext = createContext<LocationContextType>({
  city: {},
  setCity: () => {},
  neighborhood: [],
  setNeighborhood: () => {},
  neighborhoods: [],
  setNeighborhoods: () => {},
});

export const useLocationContext = () => useContext(LocationContext);

const LocationProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [city, setCity] = useState({});
  const [neighborhood, setNeighborhood] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);

  return (
    <LocationContext.Provider
      value={{
        city,
        setCity,
        neighborhood,
        setNeighborhood,
        neighborhoods,
        setNeighborhoods,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
