import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = createContext(undefined);

export function AppContextProvider({ children }) {
  const [refresh, setRefresh] = useState(0);
  const [allImages, setAllImages] = useState(undefined);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [selectedImageTitle, setSelectedImageTitle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleTitleUpdate = async () => {
    try {
      setIsLoading(true);

      const payload = {
        newTitle: selectedImageTitle,
      };
      await axios.put(
        `https://server-beta-red-85.vercel.app/api/image/${selectedImageId}`,
        payload
      );

      setSelectedImageId(null);
      setSelectedImageTitle(null);

      await getAllImages();

      setIsLoading(false);
    } catch (error) {
      console.error('Error updating title:', error);
      setIsLoading(false);
    }
  };

  const handleImageDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(
        `https://server-beta-red-85.vercel.app/api/image/${selectedImageId}`
      );

    

      const images = allImages.filter((img) => {
        return img._id != selectedImageId
      })
      setAllImages(images)
      setSelectedImageId(null);
      setSelectedImageTitle(null);
      setIsLoading(false);
    } catch (error) {
      console.error('Error updating title:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllImages();
  }, []);
  useEffect(() => {
    getAllImages();
  }, [refresh]);

  return (
    <AppContext.Provider
      value={{
        allImages,
        setRefresh,
        selectedImageId,
        setSelectedImageId,
        setSelectedImageTitle,
        selectedImageTitle,
        handleTitleUpdate,
        isLoading,
        setIsLoading,
        handleImageDelete
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export default AppContext;
