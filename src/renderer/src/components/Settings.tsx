import React, { useState } from 'react';
import { FiSettings, FiMoon, FiSun, FiLock, FiUser, FiHardDrive, FiEye, FiEyeOff } from 'react-icons/fi';
import { FaPalette } from "react-icons/fa";

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState('turkish');
  const [storageUsage] = useState(65);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-zinc-700">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
            <FiSettings className="text-blue-600 dark:text-blue-400 text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Ayarlar</h1>
            <p className="text-gray-500 dark:text-zinc-400">Uygulama tercihlerinizi yönetin</p>
          </div>
        </div>
      </div>

      {/* Settings Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Genel Ayarlar */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 overflow-hidden">
            <div className="p-5 border-b border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-700/30">
              <h2 className="font-semibold flex items-center">
                <FiUser className="mr-3 text-blue-500" />
                Genel Ayarlar
              </h2>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-zinc-700">
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Koyu Tema</h3>
                  <p className="text-sm text-gray-500 dark:text-zinc-400">Arayüzün görünümünü değiştirir</p>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${darkMode ? 'bg-blue-600' : 'bg-gray-200'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                  {darkMode ? (
                    <FiMoon className="absolute left-1 text-white text-xs" />
                  ) : (
                    <FiSun className="absolute right-1 text-gray-500 text-xs" />
                  )}
                </button>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Bildirimler</h3>
                  <p className="text-sm text-gray-500 dark:text-zinc-400">Sistem bildirimlerini aç/kapat</p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications ? 'bg-blue-600' : 'bg-gray-200'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </button>
              </div>
              <div className="p-5">
                <h3 className="font-medium mb-2">Dil Tercihi</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setLanguage('turkish')}
                    className={`p-3 border rounded-lg text-left transition-colors ${language === 'turkish' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700'}`}
                  >
                    <span className="block font-medium">Türkçe</span>
                    <span className="text-sm text-gray-500 dark:text-zinc-400">Varsayılan</span>
                  </button>
                  <button
                    onClick={() => setLanguage('english')}
                    className={`p-3 border rounded-lg text-left transition-colors ${language === 'english' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700'}`}
                  >
                    <span className="block font-medium">English</span>
                    <span className="text-sm text-gray-500 dark:text-zinc-400">English</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Güvenlik Ayarları */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 overflow-hidden">
            <div className="p-5 border-b border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-700/30">
              <h2 className="font-semibold flex items-center">
                <FiLock className="mr-3 text-blue-500" />
                Güvenlik
              </h2>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-zinc-700">
              <div className="p-5">
                <h3 className="font-medium mb-2">Şifre Değiştir</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-zinc-400 mb-1">Mevcut Şifre</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full p-3 border border-gray-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Mevcut şifrenizi girin"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-zinc-400"
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-zinc-400 mb-1">Yeni Şifre</label>
                    <input
                      type="password"
                      className="w-full p-3 border border-gray-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Yeni şifrenizi girin"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-zinc-400 mb-1">Şifreyi Onayla</label>
                    <input
                      type="password"
                      className="w-full p-3 border border-gray-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Yeni şifrenizi tekrar girin"
                    />
                  </div>
                  <button className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Şifreyi Güncelle
                  </button>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">İki Adımlı Doğrulama</h3>
                  <p className="text-sm text-gray-500 dark:text-zinc-400">Hesap güvenliğinizi artırın</p>
                </div>
                <button className="px-4 py-2 border border-gray-200 dark:border-zinc-700 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors">
                  Etkinleştir
                </button>
              </div>
            </div>
          </div>

          {/* Depolama Ayarları */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 overflow-hidden">
            <div className="p-5 border-b border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-700/30">
              <h2 className="font-semibold flex items-center">
                <FiHardDrive className="mr-3 text-blue-500" />
                Depolama
              </h2>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Kullanılan Alan</h3>
                <span className="text-sm font-medium">{storageUsage}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${storageUsage}%` }}
                ></div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                <div className="p-3 bg-gray-50 dark:bg-zinc-700/30 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-zinc-400">Kullanılan</div>
                  <div className="font-medium">13.2 GB</div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-zinc-700/30 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-zinc-400">Boş Alan</div>
                  <div className="font-medium">7.1 GB</div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-zinc-700/30 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-zinc-400">Toplam</div>
                  <div className="font-medium">20 GB</div>
                </div>
              </div>
              <button className="mt-4 px-4 py-2 border border-gray-200 dark:border-zinc-700 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors w-full">
                Depolamayı Yönet
              </button>
            </div>
          </div>

          {/* Tema Özelleştirme */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 overflow-hidden">
            <div className="p-5 border-b border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-700/30">
              <h2 className="font-semibold flex items-center">
                <FaPalette className="mr-3 text-blue-500" />
                Tema Özelleştirme
              </h2>
            </div>
            <div className="p-5">
              <h3 className="font-medium mb-3">Renk Şeması</h3>
              <div className="grid grid-cols-5 gap-3">
                {['blue', 'green', 'purple', 'red', 'orange'].map((color) => (
                  <button
                    key={color}
                    className={`h-10 rounded-lg bg-${color}-500 border-2 border-${color}-500 hover:border-${color}-700 transition-colors`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-zinc-700 text-center text-sm text-gray-500 dark:text-zinc-400">
        FileManager v2.4.1 • © 2023 Tüm hakları saklıdır
      </div>
    </div>
  );
};

export default Settings;