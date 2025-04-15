import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-white dark:bg-zinc-800 p-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-zinc-100">Ayarlar</h2>
      <p className="text-gray-600 dark:text-zinc-300">Burada ayarlarınızı düzenleyebilirsiniz.</p>
    </div>
  );
};

export default Settings;