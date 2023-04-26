import './App.css';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import RootLayout from './components/Layout/RootLayout';
import NewsPage, { newsLoader } from './pages/NewsPage';
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store, { AppDispatch, TRootState } from './store/store';
import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import pl from "i18n-iso-countries/langs/pl.json";
import { DEFAULT_COUNTRY_ISO } from './lib/constant';
import ErrorPage from './pages/ErrorPage';

countries.registerLocale(en);
countries.registerLocale(pl);

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                loader: async () => redirect(`/country/${DEFAULT_COUNTRY_ISO}`),
            },
            {
                path: "country/:countryISO",
                element: <NewsPage />,
                loader: newsLoader,
                errorElement: <ErrorPage />
            }
        ]
    }
]);

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
