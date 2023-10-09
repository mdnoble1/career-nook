import About from "./About";
import Banner from "./Banner";
import Services from "./Cards/Services";
import Footer from "./Footer";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;