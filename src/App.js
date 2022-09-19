import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
// import Footer from './components/footer/Footer';

import  Routes  from './routes/Routes';

function App() {
    return (
        <BrowserRouter>
            <Route render={props => (
                <>
                    <Header {...props}/>
                    <Routes/>
                    {/* <Footer/> */}
                </>
            )}/>
        </BrowserRouter>
    );
}

export default App;
