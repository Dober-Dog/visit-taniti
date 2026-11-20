
import { useState } from "react";
import "./styles/Explore.css";

const activities = [
    {
        id: 1,
        name: "Beaches and Yellow Leaf Bay",
        category: "Beaches",
        description:
            "Relax on Taniti's beautiful sandy beaches or explore the safe harbor around Yellow Leaf Bay.",
        image: "/beach.jpg"
    },
    {
        id: 2,
        name: "Rainforest Adventures",
        category: "Nature",
        description:
            "Explore Taniti's lush rainforest through hiking trails and exciting zip-line experiences.",
        image: "/rainforest.jpg"
    },
    {
        id: 3,
        name: "The Active Volcano",
        category: "Nature",
        description:
            "Visit Taniti's mountainous interior and experience the island's small active volcano.",
        image: "/volcano.jpg"
    },
    {
        id: 4,
        name: "Water Activities",
        category: "Water",
        description:
            "Enjoy snorkeling, chartered fishing trips, and other activities around Taniti's coastal waters.",
        image: "/snorkeling.jpg"
    },
    {
        id: 5,
        name: "Tours and Sightseeing",
        category: "Tours",
        description:
            "Discover the island through guided boat tours, bus tours, and visits to Taniti City.",
        image: "/island-tour.jpg"
    },
    {
        id: 6,
        name: "Entertainment and Nightlife",
        category: "Entertainment",
        description:
            "Enjoy local pubs, a microbrewery, a dance club, movie theater, arcade, bowling, and art galleries.",
        image: "/nightlife.jpg"
    }
];

export default function Explore() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredActivities =
        selectedCategory === "All"
            ? activities
            : activities.filter(
                activity => activity.category === selectedCategory
            );

    const categories = [
        "All",
        "Beaches",
        "Nature",
        "Water",
        "Tours",
        "Entertainment"
    ];

    function fixMe(){
        alert('Feature to be added')
    }

    return (
        <main className="explore-page">

            <section className="explore-intro">
                <h2>Explore the Island of Taniti</h2>
                <p>
                    From beautiful beaches and lush rainforests to
                    exciting outdoor adventures and local entertainment,
                    there's something for everyone to discover on Taniti.
                </p>
            </section>

            <section className="explore-content">

                <div className="explore-main">

                    <h3>Discover Things to Do</h3>

                    <p>
                        Whether you're looking for adventure, relaxation,
                        or a chance to experience local culture, Taniti
                        offers a variety of attractions and activities
                        throughout the island.
                    </p>

                    <div className="explore-filters">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={
                                    selectedCategory === category
                                        ? "explore-filter active"
                                        : "explore-filter"
                                }
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="explore-card-container">

                        {filteredActivities.map(activity => (
                            <article
                                className="explore-card"
                                key={activity.id}
                                onClick={fixMe}
                            >
                                <img
                                    src={activity.image}
                                    alt={activity.name}
                                />

                                <div className="explore-card-info">
                                    <h4>{activity.name}</h4>
                                    <p>{activity.description}</p>
                                    <span>{activity.category}</span>
                                </div>
                            </article>
                        ))}

                    </div>

                </div>

                <aside className="explore-sidebar">

                    <h3>Explore Taniti</h3>

                    <ul>
                        <li>
                            Taniti is a tropical island with beaches,
                            rainforest, and mountainous terrain.
                        </li>
                        <li>
                            The island has a small active volcano.
                        </li>
                        <li>
                            Yellow Leaf Bay is home to a safe harbor
                            and many visitor activities.
                        </li>
                        <li>
                            Merriton Landing is a popular area for
                            entertainment and activities.
                        </li>
                    </ul>

                    <h3>Popular Activities</h3>

                    <ul>
                        <li>Snorkeling and chartered fishing</li>
                        <li>Rainforest hiking and zip-lining</li>
                        <li>Boat and bus tours</li>
                        <li>Volcano sightseeing</li>
                    </ul>

                    <p>
                        Ready to find somewhere to stay after a day
                        of exploring?
                    </p>

                    <a href="/stay">Find Accommodations</a>

                </aside>

            </section>

        </main>
    );
}
