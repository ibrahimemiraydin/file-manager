import React from 'react';
import Sidebar from './components/Sidebar';
import NavigationBar from './components/NavigationBar';
import Chat from './components/Chat';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-zinc-900">
      <NavigationBar />
      <div className="flex flex-1 pt-12">
        <Sidebar />
        <main className="flex-1">
          <Chat />
        </main>
      </div>
    </div>
  );
};

export default App;