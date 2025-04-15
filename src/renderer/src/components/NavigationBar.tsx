import React from 'react';
import { 
  FiPlus, 
  FiFile, 
  FiSettings, 
  FiHelpCircle, 
  FiSearch,
  FiMenu,
  FiGrid,
  FiBell,
  FiMessageSquare
} from 'react-icons/fi';

const NavigationBar: React.FC = () => {
  return (
    <div className="h-14 bg-white dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-gray-200 dark:border-zinc-700">
      {/* Sol Taraf */}
      <div className="flex items-center space-x-2">
        {/* Logo/Menü */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
            <FiMenu className="text-lg text-gray-600 dark:text-zinc-300" />
          </button>
        </div>

        {/* Ana Menü Butonları */}
        <div className="hidden md:flex items-center space-x-1">
          <button className="flex items-center px-3 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors text-sm font-medium">
            <FiPlus className="mr-2" />
            Yeni
          </button>
          <button className="flex items-center px-3 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors text-sm font-medium">
            <FiFile className="mr-2" />
            Dosya
          </button>
          <button className="flex items-center px-3 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors text-sm font-medium">
            <FiGrid className="mr-2" />
            Görünüm
          </button>
          <button className="flex items-center px-3 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors text-sm font-medium">
            <FiSettings className="mr-2" />
            Ayarlar
          </button>
        </div>
      </div>

      {/* Arama Çubuğu (Orta Kısım) */}
      <div className="hidden lg:flex flex-1 max-w-xl mx-4">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-gray-50 dark:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-gray-500 dark:placeholder-zinc-400"
            placeholder="Dosya veya klasör ara..."
          />
        </div>
      </div>

      {/* Sağ Taraf */}
      <div className="flex items-center space-x-2">
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors relative">
          <FiMessageSquare className="text-gray-600 dark:text-zinc-300" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors relative">
          <FiBell className="text-gray-600 dark:text-zinc-300" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
          <FiHelpCircle className="text-gray-600 dark:text-zinc-300" />
        </button>
        
        {/* Kullanıcı Avatarı */}
        <div className="ml-2 flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-medium">
            KU
          </div>
          <span className="hidden md:inline text-sm font-medium">Kullanıcı</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;