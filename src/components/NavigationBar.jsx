import Logo from "../images/logo.svg";

export default function NavigationBar() {
    return (
        <nav className="max-w-screen-2xl w-11/12 flex justify-between mx-auto my-12">
            <div className="flex justify-center items-center max-xs:justify-start">
                <img className="max-xs:w-3/4" src={Logo} alt="Workflow logo" />
            </div>
            <button className="w-36 rounded-3xl border-2 border-pink-400 hover:border-pink-300 text-pink-400 hover:text-pink-300 p-2 shadow cursor-pointer">
                Try it Free
            </button>
        </nav>
    );
}