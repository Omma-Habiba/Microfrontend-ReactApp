import React from 'react';
const SharedFooter = React.lazy(() => import('shared_component/Footer'));
const SharedHeader = React.lazy(() => import('shared_component/Header'));
import TitleHost from './TitleHost';
// import FetchData from './components/pokemonData';
import MockDataComponent from './MockDataComponent';

const App = () => (
  <div>
    <React.Suspense fallback="looding header">
      <SharedHeader />
    </React.Suspense>
    <h1>Basic Host-Remote</h1>
    <TitleHost title="Host Specific Component" />
    <MockDataComponent />
    <React.Suspense fallback="looding footer">
      <SharedFooter />
    </React.Suspense>
  </div>
);

export default App;
