import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/logo-wt-bg.png";

interface Props {
    className?: string;
    icon?: boolean;
}
export const Logo = ({ className = "", icon = false }: Props) => (
    <Link to="/" className={`font-display font-weight-900 font-extrabold tracking-tighter flex items-center ${className}`}>
        {icon && <span className="text-brand-dark mr-1"><img style={{ width: "2rem", borderRadius: "50%" }} src={LogoImage} alt="Logo" /></span>}
        <span className="text-brand-dark mr-0.5">Job</span>
        <span className="text-brand-accent">Buddy</span>
    </Link>
);
