import React from 'react';
import { Spinner } from '@heroui/react';

const AppLoading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="text-2xl font-semibold text-red-800">Loading Libris...</div>
      <Spinner color="warning" />
      <p className="text-sm text-zinc-500 max-w-md">
        Preparing the page. This may take a moment while the app loads.
      </p>
    </div>
  );
};

export default AppLoading;
