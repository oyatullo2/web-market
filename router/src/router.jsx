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
            <Route path="/home" element={<Home />} />
            <Route path="/kiyimlar" element={<Kiyimlar />} />
            <Route path="/kitoblar" element={<Kitoblar />} />
            <Route path="/elektronika" element={<Elektronika />} />
            <Route path="/mexanika" element={<Mexanik />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/o'quv" element={<Oquv />} />
            <Route path='/card' element={<Card/>}/>
        </Routes>
    );
}
