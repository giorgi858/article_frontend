import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
    return (
        <div className="App">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout