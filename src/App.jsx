import styles from "./style";
import {
  Billing,
  Business,
  Button,
  CardDeal,
  ClientSection,
  CTA,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <Navbar />
        <Hero />
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <ClientSection />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
