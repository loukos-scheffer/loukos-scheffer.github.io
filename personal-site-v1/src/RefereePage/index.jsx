import Navbar from "../components/navbar";
import Footer from "../components/footer";
import profilepic from "../MainPage/img/ProfilePictureCropped2020.jpg"

const RefereePage = () => {
    return (
        <main className="dark:bg-gray-900 min-h-screen">
            <div className="relative">
                <div className="absolute inset-0 container flex">
                    <div className="my-auto pl-1/12 bg-opacity-10 backdrop-filter backdrop-blur-sm ">
                        <h1 className="text-5xl font-bold">Louis Scheffer</h1>
                        <p className="text-xl">Computer Science Student @ University of Toronto Mississauga</p>
                    </div>
                </div>
                <img
                    className="object-scale-down w-full content-center mx-auto"
                    src={profilepic}
                    alt="me"
                />
            </div>
            <div className="container mx-auto py-10 py-100">
                <h1 className="font-semibold text-white text-3xl">
                    About Me:
                </h1>
                <p className="text-white">
                    I'm a 3rd year computer science student at the Unversity of Toronto Mississauga. I currently live in Toronto and I'm from Ashburn, Virginia.

                </p>
            </div>
        </main>

    );
};

export default MainPage;