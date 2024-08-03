import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 12; // Number of items per page

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        const clothingItems = data.filter(
          product => product.category
        );

        let expandedItems = [];
        while (expandedItems.length < 100) {
          expandedItems = [...expandedItems, ...clothingItems];
        }
        expandedItems = expandedItems.slice(0, 100); // Ensure exactly 100 items

        setProducts(expandedItems);
        setFilteredProducts(expandedItems.slice(0, itemsPerPage));
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
    const startIndex = (value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFilteredProducts(products.slice(startIndex, endIndex));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className="flex justify-center">
            <div className="border rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300 relative">
              <div className="absolute top-2 right-2">
                <FavoriteBorder className="text-gray-500 hover:text-red-500 cursor-pointer" />
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain rounded-lg mb-2"
              />
              <h2 className="text-xl font-semibold text-center mb-2 truncate w-full" style={{maxWidth: '200px'}}>{product.title}</h2>
              <p className="text-gray-700 text-center mb-2">${product.price} USD</p>
              <button className="bg-black text-white px-4 py-2 rounded-full flex items-center justify-center w-full hover:bg-gray-800 transition duration-300">
                <ShoppingCart className="mr-2" /> Add To Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
      <Stack spacing={2} className="mt-4 flex justify-center">
        <Pagination
          count={Math.ceil(products.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          className="mx-auto"
        />
      </Stack>
    </div>
  );
};

export default ProductList;
