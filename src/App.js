import { Navigate, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Products from './components/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './components/ProductDetail';

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Routes>
                    <Route path="/" exact element={<Navigate to="/welcome" />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:productId" element={<ProductDetail />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
