import React from 'react';
import ApolloProviderWrapper from './apollo';
import Items from './components/Items';

const App = () => (
  <ApolloProviderWrapper>
    <div className="App">
      <header className="App-header">
        <h1>GraphQL App</h1>
      </header>
      <Items />
    </div>
  </ApolloProviderWrapper>
);

export default App;
