import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MenuContextProvider } from './contexts/menu';
import { AdminContextProvider } from './contexts/admin';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AdminContextProvider>
            <MenuContextProvider>
                    <App />
            </MenuContextProvider>
        </AdminContextProvider>
    </BrowserRouter>
);