import bhiveMobile from "@/assets/images/home/BhiveMobile.svg";
import "../home.css";
import playstoreIcon from "@/assets/images/icons/playstore.svg";
import appstoreIcon from "@/assets/images/icons/appstore.svg";
const DownloadApp = ()=>{
    return(
        <section className="download-app main-padding">
            <div className="title ">Download our app now</div>
            <div className="d-flex align-items-end">
            <img className="mobile-img" src={bhiveMobile} />
            <div className="w-100 boost-card d-none d-md-block">
                <div className="heading4 p-5">
                    <div className="mb-2">
                Boost your productivity with the BHIVE Workspace app.<br/>Elevate your workspace, collaborate efficiently, and unlock<br/> exclusive perks.
                </div>
                <div className="d-flex mt-5">
                    <img className="me-3" src={playstoreIcon} />
                    <img className="me-3" src={appstoreIcon} />
                </div>
                </div>
                
            </div>

            
            </div>
            <div className="d-flex mt-5 d-block d-md-none justify-content-center">
                    <img className="me-3" src={playstoreIcon} />
                    <img className="me-3" src={appstoreIcon} />
            </div>
        </section>
    )
}

export default DownloadApp;