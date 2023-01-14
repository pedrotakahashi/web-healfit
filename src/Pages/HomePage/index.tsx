import HomeContent from "../../Componets/Content/HomeContent";
import Footer from "../../Componets/Footer";
import Menu from "../../Componets/Menu";
import WppComponent from "../../Componets/WppComponent";

const HomePage = () =>{
    return(
        <>
            <Menu />
            <HomeContent />
            <WppComponent />
            <Footer />
        
        </>
    )
}

export default HomePage;