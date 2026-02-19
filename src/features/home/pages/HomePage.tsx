import UserLayout from "~/components/layout/user/UserLayout";
import {
  BrowseByCategorySection,
  HeroSection,
  PopularRentalsSection,
  StepProcessSection
} from "../components";

const HomePage = () => {
  return (
    <UserLayout>
      <HeroSection />

      <div className="bg-primary-foreground pt-16 pb-20 max-w-6xl 6xl:container mx-auto">
        <BrowseByCategorySection />
        <PopularRentalsSection />
      </div>

      <div className="bg-accent pt-16 pb-20">
        <StepProcessSection />
      </div>
    </UserLayout>
  );
};

export default HomePage;
