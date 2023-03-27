import './App.css';
import { createBrowserRouter, createRoutesFromElements, redirect, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/Layout/RootLayout';
import { HomePage } from './pages/HomePage';
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store, { AppDispatch, TRootState } from './store/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index loader={() => redirect("/country/pl")} element={null} />
            <Route path="/country/:countryISO" element={<HomePage />} />
        </Route>
    )
);

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </div>
    );
}

export default App;
