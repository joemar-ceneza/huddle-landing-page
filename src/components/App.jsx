import NavigationBar from "./NavigationBar";
import HuddlePage from "./HuddlePage";
import Footer from "./Footer";

export default function App() {
    return (
        <main className="min-h-screen flex flex-col overflow-x-hidden font-openSans">
            <NavigationBar />
            <HuddlePage />
            <Footer />
        </main>
    );
}
