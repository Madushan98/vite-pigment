import React from 'react';
import SideNavigationDrawer from './SideNavigationDrawer';
import AppBarWithDialog from './AppBarWithDialog';

const App: React.FC = () => {
  return (
    <div>
      <AppBarWithDialog />
      <SideNavigationDrawer />
      <main style={{ padding: '16px' }}>
        <h1>Welcome to the App!</h1>
        <p>Content goes here...</p>
      </main>
    </div>
  );
};

export default App;
