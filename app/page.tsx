import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Star, Calendar, Users, Utensils } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">JamIcan</h1>
              <p className="text-muted-foreground font-[family-name:var(--font-body)]">Authentic Jamaican Catering</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors font-[family-name:var(--font-body)]"
              >
                About
              </a>
              <a
                href="#menu"
                className="text-foreground hover:text-primary transition-colors font-[family-name:var(--font-body)]"
              >
                Menu
              </a>
              <a
                href="#events"
                className="text-foreground hover:text-primary transition-colors font-[family-name:var(--font-body)]"
              >
                Events
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-primary transition-colors font-[family-name:var(--font-body)]"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors font-[family-name:var(--font-body)]"
              >
                Contact
              </a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-[family-name:var(--font-body)]">
              Request Catering
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/elegant-jamaican-restaurant.svg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
            Authentic Jamaican Catering in Toronto
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            From intimate gatherings to large corporate events, we bring 100% authentic Jamaican flavors to your special
            occasions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-[family-name:var(--font-body)]"
            >
              View Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black font-[family-name:var(--font-body)] bg-transparent"
            >
              Get Catering Quote
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)]">
                Our Story
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-[family-name:var(--font-body)]">
                The KR Morgan Food Group (JamIcan) is a full service catering company founded in 2013 by Khimar Morgan,
                with a strong desire to serve the community with a 100% authentic and traditional food from Jamaica -
                right in the heart of Canada. We are proud to carry forward a legacy of quality and commitment to
                exceptional culinary experiences.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-[family-name:var(--font-body)]">
                The KR Morgan Food Group (JamIcan) offers personalized and interactive culinary experiences. From
                intimate private gatherings to large scale corporate events, or even a vibrant food truck experience, We
                excel in designing and delivering flawless services crafted with love and warmth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-[family-name:var(--font-body)]">
                With a robust team of professional planners, chefs and service staff, Our team works collaboratively to
                ensure that every unique requirements of the customers are met. This aligns with our vision of serving
                finest food and creating an environment where moments are shared, and relationships are flourished.
              </p>
            </div>
            <div className="relative">
              <img
                src="/elegant-jamaican-restaurant.svg"
                alt="JamIcan catering setup"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-heading)]">
              Savor Our Culinary Journey
            </h3>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-body)]">
              A fusion of tradition and flavor in every dish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Menu items remain the same */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <img
                  src="/jamaican-patties.svg"
                  alt="Jamaican Patties"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                  Jamaican Patties
                </h4>
                <p className="text-muted-foreground mb-3 font-[family-name:var(--font-body)]">
                  Flaky golden pastries filled with spiced beef, chicken, or vegetables
                </p>
                <p className="text-primary font-bold font-[family-name:var(--font-body)]">$8.95</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <img
                  src="/jamaican-festival-dumplings.svg"
                  alt="Festival"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                  Festival
                </h4>
                <p className="text-muted-foreground mb-3 font-[family-name:var(--font-body)]">
                  Sweet fried dumplings, crispy outside and soft inside
                </p>
                <p className="text-primary font-bold font-[family-name:var(--font-body)]">$6.95</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <img
                  src="/grilled-jerk-chicken.svg"
                  alt="Jerk Chicken"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                  Jerk Chicken
                </h4>
                <p className="text-muted-foreground mb-3 font-[family-name:var(--font-body)]">
                  Marinated in authentic jerk spices and grilled to perfection
                </p>
                <p className="text-primary font-bold font-[family-name:var(--font-body)]">$24.95</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <img
                  src="/jamaican-curry-goat.svg"
                  alt="Curry Goat"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                  Curry Goat
                </h4>
                <p className="text-muted-foreground mb-3 font-[family-name:var(--font-body)]">
                  Tender goat meat slow-cooked in aromatic curry spices
                </p>
                <p className="text-primary font-bold font-[family-name:var(--font-body)]">$26.95</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <img
                  src="/ackee-and-saltfish.svg"
                  alt="Ackee and Saltfish"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                  Ackee & Saltfish
                </h4>
                <p className="text-muted-foreground mb-3 font-[family-name:var(--font-body)]">
                  Jamaica's national dish with ackee fruit and salted cod
                </p>
                <p className="text-primary font-bold font-[family-name:var(--font-body)]">$22.95</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <img
                  src="/jamaican-oxtail-stew.svg"
                  alt="Oxtail"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                  Braised Oxtail
                </h4>
                <p className="text-muted-foreground mb-3 font-[family-name:var(--font-body)]">
                  Fall-off-the-bone oxtail braised with butter beans
                </p>
                <p className="text-primary font-bold font-[family-name:var(--font-body)]">$28.95</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-[family-name:var(--font-body)]"
            >
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      <section id="events" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-heading)]">
              Events We Cater
            </h3>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-body)]">
              We specialize in every event you can think of!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary h-8 w-8" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                Corporate Events
              </h4>
              <p className="text-muted-foreground text-sm font-[family-name:var(--font-body)]">
                Professional catering for meetings, conferences, and corporate gatherings
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-secondary h-8 w-8" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                Private Parties
              </h4>
              <p className="text-muted-foreground text-sm font-[family-name:var(--font-body)]">
                Intimate gatherings, birthday parties, and family celebrations
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="text-accent h-8 w-8" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                Weddings & Galas
              </h4>
              <p className="text-muted-foreground text-sm font-[family-name:var(--font-body)]">
                Elegant catering for your most special occasions and formal events
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Utensils className="text-primary h-8 w-8" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                Food Truck Events
              </h4>
              <p className="text-muted-foreground text-sm font-[family-name:var(--font-body)]">
                Mobile catering with our vibrant food truck experience
              </p>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground font-[family-name:var(--font-body)] mb-4">
              We also cater Summer BBQs, Charity Events, Fundraising Events, Networking Events, and more!
            </p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-heading)]">
              What Our Clients Say
            </h3>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-body)]">
              Testimonials from satisfied customers across Toronto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-secondary">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-muted-foreground mb-4 font-[family-name:var(--font-body)]">
                "JamIcan catered our corporate event and the food was absolutely incredible! The jerk chicken was
                perfectly spiced and the service was professional. Highly recommend!"
              </p>
              <div className="font-semibold text-foreground font-[family-name:var(--font-body)]">
                - Sarah M., Event Coordinator
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-secondary">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-muted-foreground mb-4 font-[family-name:var(--font-body)]">
                "Khimar and his team made our wedding reception unforgettable. The authentic Jamaican flavors
                transported our guests straight to the Caribbean. Thank you!"
              </p>
              <div className="font-semibold text-foreground font-[family-name:var(--font-body)]">
                - Michael & Lisa T.
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-secondary">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-muted-foreground mb-4 font-[family-name:var(--font-body)]">
                "The food truck experience was amazing for our summer BBQ! Everyone loved the curry goat and festival.
                JamIcan brings authentic taste and great vibes."
              </p>
              <div className="font-semibold text-foreground font-[family-name:var(--font-body)]">
                - David R., Private Client
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-heading)]">
              Let's Plan Your Event
            </h3>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-body)]">
              Contact us for a personalized catering experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)]">
                Contact Information
              </h4>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary h-5 w-5" />
                  <div>
                    <p className="font-semibold text-foreground font-[family-name:var(--font-body)]">Location</p>
                    <p className="text-muted-foreground font-[family-name:var(--font-body)]">
                      Toronto, Ontario, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="text-primary h-5 w-5" />
                  <div>
                    <p className="font-semibold text-foreground font-[family-name:var(--font-body)]">Phone</p>
                    <p className="text-muted-foreground font-[family-name:var(--font-body)]">416-672-0636</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="text-primary h-5 w-5" />
                  <div>
                    <p className="font-semibold text-foreground font-[family-name:var(--font-body)]">Email</p>
                    <p className="text-muted-foreground font-[family-name:var(--font-body)]">khimarmorgan@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="text-primary h-5 w-5" />
                  <div>
                    <p className="font-semibold text-foreground font-[family-name:var(--font-body)]">Availability</p>
                    <p className="text-muted-foreground font-[family-name:var(--font-body)]">
                      7 Days a Week
                      <br />
                      Custom scheduling for events
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)]">
                Request Catering Quote
              </h4>

              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-body)]">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground font-[family-name:var(--font-body)]"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-body)]">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground font-[family-name:var(--font-body)]"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-body)]">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground font-[family-name:var(--font-body)]"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-body)]">
                          Event Date
                        </label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground font-[family-name:var(--font-body)]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-body)]">
                          Guest Count
                        </label>
                        <select className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground font-[family-name:var(--font-body)]">
                          <option>10-25 people</option>
                          <option>25-50 people</option>
                          <option>50-100 people</option>
                          <option>100+ people</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-body)]">
                        Event Type
                      </label>
                      <select className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground font-[family-name:var(--font-body)]">
                        <option>Corporate Event</option>
                        <option>Private Party</option>
                        <option>Wedding</option>
                        <option>Gala/Fundraiser</option>
                        <option>Food Truck Event</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 font-[family-name:var(--font-body)]">
                        Event Details
                      </label>
                      <textarea
                        className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground font-[family-name:var(--font-body)]"
                        rows={3}
                        placeholder="Tell us about your event, dietary restrictions, and any special requests..."
                      ></textarea>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-[family-name:var(--font-body)]">
                      Request Catering Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h5 className="text-2xl font-bold text-primary mb-2 font-[family-name:var(--font-heading)]">JamIcan</h5>
          <p className="text-muted-foreground mb-4 font-[family-name:var(--font-body)]">
            The KR Morgan Food Group • Authentic Jamaican Catering • Est. 2013
          </p>
          <p className="text-sm text-muted-foreground font-[family-name:var(--font-body)]">
            © 2025 JamIcan Catering. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
