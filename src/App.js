import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Products from './components/Products';
import MainHeader from './components/MainHeader';

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Routes>
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
