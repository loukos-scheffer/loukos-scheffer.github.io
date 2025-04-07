import {Link} from "react-router-dom";


const navbar = () => {
    return (
        <nav className=" bg-gray-800 bg-opacity-50 z-20 py-5 shadow-lg backdrop-filter backdrop-blur-sm sticky top-0">
            <ul className="flex gap-4 container mx-auto">
                <li>
                    <link to="/" className="text-white font-semibold text-3xl">
                    Louis Scheffer
                    </link>
                </li>
                <li>
                    <Link
                        to="/resume"
                        className="text-white font-semibold"
                    >
                        Resume
                    </Link>
                </li>
                <li>
                    <Link
                        to="/referee"
                        className="text-white font-semibold"
                    >
                        Referee
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default navbar;