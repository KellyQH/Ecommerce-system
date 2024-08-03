import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("M");
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setCurrentImage(data.image);
        return fetch(
          `https://fakestoreapi.com/products/category/${data.category}`
        );
      })
      .then((response) => response.json())
      .then((data) => {
        setRelatedItems(data.filter((item) => item.id !== parseInt(id)));
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="breadcrumb mb-4 text-sm text-gray-500">
        <a href="/" className="hover:underline">
          Account
        </a>{" "}
        /{" "}
        <a href={`/category/${product.category}`} className="hover:underline">
          {product.category}
        </a>{" "}
        / <span>{product.title}</span>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-auto md:w-1/2 flex flex-col items-center">
          <img
            src={currentImage}
            alt={product.title}
            className="my-20 w-96 h-96 object-contain border p-4 rounded-lg flex-shrink-0"
          />
          {/* <div className="flex space-x-2">
            {product.images && product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.title} ${index}`}
                className={`w-16 h-16 object-contain rounded-lg cursor-pointer border-2 ${currentImage === img ? 'border-blue-500' : 'border-transparent'} hover:border-blue-500`}
                onClick={() => setCurrentImage(img)}
              />
            ))}
          </div> */}
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="flex items-center mb-2">
            <div className="text-yellow-500">★★★★★</div>
            <span className="ml-2 text-gray-600">(150 Reviews)</span>
            <span className="ml-4 text-green-600">In Stock</span>
          </div>
          <p className="text-2xl font-semibold text-red-500 mb-4">
            ${product.price}
          </p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="mb-4">
            <label className="text-gray-700 mr-2">Size:</label>
            <div className="flex space-x-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`border px-4 py-2 rounded ${
                    selectedSize === size ? "bg-red-500 text-white" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              <button className="border px-4 py-2 rounded-l">-</button>
              <input
                type="text"
                className="w-12 text-center border-t border-b"
                value="2"
                readOnly
              />
              <button className="border px-4 py-2 rounded-r">+</button>
            </div>
            <div className="flex">
              <button className="bg-red-500 text-white px-4 py-2 rounded mr-2">
                Add to Cart
              </button>
              <button className="border px-4 py-2 rounded">❤️</button>
            </div>
          </div>
          <div className="border p-4 rounded mb-4">
            <h2 className="text-lg font-bold mb-2">Free Delivery</h2>
            <p>Enter your postal code for Delivery Availability</p>
          </div>
          <div className="border p-4 rounded">
            <h2 className="text-lg font-bold mb-2">Return Delivery</h2>
            <p>Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
      </div>
      <div className="related-items mt-8">
        <h2 className="text-xl font-bold mb-4">Related Items</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {relatedItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg flex-shrink-0"
              style={{ width: "250px" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-contain mb-2 hover:scale-105 transition-transform duration-200"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-2">${item.price}</p>
              <p className="text-red-500">40% off</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
