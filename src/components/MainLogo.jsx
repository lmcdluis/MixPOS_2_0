import { Link } from "react-router-dom";
import LogoImage from "../assets/img/mix-pos-proto-white.png"; // Adjust the path as necessary

const MainLogo = ({size, linked}) => (
    linked ? (
        <Link to="/">
            <img src={LogoImage} alt="MixPOS Logo" className="img-fluid" width={size === "small" ? 150 : 200} height="auto"/>
        </Link>
    ) : (
        <img src={LogoImage} alt="MixPOS Logo" className="img-fluid" width={size === "small" ? 150 : 200} height="auto"/>
    )
);

export default MainLogo;