import { useEffect, useState } from "react";
import ProductCard from "../Shared/ProductCard/ProductCard";
import './Products.css';
import Swal from "sweetalert2";


const Products = () => {
    const [product, setProduct] = useState([]);
    const [refetch, setRefetch] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("all");

    // const [currentPage, setCurrentPage] = useState(1);
    // const productsPerPage = 6;


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [refetch])
    console.log(product);

    const handleBookmark = (id) => {

        const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
        let bookmark = [];
        const product = { id, bookmark: true };
        setRefetch(!refetch)

        if (previousBookmark) {
            const isThisProductMarked = previousBookmark.find((pd) => pd.id == id);
            if (isThisProductMarked) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "already bookmakred",
                    footer: '',
                });
            } else {
                bookmark.push(...previousBookmark, product);
                localStorage.setItem("bookmark", JSON.stringify(bookmark));
                console.log(bookmark);
                Swal.fire({
                    icon: "success",
                    title: "bookmarked",
                    text: "bookmakred",
                    footer: '',
                });
            }
        } else {
            bookmark.push(product);
            localStorage.setItem("bookmark", JSON.stringify(bookmark));
        }
    };
    const handleRemoveBookmark = (id) => {
        setRefetch(!refetch)
        const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
        const restOfThem = previousBookmark.filter((product) => product.id != id);
        localStorage.setItem("bookmark", JSON.stringify(restOfThem));
        Swal.fire({
            icon: "success",
            title: "Bookmarked removed",
            text: "Bookmarked removed",
            footer: '',
        });
    };



    const checkBookmark = (id) => {
        const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));

        const isBookmarked = previousBookmark?.find((product) => product.id == id);
        if (isBookmarked) {
            return true;
        } else {
            return false;
        }
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredProducts = selectedCategory === "all"
        ? product
        : product.filter(item => item.category === selectedCategory);


    // const indexOfLastProduct = currentPage * productsPerPage;
    // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);



    return (
        <>
            <div className="category-dropdown">
                <label htmlFor="categorySelect">Filter by Category:</label>
                <select id="categorySelect" onChange={handleCategoryChange} value={selectedCategory}>
                    <option value="all">All</option>
                    <option value="men's clothing">Men Clothing</option>
                    <option value="women's clothing">Women Clothing</option>
                    <option value="electronics">Electronics</option>
                    {/* Add more options for other categories as needed */}
                </select>
            </div>
            <div className="container">

                {
                    filteredProducts?.map(item => {
                        const isBookmarked = checkBookmark(item.id);
                        return (
                            <ProductCard
                                key={item.id}
                                item={item}
                                handleBookmark={handleBookmark}
                                handleRemoveBookmark={handleRemoveBookmark}
                                isBookmarked={isBookmarked}
                            />
                        );
                    })
                }

            </div>

            {/* pagination */}

            {/* <div className="pagination">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={indexOfLastProduct >= product.length}
                >
                    Next
                </button>
            </div> */}
        </>
    );
};

export default Products;