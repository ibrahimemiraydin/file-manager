import React from 'react';
import { FiSend, FiPaperclip, FiUser, FiFile, FiFolder, FiTrash2, FiCheck, FiAlertCircle } from 'react-icons/fi';

const Chat: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-white dark:bg-zinc-800">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200 dark:border-zinc-700 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <FiUser className="text-blue-600 dark:text-blue-300 text-lg" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-zinc-100">Dosya Yöneticisi Sohbeti</h3>
            <p className="text-xs text-gray-500 dark:text-zinc-400">Komutlarınızı buradan girebilirsiniz</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
            <FiTrash2 className="text-gray-600 dark:text-zinc-300" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {/* System Message */}
        <div className="flex justify-start">
          <div className="max-w-xs md:max-w-md bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 p-3 rounded-xl rounded-bl-none shadow-sm">
            <div className="flex items-start space-x-2">
              <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Sistem hazır</p>
                <p className="text-sm">Dosya işlemleri için komut girebilirsiniz</p>
              </div>
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-300 mt-1 text-right">10:30</div>
          </div>
        </div>

        {/* File Selection Message */}
        <div className="flex justify-end">
          <div className="max-w-xs md:max-w-md bg-blue-600 text-white p-3 rounded-xl rounded-br-none shadow-sm">
            <div className="flex items-start space-x-2">
              <FiFile className="text-blue-200 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">/home/user/projects/report.pdf</p>
                <p className="text-sm text-blue-100">2.4 MB • PDF</p>
              </div>
            </div>
            <div className="text-xs text-blue-200 mt-1 text-right">10:32</div>
          </div>
        </div>

        {/* Success Response */}
        <div className="flex justify-start">
          <div className="max-w-xs md:max-w-md bg-white dark:bg-zinc-700 border border-gray-200 dark:border-zinc-600 p-3 rounded-xl rounded-bl-none shadow-sm">
            <div className="flex items-start space-x-2">
              <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900 dark:text-zinc-100">Dosya seçildi</p>
                <p className="text-sm text-gray-600 dark:text-zinc-300">report.pdf başarıyla seçildi</p>
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-zinc-400 mt-1 text-right">10:32</div>
          </div>
        </div>

        {/* Error Message */}
        <div className="flex justify-end">
          <div className="max-w-xs md:max-w-md bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 p-3 rounded-xl rounded-br-none shadow-sm">
            <div className="flex items-start space-x-2">
              <FiAlertCircle className="text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">rm -rf /important</p>
                <p className="text-sm">Bu işlem için yetkiniz yok</p>
              </div>
            </div>
            <div className="text-xs text-red-600 dark:text-red-300 mt-1 text-right">10:33</div>
          </div>
        </div>

        {/* Folder Operation */}
        <div className="flex justify-start">
          <div className="max-w-xs md:max-w-md bg-white dark:bg-zinc-700 border border-gray-200 dark:border-zinc-600 p-3 rounded-xl rounded-bl-none shadow-sm">
            <div className="flex items-start space-x-2">
              <FiFolder className="text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900 dark:text-zinc-100">/home/user/documents</p>
                <p className="text-sm text-gray-600 dark:text-zinc-300">Klasör başarıyla oluşturuldu</p>
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-zinc-400 mt-1 text-right">10:34</div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800">
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors text-gray-600 dark:text-zinc-300">
            <FiPaperclip className="text-lg" />
          </button>
          <input
            type="text"
            placeholder="Komut yazın veya dosya sürükleyin..."
            className="flex-1 p-3 rounded-xl border border-gray-200 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-700 text-gray-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-400 shadow-sm"
          />
          <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-sm transition-colors">
            <FiSend className="text-lg" />
          </button>
        </div>
        <div className="mt-2 text-xs text-gray-500 dark:text-zinc-400 px-1">
          Örnek komutlar: <span className="font-mono bg-gray-100 dark:bg-zinc-700 px-1.5 py-0.5 rounded">mv dosya.txt /yeni/konum</span>
        </div>
      </div>
    </div>
  );
};

export default Chat;