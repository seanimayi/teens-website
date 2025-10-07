import Footer from "../component/footer";
import { Header } from "../component/header";
import HeroSection from "../component/herosection";
import HeroSection2 from "../component/herosection2";

export default function LandingPage() {
    return (
        <>
        <div>
            <Header />
            <HeroSection />
            <HeroSection2 />
            <Footer />
        </div>
        </>
    )
}