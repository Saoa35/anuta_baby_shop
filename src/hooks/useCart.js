import { useContext } from "react";
import AppContext from "../context";


const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
}