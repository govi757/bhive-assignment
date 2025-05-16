import "./general.css";
import bhiveIcon from '@/assets/images/icons/bhiveIcon.svg';
export const BasicNavbar = () => {

    return (
        <nav className="yellow-text col navbar navbar-expand-lg basic-navbar d-flex">
            <a className="flex-fill">
                <img src={bhiveIcon} />
            </a>
            <a href="tel:+91-9538677774" className="header-phone">
            <i  className="bi bi-telephone-fill me-2"></i> 
            </a>
        </nav>
    )
}