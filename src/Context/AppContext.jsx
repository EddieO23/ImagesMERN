import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = createContext(undefined);

export function AppContextProvider({ children }) {
  const [refresh, setRefresh] = useState(0);
  const [allImages, setAllImages] = useState(undefined);
  const [selectedImageId, setSelectedImageId] = useState("")

  const getAllImages = async () => {
    try {
      const response = await axios.get(
        `https://server-beta-red-85.vercel.app/api/allImages`
      );
      setAllImages(response.data);
    } catch (error) {
      console.log('Error getting all images', error);
    }
  };

  useEffect(() => {
    getAllImages();
  }, []);
  useEffect(() => {
    getAllImages();
  }, [refresh]);

  return (
    <AppContext.Provider value={{ allImages, setRefresh }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppContext;
