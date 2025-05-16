import heroImage from "@/assets/images/home/Coworking.svg";
import "../home.css";
const HeroBanner = () => {
    return (
        <div className="hero-container bg ">
        <div className="main-padding d-flex flex-lg-row flex-column align-items-center">
        <div className="heading1 col-8 d-none d-lg-block">
          <strong>
            Host your meeting with <br />world-class amenities.<br />
            Starting at <span className="yellow-text">₹199/-!</span>
          </strong>
        </div>
      
        <img height={388} src={heroImage} alt="Hero" />
      
        <div className="heading4 d-block d-lg-none text-center mt-3">
          Host your meeting with world-class<br/> amenities.
          Starting at <span className="yellow-text">₹199/-!</span>
        </div>
      </div>
      </div>
      
    )
}


export default HeroBanner;