import React from 'react';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import { GlobalStyle } from './styles/global';
function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Dashboard />
        </>
    );
}

export default App;
