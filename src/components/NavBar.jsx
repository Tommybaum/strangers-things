import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/posts">Posts</Link>
      
            <Link to="/">Login</Link>
            <Link to="/register">Registration</Link>
        </nav>
    );
};

export default Navbar