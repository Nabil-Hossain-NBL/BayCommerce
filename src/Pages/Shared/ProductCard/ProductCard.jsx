import { useState } from 'react';
import './ProductCard.css';
import { FaHeart } from 'react-icons/fa';

const ProductCard = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

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
                            <li><FaHeart></FaHeart></li>
                        </div>
                    </div>
                    <div className='button-div'>
                        <button onClick={openModal} className="view-button">view</button>
                    </div >
                </div >
            </div >
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{item.title}</h2>
                        <div className="product-image">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="product-price">$230.99</div>
                        <button className='modal-button' onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductCard;