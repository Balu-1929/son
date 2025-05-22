import './Home.css';
import Header from "./Header";
import SideBar from "./SiderBar";
import Footer from "./Footer";
import Main from "./Main";
function Home(){
    return (

        <div className="home">
            <Header/>
            <SideBar/>
            <Main/>
        </div>

    );
}
export default Home;