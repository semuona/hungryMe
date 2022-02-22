import { useContext } from "react";
import { HungryMeContext } from "../../Context";
import Card from "../Card/Card";
import Header from "../Header/Header";

export default function Main() {
  const { menu, favorites, setFavorites, currentUser} = useContext(HungryMeContext);
  const addToFav = (item) =>{
    favorites=  currentUser.favorites.push(item)
    
    }
  return (
    <div>
      <h1>Restaurants</h1>
      <Header />
      <div className="cardContainer">
        {menu.map((item, idx) => (
          <Card item={item} key={idx} cb= {addToFav(idx)} />
        ))}
      </div>
    </div>
  );
}
