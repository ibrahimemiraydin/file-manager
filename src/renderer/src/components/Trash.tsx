import React from 'react';
import { FiTrash2, FiClock, FiRotateCw, FiFolder, FiFile, FiX, FiMoreVertical } from 'react-icons/fi';

const Trash: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-zinc-900">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-zinc-700 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
            <FiTrash2 className="text-red-600 dark:text-red-400 text-xl" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-zinc-100">Çöp Kutusu</h2>
            <p className="text-sm text-gray-500 dark:text-zinc-400">Silinen öğelerin listesi</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Çöp kutusunda ara..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-gray-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <FiClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="px-6 py-3 flex items-center justify-between bg-gray-50 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium">
            <FiRotateCw size={16} />
            <span>Geri Yükle</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-lg text-sm">
            <FiX size={16} />
            <span>Tamamen Sil</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-lg text-sm">
            <FiTrash2 size={16} />
            <span>Hepsini Boşalt</span>
          </button>
        </div>
        <div className="text-sm text-gray-500 dark:text-zinc-400">
          12 öğe • 3 gün sonra otomatik silinecek
        </div>
      </div>

      {/* Trash Content */}
      <div className="flex-1 overflow-y-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-zinc-800 text-left text-sm text-gray-500 dark:text-zinc-400">
            <tr>
              <th className="px-6 py-3 font-medium">İsim</th>
              <th className="px-6 py-3 font-medium">Orijinal Konum</th>
              <th className="px-6 py-3 font-medium">Boyut</th>
              <th className="px-6 py-3 font-medium">Silinme Tarihi</th>
              <th className="px-6 py-3 font-medium">Kalan Süre</th>
              <th className="px-6 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
            {[
              { 
                name: "Proje Raporu.pdf", 
                type: "file", 
                originalPath: "/Documents/Work", 
                size: "2.4 MB", 
                deletedDate: "2 saat önce",
                remaining: "29 gün"
              },
              { 
                name: "Resimler", 
                type: "folder", 
                originalPath: "/Pictures", 
                size: "156 MB", 
                deletedDate: "1 gün önce",
                remaining: "29 gün"
              },
              { 
                name: "Sunum.pptx", 
                type: "file", 
                originalPath: "/Documents", 
                size: "8.1 MB", 
                deletedDate: "3 gün önce",
                remaining: "27 gün"
              },
              { 
                name: "Müzikler", 
                type: "folder", 
                originalPath: "/Media", 
                size: "342 MB", 
                deletedDate: "5 gün önce",
                remaining: "25 gün"
              },
              { 
                name: "Backup.zip", 
                type: "file", 
                originalPath: "/Downloads", 
                size: "1.2 GB", 
                deletedDate: "6 gün önce",
                remaining: "24 gün"
              },
              { 
                name: "Sözleşme.docx", 
                type: "file", 
                originalPath: "/Documents/Legal", 
                size: "0.8 MB", 
                deletedDate: "1 hafta önce",
                remaining: "23 gün"
              }
            ].map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    {item.type === "folder" ? (
                      <FiFolder className="text-blue-500" />
                    ) : (
                      <FiFile className="text-gray-500 dark:text-zinc-400" />
                    )}
                    <span className="text-gray-900 dark:text-zinc-100">{item.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-zinc-400">{item.originalPath}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-zinc-400">{item.size}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-zinc-400">{item.deletedDate}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-zinc-400">{item.remaining}</td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-md">
                    <FiMoreVertical className="text-gray-500 dark:text-zinc-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State (for when trash is empty) */}
      {/* <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <div className="w-24 h-24 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4">
          <FiTrash2 className="text-gray-400 text-3xl" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-zinc-100 mb-1">Çöp Kutusu Boş</h3>
        <p className="text-gray-500 dark:text-zinc-400 max-w-md">
          Silinen dosya ve klasörler burada görünecektir. Öğeler otomatik olarak 30 gün sonra kalıcı olarak silinecektir.
        </p>
      </div> */}

      {/* Status Bar */}
      <div className="px-6 py-2 text-sm flex items-center justify-between border-t border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400">
        <div>6 öğe • Toplam 1.6 GB</div>
        <div>Son temizlik: 14 gün önce</div>
      </div>
    </div>
  );
};

export default Trash;