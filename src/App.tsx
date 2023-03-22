import './App.css';
import Footer from './components/footer.tsx/footer';
import Header from './components/header/header';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckSquare, faCoffee, faArrowRight, faArrowLeft);

function App() {
    return (
        <div className="App">
            <Header />
            <Footer />
        </div>
    );
}

export default App;
