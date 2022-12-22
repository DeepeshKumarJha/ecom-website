import { createContext, useContext, useEffect, useState } from "react";

const DeviceContext = createContext();

const DeviceProvider = ({ children }) => {
  const [deviceWidth, setDeviceWidth] = useState();

  useEffect(() => {
    setDeviceWidth(window.innerWidth);
  }, []);

  const value = {
    deviceWidth: deviceWidth,
  };

  return (
    <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
  );
};

const useDeviceWidthContext = () => {
  return useContext(DeviceContext);
};

export { DeviceContext, DeviceProvider, useDeviceWidthContext };
