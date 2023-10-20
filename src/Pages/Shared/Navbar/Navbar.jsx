import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <a href="/">Home</a>
                <a href="#">About</a>
                <a href="/products">Products</a>
                <a href="#">Contact</a>
            </div>
        </>
    );
};

export default Navbar;