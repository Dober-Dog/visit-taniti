
import { useState } from "react";
import "./styles/Eat.css";

const restaurants = [
    {
        id: 1,
        name: "Local Cuisine",
        category: "Local",
        count: 5,
        description:
            "Experience Taniti's traditional food, featuring locally caught fish and rice-based dishes.",
        image: "/local_food.webp"
    },
    {
        id: 2,
        name: "American-Style Dining",
        category: "American",
        count: 3,
        description:
            "Enjoy familiar American-style meals while exploring the island.",
        image: "/american_food.jpg"
    },
    {
        id: 3,
        name: "Pan-Asian Cuisine",
        category: "Pan-Asian",
        count: 2,
        description:
            "Explore Pan-Asian dining options during your stay on Taniti.",
        image: "/asian_food.jpg"
    }
];

function fixMe(){
    alert('Feature to be added')
}

export default function Eat() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredRestaurants =
        selectedCategory === "All"
            ? restaurants
            : restaurants.filter(
                restaurant => restaurant.category === selectedCategory
            );

    return (
        <main className="eat-page">

            <section className="eat-intro">
                <h2>Discover the Flavors of Taniti</h2>
                <p>
                    From locally caught seafood to American-style favorites
                    and Pan-Asian cuisine, Taniti offers a variety of dining
                    experiences for visitors to enjoy.
                </p>
            </section>

            <section className="eat-content">

                <div className="eat-main">

                    <h3>Explore Taniti's Dining Options</h3>

                    <p>
                        Taniti has ten restaurants across the island.
                        Whether you're interested in sampling local dishes
                        or enjoying something familiar, there are several
                        dining options to explore.
                    </p>

                    <div className="eat-filters">
                        {["All", "Local", "American", "Pan-Asian"].map(category => (
                            <button
                                key={category}
                                className={
                                    selectedCategory === category
                                        ? "eat-filter active"
                                        : "eat-filter"
                                }
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="eat-card-container">
                        {filteredRestaurants.map(restaurant => (
                            <article className="eat-card" key={restaurant.id} onClick={fixMe}>
                                <img
                                    src={restaurant.image}
                                    alt={restaurant.name}
                                />

                                <div className="eat-card-info">
                                    <h4>{restaurant.name}</h4>
                                    <p>{restaurant.description}</p>
                                    <span>
                                        {restaurant.count} restaurants
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>

                <aside className="eat-sidebar">
                    <h3>Dining on Taniti</h3>

                    <ul>
                        <li>10 restaurants across the island</li>
                        <li>5 restaurants primarily serving local fish and rice</li>
                        <li>3 American-style restaurants</li>
                        <li>2 Pan-Asian restaurants</li>
                    </ul>

                    <h3>Visitor Information</h3>

                    <ul>
                        <li>Restaurants may close on national holidays.</li>
                        <li>Alcohol sales and service are prohibited between midnight and 9 a.m.</li>
                        <li>Many businesses accept U.S. dollars.</li>
                    </ul>

                    <p>
                        Want to learn more before choosing where to eat?
                    </p>

                    <a href="/plan">Plan Your Visit</a>
                </aside>

            </section>

        </main>
    );
}