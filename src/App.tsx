import './App.css';
import { createBrowserRouter, createRoutesFromElements, redirect, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/Layout/RootLayout';
import { HomePage } from './pages/HomePage';
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store, { AppDispatch, TRootState } from './store/store';
import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import pl from "i18n-iso-countries/langs/pl.json";
import { DEFAULT_COUNTRY_ISO } from './lib/constants';

countries.registerLocale(en);
countries.registerLocale(pl);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index loader={() => redirect(`/country/${DEFAULT_COUNTRY_ISO}`)} element={null} />
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

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export default App;
