import {
  BrowseByCategorySection,
  HeroSection,
  PopularRentalsSection,
  StepProcessSection
} from "../components";

const HomePage = () => {
  return (
    <div>
      <HeroSection />

      <div className="bg-primary-foreground pt-16 pb-20 max-w-6xl 6xl:container mx-auto">
        <BrowseByCategorySection />
        <PopularRentalsSection />
      </div>

      <div className="bg-accent pt-16 pb-20">
        <StepProcessSection />
      </div>
    </div>
  );
};

export default HomePage;
