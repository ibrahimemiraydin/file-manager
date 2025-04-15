import React from 'react';
import { FiFile, FiFolder, FiMoreVertical, FiDownload, FiTrash2, FiShare2, FiStar, FiGrid, FiList, FiSearch, FiPlus } from 'react-icons/fi';

const Files: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-zinc-900">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-zinc-700 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-zinc-100">Dosyalar</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Dosya ara..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-gray-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <div className="flex bg-gray-100 dark:bg-zinc-800 p-1 rounded-lg">
            <button className="p-2 rounded-md bg-white dark:bg-zinc-700 shadow-sm">
              <FiGrid className="text-gray-700 dark:text-zinc-300" />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-700">
              <FiList className="text-gray-500 dark:text-zinc-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Path Breadcrumb */}
      <div className="px-6 py-3 text-sm flex items-center text-gray-600 dark:text-zinc-400 border-b border-gray-200 dark:border-zinc-700">
        <span className="hover:text-blue-600 dark:hover:text-blue-500 cursor-pointer">Ana Dizin</span>
        <span className="mx-2">/</span>
        <span className="hover:text-blue-600 dark:hover:text-blue-500 cursor-pointer">Kullanıcı</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-zinc-200 font-medium">Dosyalar</span>
      </div>

      {/* Action Bar */}
      <div className="px-6 py-3 flex items-center justify-between bg-gray-50 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium">
            <FiPlus size={16} />
            <span>Yeni</span>
          </button>
          <button className="flex dark:text-white items-center space-x-2 px-3 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-lg text-sm">
            <FiDownload size={16} />
            <span>İndir</span>
          </button>
          <button className="flex dark:text-white items-center space-x-2 px-3 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-lg text-sm">
            <FiShare2 size={16} />
            <span>Paylaş</span>
          </button>
          <button className="flex dark:text-white items-center space-x-2 px-3 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-lg text-sm">
            <FiTrash2 size={16} />
            <span>Sil</span>
          </button>
        </div>
        <div className="text-sm text-gray-500 dark:text-zinc-400">
          24 öğe • 1.2 GB kullanılıyor
        </div>
      </div>

      {/* Files Grid */}
      <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {/* Folder Example */}
        <div className="group relative p-4 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-2">
              <FiFolder className="text-blue-600 dark:text-blue-400 text-2xl" />
            </div>
            <span className="text-sm font-medium text-center text-gray-900 dark:text-zinc-100 truncate w-full">Projeler</span>
            <span className="text-xs text-gray-500 dark:text-zinc-400">15 dosya</span>
          </div>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-md">
              <FiMoreVertical className="text-gray-600 dark:text-zinc-300" />
            </button>
          </div>
        </div>

        {/* File Example - PDF */}
        <div className="group relative p-4 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-2">
              <FiFile className="text-red-600 dark:text-red-400 text-2xl" />
            </div>
            <span className="text-sm font-medium text-center text-gray-900 dark:text-zinc-100 truncate w-full">Rapor.pdf</span>
            <span className="text-xs text-gray-500 dark:text-zinc-400">2.4 MB</span>
          </div>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-md">
              <FiStar className="text-yellow-500" />
            </button>
          </div>
        </div>

        {/* File Example - Image */}
        <div className="group relative p-4 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-2">
              <FiFile className="text-green-600 dark:text-green-400 text-2xl" />
            </div>
            <span className="text-sm font-medium text-center text-gray-900 dark:text-zinc-100 truncate w-full">Resim.jpg</span>
            <span className="text-xs text-gray-500 dark:text-zinc-400">3.1 MB</span>
          </div>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-md">
              <FiMoreVertical className="text-gray-600 dark:text-zinc-300" />
            </button>
          </div>
        </div>

        {/* File Example - Document */}
        <div className="group relative p-4 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-2">
              <FiFile className="text-blue-600 dark:text-blue-400 text-2xl" />
            </div>
            <span className="text-sm font-medium text-center text-gray-900 dark:text-zinc-100 truncate w-full">Belge.docx</span>
            <span className="text-xs text-gray-500 dark:text-zinc-400">1.7 MB</span>
          </div>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-md">
              <FiMoreVertical className="text-gray-600 dark:text-zinc-300" />
            </button>
          </div>
        </div>

        {/* File Example - Video */}
        <div className="group relative p-4 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-2">
              <FiFile className="text-purple-600 dark:text-purple-400 text-2xl" />
            </div>
            <span className="text-sm font-medium text-center text-gray-900 dark:text-zinc-100 truncate w-full">Video.mp4</span>
            <span className="text-xs text-gray-500 dark:text-zinc-400">45.2 MB</span>
          </div>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-md">
              <FiMoreVertical className="text-gray-600 dark:text-zinc-300" />
            </button>
          </div>
        </div>

        {/* More files... */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="group relative p-4 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-2">
                <FiFile className="text-gray-600 dark:text-zinc-400 text-2xl" />
              </div>
              <span className="text-sm font-medium text-center text-gray-900 dark:text-zinc-100 truncate w-full">Dosya_{i + 1}.txt</span>
              <span className="text-xs text-gray-500 dark:text-zinc-400">{(Math.random() * 5).toFixed(1)} MB</span>
            </div>
          </div>
        ))}
      </div>

      {/* Status Bar */}
      <div className="px-6 py-2 text-sm flex items-center justify-between border-t border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400">
        <div>5 öğe seçildi</div>
        <div className="flex items-center space-x-4">
          <span>Grid görünümü</span>
          <span>%25 yakınlaştırıldı</span>
        </div>
      </div>
    </div>
  );
};

export default Files;