import React from 'react';
import { FiDownload, FiFile, FiFolder, FiTrash2, FiStar, FiMoreVertical, FiSearch, FiHardDrive } from 'react-icons/fi';

const RecentDownloads: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-zinc-900">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-zinc-700 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <FiDownload className="text-blue-600 dark:text-blue-400 text-xl" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-zinc-100">Son İndirilenler</h2>
            <p className="text-sm text-gray-500 dark:text-zinc-400">Son indirdiğiniz dosyaların listesi</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="İndirilenlerde ara..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-gray-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="px-6 py-3 flex items-center justify-between bg-gray-50 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium">
            <FiDownload size={16} />
            <span>Yeniden İndir</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-lg text-sm">
            <FiTrash2 size={16} />
            <span>Kaldır</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-lg text-sm">
            <FiHardDrive size={16} />
            <span>Konumunu Aç</span>
          </button>
        </div>
        <div className="text-sm text-gray-500 dark:text-zinc-400">
          15 öğe • Toplam 2.8 GB
        </div>
      </div>

      {/* Downloads Content */}
      <div className="flex-1 overflow-y-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-zinc-800 text-left text-sm text-gray-500 dark:text-zinc-400">
            <tr>
              <th className="px-6 py-3 font-medium">Dosya Adı</th>
              <th className="px-6 py-3 font-medium">Kaynak</th>
              <th className="px-6 py-3 font-medium">Boyut</th>
              <th className="px-6 py-3 font-medium">İndirilme Tarihi</th>
              <th className="px-6 py-3 font-medium">Durum</th>
              <th className="px-6 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
            {[
              { 
                name: "ProjeDosyalari.zip", 
                type: "file", 
                source: "https://example.com", 
                size: "1.2 GB", 
                date: "Bugün, 14:30",
                status: "Tamamlandı",
                starred: true
              },
              { 
                name: "Sunum.pptx", 
                type: "file", 
                source: "E-posta eki", 
                size: "45.2 MB", 
                date: "Bugün, 11:15",
                status: "Tamamlandı",
                starred: false
              },
              { 
                name: "Resimler", 
                type: "folder", 
                source: "Bulut Depolama", 
                size: "356 MB", 
                date: "Dün, 18:42",
                status: "Tamamlandı",
                starred: true
              },
              { 
                name: "Setup.exe", 
                type: "file", 
                source: "Yazılım Websitesi", 
                size: "78.5 MB", 
                date: "Dün, 15:10",
                status: "Tamamlandı",
                starred: false
              },
              { 
                name: "MüzikKoleksiyonu", 
                type: "folder", 
                source: "Paylaşılan Bağlantı", 
                size: "2.1 GB", 
                date: "2 gün önce",
                status: "Tamamlandı",
                starred: false
              },
              { 
                name: "Doküman.pdf", 
                type: "file", 
                source: "İş Portalı", 
                size: "3.4 MB", 
                date: "3 gün önce",
                status: "Tamamlandı",
                starred: false
              }
            ].map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    {item.starred && <FiStar className="text-yellow-500 fill-yellow-500 flex-shrink-0" />}
                    {item.type === "folder" ? (
                      <FiFolder className="text-blue-500 flex-shrink-0" />
                    ) : (
                      <FiFile className="text-gray-500 dark:text-zinc-400 flex-shrink-0" />
                    )}
                    <span className="text-gray-900 dark:text-zinc-100 truncate max-w-xs">{item.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-zinc-400 truncate max-w-xs">{item.source}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-zinc-400">{item.size}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-zinc-400">{item.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === "Tamamlandı" 
                      ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400"
                      : "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400"
                  }`}>
                    {item.status}
                  </span>
                </td>
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

      {/* Empty State (for when no downloads) */}
      {/* <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <div className="w-24 h-24 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4">
          <FiDownload className="text-gray-400 text-3xl" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-zinc-100 mb-1">Henüz indirme yok</h3>
        <p className="text-gray-500 dark:text-zinc-400 max-w-md">
          İndirdiğiniz dosyalar burada görünecektir. Son 30 gün içindeki indirmeleriniz saklanır.
        </p>
      </div> */}

      {/* Status Bar */}
      <div className="px-6 py-2 text-sm flex items-center justify-between border-t border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400">
        <div>Son güncelleme: Bugün, 15:42</div>
        <div className="flex items-center space-x-4">
          <span>30 gün boyunca saklanır</span>
          <span>Diskte 12.4 GB boş alan</span>
        </div>
      </div>
    </div>
  );
};

export default RecentDownloads;