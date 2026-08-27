import React, { createContext, useContext, useState, useEffect } from 'react';
import { GalleryPhoto } from '../types/portfolio';

interface PhotoContextType {
  avatarUrl: string | null;
  setAvatarUrl: (url: string | null) => void;
  gallery: GalleryPhoto[];
  addPhotos: (photos: Omit<GalleryPhoto, 'id' | 'dateAdded'>[]) => void;
  removePhoto: (id: string) => void;
  setAsAvatar: (id: string) => void;
  clearAvatar: () => void;
  resetGallery: () => void;
}

const DEFAULT_GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'sample-1',
    title: 'Developer Workstation & Dual Monitors',
    category: 'workspace',
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    dateAdded: 'Aug 2024',
    size: '1.4 MB',
    filter: 'normal',
    isAvatar: false
  },
  {
    id: 'sample-2',
    title: 'Clean Minimalist Coding Desk',
    category: 'workspace',
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    dateAdded: 'Jul 2024',
    size: '980 KB',
    filter: 'cyber',
    isAvatar: false
  },
  {
    id: 'sample-3',
    title: 'Modern IDE & Terminal Interface',
    category: 'projects',
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    dateAdded: 'Jun 2024',
    size: '1.1 MB',
    filter: 'contrast',
    isAvatar: false
  }
];

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

const AVATAR_STORAGE_KEY = 'debangan_portfolio_avatar';
const GALLERY_STORAGE_KEY = 'debangan_portfolio_gallery';

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [avatarUrl, setAvatarUrlState] = useState<string | null>(() => {
    try {
      return localStorage.getItem(AVATAR_STORAGE_KEY) || null;
    } catch {
      return null;
    }
  });

  const [gallery, setGallery] = useState<GalleryPhoto[]>(() => {
    try {
      const saved = localStorage.getItem(GALLERY_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return DEFAULT_GALLERY_PHOTOS;
  });

  useEffect(() => {
    try {
      if (avatarUrl) {
        localStorage.setItem(AVATAR_STORAGE_KEY, avatarUrl);
      } else {
        localStorage.removeItem(AVATAR_STORAGE_KEY);
      }
    } catch (e) {
      console.warn('Could not save avatar to localStorage', e);
    }
  }, [avatarUrl]);

  useEffect(() => {
    try {
      localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(gallery));
    } catch (e) {
      console.warn('Could not save gallery to localStorage', e);
    }
  }, [gallery]);

  const setAvatarUrl = (url: string | null) => {
    setAvatarUrlState(url);
  };

  const addPhotos = (newItems: Omit<GalleryPhoto, 'id' | 'dateAdded'>[]) => {
    const formatted: GalleryPhoto[] = newItems.map((item, idx) => ({
      ...item,
      id: `photo-${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 6)}`,
      dateAdded: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    }));

    setGallery(prev => [...formatted, ...prev]);
  };

  const removePhoto = (id: string) => {
    setGallery(prev => {
      const target = prev.find(p => p.id === id);
      if (target?.url === avatarUrl) {
        setAvatarUrlState(null);
      }
      return prev.filter(p => p.id !== id);
    });
  };

  const setAsAvatar = (id: string) => {
    const photo = gallery.find(p => p.id === id);
    if (photo) {
      setAvatarUrlState(photo.url);
      setGallery(prev =>
        prev.map(p => ({
          ...p,
          isAvatar: p.id === id
        }))
      );
    }
  };

  const clearAvatar = () => {
    setAvatarUrlState(null);
    setGallery(prev =>
      prev.map(p => ({
        ...p,
        isAvatar: false
      }))
    );
  };

  const resetGallery = () => {
    setGallery(DEFAULT_GALLERY_PHOTOS);
    setAvatarUrlState(null);
  };

  return (
    <PhotoContext.Provider
      value={{
        avatarUrl,
        setAvatarUrl,
        gallery,
        addPhotos,
        removePhoto,
        setAsAvatar,
        clearAvatar,
        resetGallery
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotoContext = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotoContext must be used within a PhotoProvider');
  }
  return context;
};
