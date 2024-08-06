import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ProductListingPage.css'; // Include styles

const products = [
  { id: 1, name: 'Monstera', price: 25, category: 'Tropical', thumbnail: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRorEleW1s3Nx-J6S_c0XWek-wKRB_iGLHRbOM9fPYh_5By_wFhT2t9Kp8MLzpQOtbnIdWDdAZ3CGLdWepMpyE_YUWuLE2FNgqx1-zkgt31IFbQ_YQ3x12W' },
  { id: 2, name: 'Fiddle Leaf Fig', price: 30, category: 'Tropical', thumbnail: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRr6AHUxztI0HHQmYw6o5u5j8rwjvRy7CGKRM0HCnIJ14iCYmrjC2urgXUAk1wNVNSJxL2YLQZlonrN2Z0flPFuMcziYovi7UvI1hTwLnB4RtGzii94IKoe' },
  { id: 3, name: 'Snake Plant', price: 20, category: 'Succulents', thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQKkB6h19JrWUwwCN6_PGi6G86F8vkc57dIfIPofz5iJclT7xDFWTYKh37NLERYPoY8FLQd9czq9VGGhEvpRRa-cJsUBTnrhoI4pGDla_5NPVDtSuDwRiBk' },
  { id: 4, name: 'Peace Lily', price: 15, category: 'Flowering', thumbnail: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGfaJaf60STj29NPLkWnC1Uy_w4SivjpUZM6LsE0RcqrzzkXMp2-WirLRnPsl095N9q2mS46qLZTYP7HFw-ppTZprmvcnPTxtvH_pTWQw' },
  { id: 5, name: 'Aloe Vera', price: 10, category: 'Succulents', thumbnail: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQHwoZq5kSAidoU_KfXXD6pfi7cWvQUIeufiAg-POLooeeuFkAHamvo1sgtErtwt4pzoVDPSBbXU9nTpWYjB9WjcpBgmxeqFP-DCE-OY2E' },
  { id: 6, name: 'Spider Plant', price: 12, category: 'Indoor', thumbnail: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTHagmMO_NL8eH9CFsM17lNxIVLoKM-99q8lNESEnosr9ofy0plmcNs6gF8k7Yy_FsaUISiG7HPpvA4g7q-fJpo32x5f0uw9VC1RWY3h3wj' },
];

const ProductListingPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-listing-page">
      <h2>Our Plants</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
