import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/home';
import { SignUp } from './Pages/sign-up';
import { Kiyimlar } from './Pages/kiyimlar';
import { Kitoblar } from './Pages/kitoblar';
import { Elektronika } from './Pages/elektronika';
import { Oquv } from './Pages/o\'quv';
import { Sport } from './Pages/sport';
import { Mexanik } from './Pages/mexanika';
import { Card } from './Pages/card';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/home.jsx" element={<Home />} />
            <Route path="/home.jsx/kiyimlar.jsx" element={<Kiyimlar />} />
            <Route path="/home.jsx/kitoblar.jsx" element={<Kitoblar />} />
            <Route path="/home.jsx/elektronika.jsx" element={<Elektronika />} />
            <Route path="/home.jsx/mexanika.jsx" element={<Mexanik />} />
            <Route path="/home.jsx/sport.jsx" element={<Sport />} />
            <Route path="/home.jsx/o'quv.jsx" element={<Oquv />} />
            <Route path='/home.jsx/kiyimlar.jsx/card.jsx' element={<Card/>}/>
        </Routes>
    );
}
