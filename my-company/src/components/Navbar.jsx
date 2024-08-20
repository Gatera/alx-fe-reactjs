import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav style={{ backgroundColor: '#999', display: 'block', justifyContent: 'left' }}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;