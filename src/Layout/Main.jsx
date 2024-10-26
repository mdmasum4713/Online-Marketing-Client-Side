import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NewsletterModal from "../pages/Home/NewsletterModal/NewsletterModal";
import NewsletterSubscription from "../pages/Shared/NewsletterSubscription/NewsletterSubscription";

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
            <NewsletterModal></NewsletterModal>
            <div className="divider"></div>
            <NewsletterSubscription></NewsletterSubscription>
        </div>
    );
};

export default Main;