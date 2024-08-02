import React, { useState } from 'react';
import PropertyList from './components/PropertyList/PropertyList';
import Cart from './components/Cart/Cart';
import Filter from './components/Filters/Filters';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import Checkout from './components/Ckeckout/Checkout';
import { Typography,Box } from '@mui/material';

const properties = [
  {
    id: 1,
    title: "Cozy Cottage",
    description: "A lovely cottage in the countryside.",
    price: 120,
    image: "https://ad-archts.com/wp-content/uploads/2022/12/Harwichport-Home-Entry-Gate.jpg",
    bedrooms: 2,
    amenities: ["wifi", "parking"],
    link:"https://ad-archts.com/project/cozy-cottage/"
  },
  {
    id: 2,
    title: "Mountain Retreat",
    description: "A serene mountain cabin with stunning views.",
    price: 150,
    image: "https://ichef.bbci.co.uk/images/ic/1200x675/p08mv4p0.jpg",
    bedrooms: 3,
    amenities: ["wifi", "pool"],
    link:"https://www.ubuy.co.in/product/3ZSL3UDHS-bob-ross-mountain-retreat-art-print-canvas-bob-ross-poster-bob-ross-collection-bob-art-paintings-happy-accidents-bob-ross-print-decor-mountains"
  },
  {
    id: 3,
    title: "Beachside Bungalow",
    description: "A charming bungalow right on the beach.",
    price: 200,
    image: "https://images.squarespace-cdn.com/content/v1/6031373846efce666cfeb64d/1613841535808-RW13STYMEGYA3ECQVSIJ/DJI_0036+%281%29.jpg",
    bedrooms: 4,
    amenities: ["wifi", "airConditioning"],
    link:"https://www.beachsidebungalow.com/"
  },
  {
    id: 4,
    title: "Urban Apartment",
    description: "A modern apartment in the heart of the city.",
    price: 250,
    image: "https://cdn.homedit.com/wp-content/uploads/2014/06/close-to-the-downtown.jpg",
    bedrooms: 2,
    amenities: ["wifi", "airConditioning", "parking"],
    link:"https://www.homedit.com/urban-apartment-right-for-you/"
  },
  {
    id: 5,
    title: "Rustic Farmhouse",
    description: "A spacious farmhouse surrounded by farmland.",
    price: 180,
    image: "https://assets.architecturaldigest.in/photos/615bfda2f1c447b8b0e7ba33/master/w_1600%2Cc_limit/farm%25202.jpg",
    bedrooms: 3,
    amenities: ["wifi", "parking"],
    link:"https://www.architecturaldigest.in/story/in-hyderabad-an-eco-friendly-weekend-home-that-defies-conventional-rules-of-architecture/"
  },
  {
    id: 6,
    title: "Luxury Villa",
    description: "A high-end villa with a private pool and garden.",
    price: 500,
    image: "https://www.favouritehomes.com/wp-content/uploads/2022/01/luxury-villa-life.jpg",
    bedrooms: 5,
    amenities: ["wifi", "pool", "airConditioning", "parking"],
    link:"https://www.favouritehomes.com/advantages-of-staying-in-a-luxury-villa/"
  },
  {
    id: 7,
    title: "Charming Studio",
    description: "A cozy studio apartment perfect for a city escape.",
    price: 130,
    image: "https://r1imghtlak.ibcdn.com/a50dcf06ea1311ebb5100242ac110002.webp?downsize=634:357",
    bedrooms: 1,
    amenities: ["wifi", "airConditioning"],
    link:"https://www.homedit.com/urban-apartment-right-for-you/"
  },
  {
    id: 8,
    title: "Ski Lodge",
    description: "A cozy lodge perfect for winter skiing adventures.",
    price: 220,
    image: "https://timberframe1.com/wp-content/uploads/2017/09/2df72bc06021611476a094af6d94e77e.png",
    bedrooms: 4,
    amenities: ["wifi", "pool", "parking"],
    link:"https://timberframe1.com/blog/timber-frame-makes-great-ski-lodge/"
  },
  {
    id: 9,
    title: "Seaside Villa",
    description: "A luxurious villa with breathtaking ocean views.",
    price: 350,
    image: "https://images.adsttc.com/media/images/599b/d246/b22e/3825/2300/00e5/large_jpg/10.jpg?1503384125",
    bedrooms: 4,
    amenities: ["wifi", "pool", "airConditioning", "parking"],
    link:"https://www.archdaily.com/878180/seaside-villa-shinichi-ogawa-and-associates"
  },
  {
    id: 10,
    title: "Countryside Retreat",
    description: "A peaceful retreat surrounded by lush greenery.",
    price: 160,
    image: "https://countrysideresorts.in/images/slider-2.jpg",
    bedrooms: 3,
    amenities: ["wifi", "parking"],
    link:"https://countrysideresorts.in/"
  }
];
const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const [cart, setCart] = useState([]);
  const location = useLocation();
  const [filters, setFilters] = useState({
    location: '',
    priceRange: [0, 1000],
    bedrooms: null,
    amenities: []
  });
  const navigate = useNavigate();

  const addToCart = (property) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === property.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === property.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...property, quantity: 1 }];
    });
    alert('Item added to the cart');
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateCartQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const handleCheckout = (bookingDetails) => {
    console.log('Booking Details:', bookingDetails);
    alert(`${bookingDetails?.contactInfo?.name } Your booking is confirmed`);
    setCart([]);
  };

  const applyFilters = () => {
    return properties.filter(property => {
      console.log('jjj>>>', parseInt(property.bedrooms) === parseInt(filters.bedrooms))
      return (
        (!filters.location || property.title.toLowerCase().includes(filters.location.toLowerCase())) &&
        (property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1]) &&
        (!filters.bedrooms || parseInt(property.bedrooms) === parseInt(filters.bedrooms)) &&
        (filters.amenities.length === 0 || filters.amenities.every(amenity => property.amenities.includes(amenity)))
      );
    });
  };

  return (
    <Box padding={2}>
      <Typography variant='h1' sx={{ fontSize: '24px', fontWeight: 'bold', color: 'green', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>Property Rental Platform </Typography>
      <nav style={{ display: 'flex', justifyContent: 'start', marginTop: 30 }}>
        <Link to="/" style={{ textDecoration: 'none', color: location.pathname === '/' ? "#0069E3" : "#808080" }}><span style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px' }}> Propertylist </span></Link>
        <div>
          <Link to="/cart" style={{ textDecoration: 'none', color: location.pathname === '/cart' ? "#0069E3" : "#808080", }}><span style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}> Cart </span><span style={{ color: 'red', fontSize: '18px', fontWeight: 'bold', marginLeft: '5px' }}>{cart.length > 0 ? cart.length : 0}</span></Link>
        </div>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter filters={filters} setFilters={setFilters} />
              <PropertyList properties={applyFilters()} onAddToCart={addToCart} onCheckout={() => navigate("/checkout")} />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onRemove={removeFromCart}
              onUpdateQuantity={updateCartQuantity}
              onCheckout={() => navigate("/checkout")}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} onConfirm={handleCheckout} />}
        />
      </Routes>
    </Box>
  );
};

export default App;
