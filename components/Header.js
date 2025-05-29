import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export const Header = () => {
    return <div className="header">
        <Logo></Logo>
        <Navbar></Navbar>
    </div>
}