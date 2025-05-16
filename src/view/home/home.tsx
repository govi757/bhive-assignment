import DownloadApp from "./components/DownloadApp";
import HeroBanner from "./components/HeroBanner";
import OurSpaceOverview from "./components/OurSpaceOverview";
import WhyChooseUs from "./components/WhyChooseUs";



const Home = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <HeroBanner />
                <WhyChooseUs />
                <OurSpaceOverview />
                <DownloadApp />
            </div>
        </div>
    )
}

export default Home;

