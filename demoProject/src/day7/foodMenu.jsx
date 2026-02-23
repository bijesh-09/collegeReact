import {useState} from 'react';

const FoodMenu = () => {
    const [foodMenu, setFoodMenu] = useState([
        {
            id: 1,
            name: 'Pizza',
            price: 10.99,
            image: "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?semt=ais_user_personalization&w=740&q=80",
            description: 'A delicious vegan pizza topped with fresh vegetables and plant-based cheese.'
        }
    ]);
    return(
        <div>
            <h1>Food Menu</h1>
            {/* Food Menu  */}
            {
                foodMenu.map(
                    (fm, index) => {
                        return (
                            <div key={`${fm.id}-${fm.name}`}>
                                <h2>{fm.name}</h2>
                                <p>{fm.description}</p>
                                <p>Price: ${fm.price}</p>
                                <img src={fm.image} alt={fm.name} width="200" height="200"/>
                            </div>
                        )
                    }
                )
            }
        </div>

    )
}
export default FoodMenu;