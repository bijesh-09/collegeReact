import { foodSubMenuList } from "./foodSubMenu";
import "./foodSubMenu.css";
import { useState } from "react";

const FoodSubMenu = () => {
    const [allFoodSubMenu, setAllFoodSubMenu] = useState(foodSubMenuList);
    const handleAddFoodSubMenu = () => {
        let newData = {
            id: allFoodSubMenu.length + 1,
            name: "New Food Item",
            foodMenuId: 10,
            price: 100,
            description: "This is a new food item"
        }
        setAllFoodSubMenu([...allFoodSubMenu, newData]);
    }
    return (
        <div>
            <h1>Food Sub Menu</h1>
            <button onClick={handleAddFoodSubMenu}>
                Add New Food Item
            </button>
            <div className="fsm-container">

                {
                    allFoodSubMenu.map(
                    (food)=>{
                        return(
                            <div className="fsm-card" key={`${food.id}-${food.foodMenuId}`}>
                                <p>Name: {food.name}</p>
                                <p>Price: {food.price}</p>
                                <p>Description: {food.description}</p>
                            </div>
                        )
                    }
                )
                }
            </div>
        </div>
    )
}
export default FoodSubMenu;