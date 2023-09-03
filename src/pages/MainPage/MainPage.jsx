import HeroSection from "../../components/Hero/Hero";
import PopularCategories from "../../components/PopularCategories/PopularCategories";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/drinks");
  };
  return (
    <>
      <HeroSection
        title="Craft Your Perfect Drink with Drink Master"
        description="Unlock your inner mixologist with Drink Master, 
        your one-stop destination for exploring, crafting, 
        and mastering the world's finest beverages. "
      ></HeroSection>
      <PopularCategories categoryDrink="Ordinary Drink" />
      <PopularCategories categoryDrink="Cocktail" />
      <PopularCategories categoryDrink="Shake" />
      <PopularCategories categoryDrink="Other/Unknown" />
      <button onClick={handleButtonClick}>Other drinks</button>
    </>
  );
};

export default MainPage;
