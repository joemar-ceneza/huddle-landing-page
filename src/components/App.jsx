import NavigationBar from "./NavigationBar";
import HuddlePage from "./HuddlePage";
import Footer from "./Footer";

export default function App() {
    return (
        <main className="max-w-full w-screen mx-auto flex flex-col font-bodyFont text-center max-xs:text-xs">
            <NavigationBar />
            <HuddlePage />
            <Footer />
        </main>
    );
}