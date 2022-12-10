import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
  const url = "https://6394c3f44df9248eadac2772.mockapi.io";

  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [serchValue, setSerchValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // const cartResponse = await axios.get(`${url}/cart`);
        // const favoritesResponse = await axios.get(`${url}/favorites`);
        // const itemsResponse = await axios.get(`${url}/items`);

        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get(`${url}/cart`),
            axios.get(`${url}/favorites`),
            axios.get(`${url}/items`),
          ]);

        setLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(`${url}/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(`${url}/cart`, obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
        // setCartItems([...cartItems, obj]);
      }
    } catch (error) {
      console.log(error.mesage);
    }
  };

  const onRemoveFromCart = (id) => {
    try {
      axios.delete(`${url}/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      console.log(error.mesage);
    }
  };

  const onChangeInput = (event) => {
    setSerchValue(event.target.value);
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((object) => Number(object.id) === Number(obj.id))) {
        axios.delete(`${url}/favorites/${obj.id}`);
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(`${url}/favorites`, obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper">
        {cartOpened && (
          <Cart
            onCloseCart={() => setCartOpened(false)}
            items={cartItems}
            onRemove={onRemoveFromCart}
            opened={cartOpened}
          />
        )}

        <Header onClickCart={() => setCartOpened(true)} />

        <Route path="/" exact>
          <Home
            serchValue={serchValue}
            items={items}
            cartItems={cartItems}
            onChangeInput={onChangeInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            loading={loading}
          />
        </Route>

        <Route path="/favorites" exact>
          <Favorites />
        </Route>

        <Route path="/orders" exact>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
