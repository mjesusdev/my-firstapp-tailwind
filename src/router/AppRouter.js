import { Routes, Route } from 'react-router-dom';

import { CardsScreen } from '../components/cards/CardsScreen';
import { HomeScreen } from '../components/home/HomeScreen';

export const AppRouter = () => {
    return (            
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cards" element={<CardsScreen />} />
        </Routes>
    )
}