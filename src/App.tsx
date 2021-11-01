import React, { useState } from 'react';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import NewTransactionModal from './Components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }
    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }
    return (
        <>
            <GlobalStyle />
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
        </>
    );
}

export default App;
