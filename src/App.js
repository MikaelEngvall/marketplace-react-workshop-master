import React from 'react';
import Header from './components/header/Header';
import { AdsList } from './components/ads/AdsList';
import SearchAd from './components/ads/SearchAd';


const App = () => {
    return (
        <div>
            <Header />
            <SearchAd />
            <AdsList />
        </div>
    );
};

export default App;
