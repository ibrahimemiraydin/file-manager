import React from 'react';

const RecentDownloads: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-white dark:bg-zinc-800 p-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-zinc-100">Son İndirilenler</h2>
      <p className="text-gray-600 dark:text-zinc-300">Burada son indirilen dosyalarınızı göreceksiniz.</p>
    </div>
  );
};

export default RecentDownloads;