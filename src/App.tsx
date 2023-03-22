import './App.css';
import { createBrowserRouter, createRoutesFromElements, redirect, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/Layout/RootLayout';
import HomePage from './pages/HomePage';

const loader = async () => {
    return redirect("/country/poland");
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index loader={loader} element={null} />
            <Route path="/country/:countrySlug" element={<HomePage />} />
        </Route>
    )
);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
