import Card from "./card"
import './styles/Home.css'

export default function Home(){

    const cardList = [
        {
            title: 'Explore',
            info: 'Beaches • Rainforest • Volcano',
            action: 'View Attractions',
            link: '/explore',
            background: '/rainforest.webp'
        },
        {
            title: 'Stay',
            info: 'Hostel • Hotels • Resorts',
            action: 'Find Lodging',
            link: '/stay',
            background: '/trop_resort.jpg'
        },
        {
            title: 'Eat',
            info: 'Local and International Dining',
            action: 'Explore Restaurants',
            link: '/eat',
            background: '/restaurant.jpg'
        },
        {
            title: 'Plan Your Visit',
            info: 'Getting Around • Visitor Information',
            action: 'Plan Your Visit',
            link: '/visit',
            background: '/adventure.jpg'
        }
    ]

    const Cards = cardList.map((item, index) => (
        <Card
            key={index}
            {...item} 
        />
    ))

    return (
        
        <div className="home">
            <h2>Discover Taniti</h2>
            <div className="cardContainer">
                {Cards}
            </div>
            <div className="home-content">
                <div className="summary">
                    <h3>About The Island</h3>
                    <p>
                        Nestled in the tropical Pacific Ocean, Taniti is a small island
                        with a remarkable variety of landscapes and experiences.
                        Covering less than 500 square miles, the island features
                        beautiful sandy and rocky beaches, a lush rainforest, and
                        a mountainous interior. Visitors can even discover a small
                        active volcano, making Taniti a destination full of natural
                        beauty and adventure.
                    </p>
                    <p>
                        At the heart of the island is Taniti City, where visitors
                        can experience native architecture, explore local shops,
                        and enjoy the white sandy beaches surrounding Yellow Leaf
                        Bay. The bay is also home to a safe harbor, welcoming
                        visitors arriving by cruise ship and providing access to
                        activities along the coast.
                    </p>
                    <p>
                        Whether you prefer relaxing by the water or seeking
                        adventure, Taniti offers plenty to experience. Visitors
                        can go snorkeling, charter a fishing trip, hike through
                        the rainforest, or take a zip-line adventure through
                        the island's lush interior. Boat and bus tours also provide
                        opportunities to see more of the island and its scenery.
                    </p>
                    <p>
                        Beyond its natural attractions, Taniti has a growing
                        selection of entertainment and dining experiences.
                        The island's restaurants serve everything from traditional
                        local fish and rice dishes to American-style and Pan-Asian
                        cuisine. Visitors can also enjoy local pubs, a microbrewery,
                        a dance club, art galleries, bowling, and other attractions.
                        Merriton Landing, on the north side of Yellow Leaf Bay,
                        is a popular destination for many of these activities.
                    </p>
                    <p>
                        Home to approximately 20,000 residents, Taniti has a
                        history rooted in fishing and agriculture. Today, visitors
                        can experience an island that combines its local character
                        with a welcoming tourism industry. Whether you're planning
                        a quiet beach getaway, an outdoor adventure, or a chance
                        to discover a different culture, Taniti has something
                        waiting for you.
                    </p>
                </div>
                <div className="island-info">
                    <h3>Island Info</h3>
                    <ul>
                        <li>
                            <strong>Island Demographics</strong>
                            <ul>
                            <li>Population: Approximately 20,000</li>
                            <li>Island Size: Under 500 square miles</li>
                            <li>Primary Economy: Tourism, fishing, and agriculture</li>
                            <li>Main Population Center: Taniti City</li>
                            <li>Currency: U.S. Dollar (USD)</li>
                            <li>Primary Language: Tanitian</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Geography and Attractions</strong>
                            <ul>
                            <li>Sandy and rocky beaches</li>
                            <li>Tropical rainforests</li>
                            <li>Mountainous interior</li>
                            <li>Active volcano</li>
                            <li>Yellow Leaf Bay harbor</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Weather and Climate</strong>
                            <ul>
                            <li>Climate: Warm tropical climate</li>
                            <li>Typical Daytime Temperature: 77–86°F</li>
                            <li>Typical Nighttime Temperature: 68–75°F</li>
                            <li>Water Temperature: 76–82°F</li>
                            <li>Humidity: 65–85%</li>
                            <li>Dry Season: May–October</li>
                            <li>Wet Season: November–April</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Visitor Information</strong>
                            <ul>
                            <li>Taniti City is relatively flat and walkable.</li>
                            <li>Public buses operate from 5 a.m. to 11 p.m.</li>
                            <li>Many attractions are located around Merriton Landing.</li>
                            <li>Power outlets use 120 volts, the same as the United States.</li>
                            <li>The island uses the U.S. dollar as its currency.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Did You Know?</strong>
                            <ul>
                            <li>Taniti has a population of approximately 20,000.</li>
                            <li>The island features both sandy and rocky beaches.</li>
                            <li>Taniti has a small, active volcano.</li>
                            <li>Many tourists visit to explore the rainforest and beaches.</li>
                            </ul>
                        </li>
                        </ul>
                </div>
            </div>
        </div>
    )
}