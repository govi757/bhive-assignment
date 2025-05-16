import "../home.css";
import communityEvents from "@/assets/images/icons/community-events.svg";
import gym from "@/assets/images/icons/gym.svg";

import highspeedWifi from "@/assets/images/icons/highspeed-wifi.svg";
import cafeTeaBar from "@/assets/images/icons/cafe-tea-bar.svg";
import affordable from "@/assets/images/icons/affordable.svg";
import comfort from "@/assets/images/icons/comfort.svg";
import quickBooking from "@/assets/images/icons/quick-booking.svg";
import sports from "@/assets/images/icons/sports.svg";
const WhyChooseUs = () => {
    const facilityList = [
        {
            title: "Community Events",
            icon: communityEvents,
        },
        {
            title: "Gym Facilities",
            icon: gym,
        },
        {
            title: "High-Speed WiFi",
            icon: highspeedWifi,
        },
        {
            title: "Cafe & Tea Bar",
            icon: cafeTeaBar,
        },
        {
            title: "Affordable",
            icon: affordable,
        },
        {
            title: "Comfort Lounges",
            icon: comfort,
        },
        {
            title: "Quick Booking",
            icon: quickBooking,
        },
        {
            title: "Sports Area",
            icon: sports,
        },

    ]
    return (
        <section className="main-padding">
            <div className="title">
            Why Choose us?
            </div>

            <div className="mt-5 row d-none d-lg-flex">
                {
                    facilityList.map(item => {
                        return <div key={item.title} className="col-3 d-flex facility-card">
                            <img width={32} src={item.icon} className="pe-2" />
                            <div className="heading5">
                                {item.title}
                            </div>
                        </div>
                    })
                }
            </div>


            <div className="row d-flex d-lg-none">
                {
                    facilityList.map(item => {

                        return <div key={item.title} className="col-6 p-0"> <div key={item.title} className=" d-flex flex-column align-items-center text-center facility-card mx-1 my-2  ">
                            <img height={28} src={item.icon} className="my-2" />
                            <div className="heading7">
                                {item.title}
                            </div>
                        </div>
                        </div>
                    })
                }
            </div>
        </section>

    )
}


export default WhyChooseUs;