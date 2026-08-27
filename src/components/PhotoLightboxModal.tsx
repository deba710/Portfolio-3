import React, { useEffect, useState } from 'react';
import { X, UserCheck, Download, Trash2, ZoomIn, ZoomOut, RotateCcw, Calendar, Tag, HardDrive } from 'lucide-react';
import { GalleryPhoto } from '../types/portfolio';
import { usePhotoContext } from '../context/PhotoContext';

interface PhotoLightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({ photo, onClose }) => {
  const { avatarUrl, setAvatarUrl, removePhoto } = usePhotoContext();
  const [zoom, setZoom] = useState<number>(1);

  useEffect(() => {
    setZoom(1);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, onClose]);

  if (!photo) return null;

  const isCurrentAvatar = avatarUrl === photo.url;

  const handleSetAvatar = () => {
    setAvatarUrl(photo.url);
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = photo.url;
    a.download = `${photo.title.toLowerCase().replace(/\s+/g, '-') || 'debangan-photo'}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDelete = () => {
    removePhoto(photo.id);
    onClose();
  };

  return (
    <div
      id="photo-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="photo-lightbox-title"
    >
      {/* Background overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Container */}
      <div className="relative w-full max-w-5xl rounded-3xl bg-[#121212] border border-neutral-800 shadow-2xl shadow-black overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 bg-[#0D0D0D] border-b border-neutral-800">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="p-2 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 shrink-0">
              <Tag className="w-4 h-4" />
            </span>
            <div className="overflow-hidden">
              <h3 id="photo-lightbox-title" className="text-base sm:text-lg font-black text-white uppercase tracking-tight truncate">
                {photo.title}
              </h3>
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mt-0.5">
                <span className="capitalize">{photo.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-neutral-500" />
                  {photo.dateAdded}
                </span>
                {photo.size && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-neutral-500">
                      <HardDrive className="w-3 h-3" />
                      {photo.size}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="close-lightbox-btn"
              type="button"
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Photo Canvas Stage */}
        <div className="relative flex-1 bg-[#080808] flex items-center justify-center p-4 sm:p-8 overflow-hidden min-h-[340px]">
          <div className="relative max-h-[60vh] max-w-full flex items-center justify-center transition-transform duration-200 overflow-auto">
            <img
              id="lightbox-main-image"
              src={photo.url}
              alt={photo.title}
              referrerPolicy="no-referrer"
              className="max-h-[58vh] max-w-full object-contain rounded-2xl shadow-2xl border border-neutral-800/60"
              style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
            />
          </div>

          {/* Zoom floating controls */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121212]/90 border border-neutral-800 backdrop-blur-md shadow-xl text-neutral-300">
            <button
              type="button"
              onClick={() => setZoom(prev => Math.max(0.6, prev - 0.2))}
              className="p-1.5 rounded-full hover:text-white hover:bg-neutral-800 transition-colors"
              title="Zoom out"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold px-2 text-neutral-400">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              onClick={() => setZoom(prev => Math.min(2.5, prev + 0.2))}
              className="p-1.5 rounded-full hover:text-white hover:bg-neutral-800 transition-colors"
              title="Zoom in"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            {zoom !== 1 && (
              <button
                type="button"
                onClick={() => setZoom(1)}
                className="p-1.5 rounded-full hover:text-white hover:bg-neutral-800 transition-colors text-blue-400 ml-1"
                title="Reset zoom"
                aria-label="Reset zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-7 py-4 bg-[#0D0D0D] border-t border-neutral-800">
          <div className="flex items-center gap-2">
            <button
              id="lightbox-set-avatar-btn"
              type="button"
              onClick={handleSetAvatar}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                isCurrentAvatar
                  ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-400'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>{isCurrentAvatar ? 'Active Portfolio Avatar' : 'Set as Avatar'}</span>
            </button>

            <button
              id="lightbox-download-btn"
              type="button"
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="lightbox-delete-btn"
              type="button"
              onClick={handleDelete}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800/40 text-rose-400 hover:text-rose-200 text-xs font-bold uppercase tracking-wider transition-colors"
              title="Delete Photo"
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline">Delete</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
