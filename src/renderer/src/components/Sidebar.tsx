import React from 'react';
import { 
  FiMessageSquare, 
  FiFolder, 
  FiFile, 
  FiSettings, 
  FiStar, 
  FiTrash2,
  FiHardDrive,
  FiCloud,
  FiUsers,
  FiDownload,
  FiPlus 
} from 'react-icons/fi';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-full bg-white dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 flex flex-col border-r border-gray-200 dark:border-zinc-700">
      {/* Logo/Kullanıcı Alanı */}
      <div className="p-4 border-b border-gray-200 dark:border-zinc-700 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <FiHardDrive className="text-white text-xl" />
        </div>
        <div>
          <h2 className="font-semibold">Dosya Yöneticisi</h2>
          <p className="text-xs text-gray-500 dark:text-zinc-400">v2.4.1</p>
        </div>
      </div>

      {/* Hızlı Erişim Butonları */}
      <div className="p-3 border-b border-gray-200 dark:border-zinc-700 flex space-x-2">
        <button className="flex-1 flex items-center justify-center p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
          <FiPlus className="mr-2" />
          <span className="text-sm">Yeni</span>
        </button>
        <button className="flex-1 flex items-center justify-center p-2 bg-gray-50 dark:bg-zinc-700 text-gray-600 dark:text-zinc-300 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-600 transition-colors">
          <FiDownload className="mr-2" />
          <span className="text-sm">İndir</span>
        </button>
      </div>

      {/* Ana Menü */}
      <div className="p-3 space-y-1 flex-1 overflow-y-auto">
        <div className="px-2 py-1 text-xs font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
          Menü
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between py-2 px-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded-lg cursor-pointer">
            <div className="flex items-center">
              <FiMessageSquare className="mr-3" />
              <span>Chat</span>
            </div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <div className="flex items-center py-2 px-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg cursor-pointer transition-colors">
            <FiFolder className="mr-3 text-gray-600 dark:text-zinc-300" />
            <span>Klasörler</span>
          </div>
          <div className="flex items-center py-2 px-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg cursor-pointer transition-colors">
            <FiFile className="mr-3 text-gray-600 dark:text-zinc-300" />
            <span>Dosyalar</span>
          </div>
          <div className="flex items-center py-2 px-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg cursor-pointer transition-colors">
            <FiUsers className="mr-3 text-gray-600 dark:text-zinc-300" />
            <span>Paylaşılanlar</span>
          </div>
          <div className="flex items-center py-2 px-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg cursor-pointer transition-colors">
            <FiCloud className="mr-3 text-gray-600 dark:text-zinc-300" />
            <span>Bulut Depolama</span>
          </div>
        </div>

        <div className="px-2 py-3 text-xs font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
          Kategoriler
        </div>
        <div className="space-y-1">
          <div className="flex items-center py-2 px-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg cursor-pointer transition-colors">
            <FiStar className="mr-3 text-yellow-500" />
            <span>Favoriler</span>
          </div>
          <div className="flex items-center py-2 px-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg cursor-pointer transition-colors">
            <FiDownload className="mr-3 text-green-500" />
            <span>Son İndirilenler</span>
          </div>
          <div className="flex items-center py-2 px-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg cursor-pointer transition-colors">
            <FiTrash2 className="mr-3 text-red-500" />
            <span>Çöp Kutusu</span>
          </div>
        </div>
      </div>

      {/* Alt Kısım - Ayarlar */}
      <div className="p-3 border-t border-gray-200 dark:border-zinc-700">
        <div className="flex items-center py-2 px-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg cursor-pointer transition-colors">
          <FiSettings className="mr-3 text-gray-600 dark:text-zinc-300" />
          <span>Ayarlar</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;