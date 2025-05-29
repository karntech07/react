const Home = () => {
    return <h3>Home</h3>
}

const About = () => {
    return <h3>About</h3>
}

const ContactUs = () => {
    return <h3>Contact Us</h3>
}

const Cart = () => {
    return <h3>Cart</h3>
}


export const Navbar = () => {
    return (
        <div className="navbar">
            <Home></Home>
            <About></About>
            <ContactUs></ContactUs>
            <Cart></Cart>
        </div>
    )
}