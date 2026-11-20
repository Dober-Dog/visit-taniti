
import "./styles/Stay.css";

const accommodations = [
    {
        id: 1,
        name: "Hotels and Resorts",
        type: "Hotels",
        description:
            "Taniti offers several family-owned hotels, as well as a four-star resort for visitors looking for a more luxurious experience.",
        image: "/hotel.jpg"
    },
    {
        id: 2,
        name: "Bed and Breakfasts",
        type: "B&Bs",
        description:
            "Enjoy a more personal lodging experience with a bed and breakfast during your stay on Taniti.",
        image: "/bed_breakfast.jpg"
    },
    {
        id: 3,
        name: "Hostels",
        type: "Budget",
        description:
            "Travelers looking for an inexpensive place to stay can consider Taniti's hostel accommodation.",
        image: "/hostel.jpg"
    },
    {
        id: 4,
        name: "Other Accommodations",
        type: "Private",
        description:
            "Visitors may also have private lodging options, such as a vacation home or privately owned accommodation.",
        image: "/vacation_home.jpg"
    }
];

function fixMe(){
    alert('Feature to be added')
}

export default function Stay() {
    return (
        <main className="stay-page">

            <section className="stay-intro">
                <h2>Find Your Stay on Taniti</h2>
                <p>
                    Whether you're looking for a relaxing resort,
                    a family-owned hotel, or an affordable place
                    to rest after a day of exploring, Taniti has
                    accommodations for different types of travelers.
                </p>
            </section>

            <section className="stay-content">

                <div className="stay-main">

                    <h3>Where Would You Like to Stay?</h3>

                    <p>
                        Taniti offers a variety of lodging options,
                        ranging from inexpensive hostels to a four-star
                        resort. Most hotels are family-owned, and all
                        lodging is regulated and inspected by the
                        Tanitian government.
                    </p>

                    <div className="stay-card-container">
                        {accommodations.map(place => (
                            <article className="stay-card" key={place.id} onClick={fixMe}>
                                <img
                                    src={place.image}
                                    alt={place.name}
                                />

                                <div className="stay-card-info">
                                    <h4>{place.name}</h4>
                                    <p>{place.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>

                <aside className="stay-sidebar">

                    <h3>Staying on Taniti</h3>

                    <ul>
                        <li>
                            Lodging options range from inexpensive
                            hostels to a four-star resort.
                        </li>
                        <li>
                            Many hotels are family-owned.
                        </li>
                        <li>
                            All lodging is regulated and inspected
                            by the government.
                        </li>
                    </ul>

                    <h3>Planning Your Stay</h3>

                    <p>
                        Consider transportation, activities, and
                        the length of your visit when choosing
                        where to stay.
                    </p>

                    <p>
                        Taniti City is relatively flat and easy
                        to explore on foot. Merriton Landing is
                        also easy to navigate by walking.
                    </p>

                    <a href="/plan">Plan Your Visit</a>

                </aside>

            </section>

        </main>
    );
}