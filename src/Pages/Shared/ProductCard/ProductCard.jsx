import './ProductCard.css'
const ProductCard = ({item}) => {
    console.log(item);
    return (
        <>
            <div className="product-card">
                <div className="product-image">
                    <img src={item.image} alt="" />
                </div>
                <div className="product-details">
                    <span className="product-catagory">Women,bag</span>
                    <h4><a href="">Women leather bag</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                    <div className="product-bottom-details">
                        <div className="product-price">$230.99</div>
                        <div className="product-links">
                            <a href=""><i className="fa fa-heart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;