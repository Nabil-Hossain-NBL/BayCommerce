import { useState } from 'react';
import './ProductCard.css';
import { FaHeart } from 'react-icons/fa';

const ProductCard = ({ item, handleBookmark, handleRemoveBookmark, isBookmarked }) => {
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
                    <span className="product-category">{item.category}</span>
                    <h4><a href="#">{item.title}</a></h4>
                    <div className="product-bottom-details">
                        <div className="product-price">${item.price}</div>
                        <div className="product-links">
                            <li
                                onClick={() => {
                                    isBookmarked ? handleRemoveBookmark(item.id) : handleBookmark(item.id);
                                }}
                                className={isBookmarked ? 'favorite' : 'non-favorite'}
                            >
                                <FaHeart />
                            </li>
                        </div>
                    </div>
                    <div className='button-div'>
                        <button onClick={openModal} className="view-button">View</button>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className='modal-button' onClick={closeModal}>Close</button>
                        <h2>{item.title}</h2>
                        <div className="product-image">
                            <img src={item.image} alt="" />
                        </div>
                        <p>{item.description}</p>
                        <div className="product-price">${item.price}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductCard;
