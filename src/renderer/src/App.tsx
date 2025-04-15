import React, { JSX, useState } from 'react';
import Sidebar from './components/Sidebar';
import NavigationBar from './components/NavigationBar';
import Chat from './components/Chat';
import Folders from './components/Folders';
import Files from './components/Files';
import Shared from './components/Shared';
import CloudStorage from './components/CloudStorage';
import Favorites from './components/Favorites';
import RecentDownloads from './components/RecentDownloads';
import Trash from './components/Trash';
import Settings from './components/Settings';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('Chat');

  const renderContent = (): JSX.Element => {
    switch (activeSection) {
      case 'Chat':
        return <Chat />;
      case 'Klasörler':
        return <Folders />;
      case 'Dosyalar':
        return <Files />;
      case 'Paylaşılanlar':
        return <Shared />;
      case 'Bulut Depolama':
        return <CloudStorage />;
      case 'Favoriler':
        return <Favorites />;
      case 'Son İndirilenler':
        return <RecentDownloads />;
      case 'Çöp Kutusu':
        return <Trash />;
      case 'Ayarlar':
        return <Settings />;
      default:
        return <Chat />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-zinc-900">
      <NavigationBar />
      <div className="flex flex-1 pt-14">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-1">{renderContent()}</main>
      </div>
    </div>
  );
};

export default App;