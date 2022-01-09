import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Products from './components/Products';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </div>
    );
}

export default App;
