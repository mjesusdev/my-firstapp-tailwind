import { Routes, Route } from 'react-router-dom';

import { CardsScreen } from '../components/cards/CardsScreen';
import { HomeScreen } from '../components/home/HomeScreen';

export const AppRouter = () => {
    return (
        <div class="2xl:container 2xl:mx-auto App">
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/cards" element={<CardsScreen />} />
            </Routes>
        </div> 
    )
}