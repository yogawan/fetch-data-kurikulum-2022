import { Link } from "react-router-dom";

const NavigationMolecules = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/1'}>Semester 1</Link>
                </li>
                <li>
                    <Link to={'/2'}>Semester 2</Link>
                </li>
                <li>
                    <Link to={'/3'}>Semester 3</Link>
                </li>
                <li>
                    <Link to={'/4'}>Semester 4</Link>
                </li>
                <li>
                    <Link to={'/'}>Semester 5</Link>
                </li>
                <li>
                    <Link to={'/6'}>Semester 6</Link>
                </li>
                <li>
                    <Link to={'/7'}>Semester 7</Link>
                </li>
                <li>
                    <Link to={'/8'}>Semester 8</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationMolecules;
