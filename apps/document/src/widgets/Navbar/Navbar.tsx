import { Link } from 'react-router'

export const Navbar = () => (
    <ul>
        <li>
            <Link to="/user">to user app</Link>
        </li>
        <li>
            <Link to="./">main</Link>
        </li>
    </ul>
)