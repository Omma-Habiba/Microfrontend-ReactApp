import React from 'react';
const SharedFooter = React.lazy(() => import('shared_component/Footer'));
const SharedHeader = React.lazy(() => import('shared_component/Header'));
import TitleRemote from './TitleRemote';

const App = () => (
  <div>
    <React.Suspense fallback="Loading header">
      <SharedHeader />
    </React.Suspense>
    <h1>Basic Host-Remote</h1>
    <TitleRemote title="Remote Specific Component" />
    <React.Suspense fallback="Loading footer">
      <SharedFooter />
    </React.Suspense>
  </div>
);

export default App;
