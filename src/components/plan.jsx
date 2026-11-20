
import "./styles/Plan.css";

export default function Plan() {
    return (
        <main className="plan-page">

            <section className="plan-intro">
                <h2>Plan Your Visit to Taniti</h2>
                <p>
                    A little preparation can make your island getaway even
                    better. Find useful information about arriving in Taniti,
                    getting around, local services, and things to know before
                    you travel.
                </p>
            </section>

            <section className="plan-content">

                <div className="plan-main">

                    <section className="plan-section">
                        <h3>Getting Here</h3>
                        <p>
                            Most visitors travel to Taniti by air. The island
                            currently has a small airport that accommodates
                            small jets and propeller planes. Airport expansion
                            is underway to allow larger jets to land in the
                            coming years.
                        </p>
                        <p>
                            Visitors can also arrive by cruise ship. A small
                            cruise ship docks in Yellow Leaf Bay one night
                            each week.
                        </p>
                    </section>

                    <section className="plan-section">
                        <h3>Getting Around</h3>
                        <p>
                            Taniti offers several ways to explore the island.
                            Your best option may depend on where you are
                            staying and which attractions you plan to visit.
                        </p>

                        <div className="plan-transport-grid">

                            <article className="plan-transport-card">
                                <h4>Public Buses</h4>
                                <p>
                                    Public buses serve Taniti City every day
                                    from 5:00 a.m. to 11:00 p.m.
                                </p>
                            </article>

                            <article className="plan-transport-card">
                                <h4>Private Buses</h4>
                                <p>
                                    Private bus services provide transportation
                                    to other parts of the island.
                                </p>
                            </article>

                            <article className="plan-transport-card">
                                <h4>Taxis</h4>
                                <p>
                                    Taxis are available in Taniti City.
                                </p>
                            </article>

                            <article className="plan-transport-card">
                                <h4>Rental Cars</h4>
                                <p>
                                    Rental cars are available from a local
                                    rental agency near the airport.
                                </p>
                            </article>

                            <article className="plan-transport-card">
                                <h4>Bicycles</h4>
                                <p>
                                    Several vendors rent bicycles and helmets.
                                    Helmets are required by law.
                                </p>
                            </article>

                            <article className="plan-transport-card">
                                <h4>Walking</h4>
                                <p>
                                    Taniti City is relatively flat and
                                    walkable. Merriton Landing is also easy
                                    to explore on foot.
                                </p>
                            </article>

                        </div>
                    </section>

                    <section className="plan-section">
                        <h3>Before You Go</h3>
                        <p>
                            Taniti celebrates many national holidays.
                            Restaurants and tourist attractions may close
                            during these holidays, so check ahead and plan
                            your activities accordingly.
                        </p>
                        <p>
                            If you plan to explore rural areas, keep in mind
                            that English is less commonly spoken there,
                            particularly among older residents. Many younger
                            Tanitians speak fluent English.
                        </p>
                    </section>

                    <section className="plan-section">
                        <h3>Money & Payments</h3>
                        <p>
                            Taniti uses the U.S. dollar. Some businesses also
                            accept euros and Japanese yen. Several banks offer
                            currency exchange, and many businesses accept
                            major credit cards.
                        </p>
                    </section>

                </div>

                <aside className="plan-sidebar">

                    <h3>Quick Facts</h3>

                    <ul>
                        <li>
                            <strong>Currency:</strong> U.S. dollar
                        </li>
                        <li>
                            <strong>Electrical outlets:</strong> 120 volts,
                            same as the United States
                        </li>
                        <li>
                            <strong>Drinking age:</strong> 18
                        </li>
                        <li>
                            <strong>Alcohol service:</strong> Not permitted
                            from midnight to 9:00 a.m.
                        </li>
                    </ul>

                    <h3>Safety & Services</h3>

                    <p>
                        Violent crime is very rare on Taniti. However,
                        reports of pickpocketing and other petty crimes
                        have increased as tourism has grown. Keep an eye
                        on your belongings while visiting.
                    </p>

                    <p>
                        Taniti has one hospital and several clinics.
                        The hospital has many multilingual employees.
                    </p>

                    <h3>Explore More</h3>

                    <p>
                        Ready to discover what the island has to offer?
                    </p>

                    <a href="/explore">Explore Taniti</a>

                    <p>
                        Looking for somewhere to stay or eat?
                    </p>

                    <a href="/stay">Find Lodging</a>
                    <br />
                    <a href="/eat">Explore Dining</a>

                </aside>

            </section>

        </main>
    );
}