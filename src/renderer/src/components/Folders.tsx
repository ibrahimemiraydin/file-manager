import React from 'react';
import { FiFolder, FiMoreVertical, FiPlus, FiStar, FiUpload, FiShare2, FiTrash2, FiGrid, FiList, FiSearch } from 'react-icons/fi';

const Folders: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-zinc-900">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-zinc-700 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-zinc-100 flex items-center">
          <FiFolder className="mr-2 text-blue-500" />
          Klasörler
        </h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Klasör ara..."
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

      {/* Action Bar */}
      <div className="px-6 py-3 flex items-center justify-between bg-gray-50 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium">
            <FiPlus size={16} />
            <span>Yeni Klasör</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-lg text-sm">
            <FiUpload size={16} />
            <span>Yükle</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-lg text-sm">
            <FiShare2 size={16} />
            <span>Paylaş</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-lg text-sm">
            <FiTrash2 size={16} />
            <span>Sil</span>
          </button>
        </div>
        <div className="text-sm text-gray-500 dark:text-zinc-400">
          8 klasör • 560 MB kullanılıyor
        </div>
      </div>

      {/* Path Breadcrumb */}
      <div className="px-6 py-3 text-sm flex items-center text-gray-600 dark:text-zinc-400 border-b border-gray-200 dark:border-zinc-700">
        <span className="hover:text-blue-600 dark:hover:text-blue-500 cursor-pointer">Ana Dizin</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-zinc-200 font-medium">Klasörlerim</span>
      </div>

      {/* Folders Grid */}
      <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {/* Favori Klasör */}
        <div className="group relative p-4 rounded-xl border-2 border-blue-200 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-900/10 hover:shadow-md transition-all cursor-pointer">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-2">
              <FiFolder className="text-blue-600 dark:text-blue-400 text-2xl" />
            </div>
            <span className="text-sm font-medium text-center text-gray-900 dark:text-zinc-100 truncate w-full">Önemli Projeler</span>
            <span className="text-xs text-blue-600 dark:text-blue-400">32 dosya</span>
          </div>
          <div className="absolute top-2 right-2">
            <FiStar className="text-yellow-500 fill-yellow-500" />
          </div>
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-1 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-md">
              <FiMoreVertical className="text-blue-600 dark:text-blue-400" />
            </button>
          </div>
        </div>

        {/* Normal Klasörler */}
        {[
          { name: "Çalışma Dosyaları", count: 24, color: "bg-green-100 dark:bg-green-900/10", iconColor: "text-green-600 dark:text-green-400" },
          { name: "Kişisel", count: 18, color: "bg-purple-100 dark:bg-purple-900/10", iconColor: "text-purple-600 dark:text-purple-400" },
          { name: "Resimler", count: 156, color: "bg-pink-100 dark:bg-pink-900/10", iconColor: "text-pink-600 dark:text-pink-400" },
          { name: "Müzikler", count: 89, color: "bg-red-100 dark:bg-red-900/10", iconColor: "text-red-600 dark:text-red-400" },
          { name: "Videolar", count: 23, color: "bg-yellow-100 dark:bg-yellow-900/10", iconColor: "text-yellow-600 dark:text-yellow-400" },
          { name: "Dökümanlar", count: 42, color: "bg-indigo-100 dark:bg-indigo-900/10", iconColor: "text-indigo-600 dark:text-indigo-400" },
          { name: "Yedekler", count: 7, color: "bg-gray-100 dark:bg-zinc-800", iconColor: "text-gray-600 dark:text-zinc-400" },
          { name: "Paylaşılanlar", count: 15, color: "bg-teal-100 dark:bg-teal-900/10", iconColor: "text-teal-600 dark:text-teal-400" }
        ].map((folder, index) => (
          <div key={index} className="group relative p-4 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 ${folder.color} rounded-lg flex items-center justify-center mb-2`}>
                <FiFolder className={`${folder.iconColor} text-2xl`} />
              </div>
              <span className="text-sm font-medium text-center text-gray-900 dark:text-zinc-100 truncate w-full">{folder.name}</span>
              <span className="text-xs text-gray-500 dark:text-zinc-400">{folder.count} dosya</span>
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-md">
                <FiMoreVertical className="text-gray-600 dark:text-zinc-300" />
              </button>
            </div>
          </div>
        ))}

        {/* Yeni Klasör Ekle */}
        <div className="p-4 rounded-xl border-2 border-dashed border-gray-300 dark:border-zinc-600 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all cursor-pointer flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-gray-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-2">
            <FiPlus className="text-gray-400 text-2xl" />
          </div>
          <span className="text-sm font-medium text-center text-gray-500 dark:text-zinc-400">Yeni Klasör</span>
        </div>
      </div>

      {/* Status Bar */}
      <div className="px-6 py-2 text-sm flex items-center justify-between border-t border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400">
        <div>3 öğe seçildi</div>
        <div className="flex items-center space-x-4">
          <span>Grid görünümü</span>
          <span>%100 yakınlaştırıldı</span>
        </div>
      </div>
    </div>
  );
};

export default Folders;