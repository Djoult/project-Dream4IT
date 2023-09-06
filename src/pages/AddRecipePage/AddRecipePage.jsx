import { PageTitle } from '../../styles/shared';
import { RecipeForm } from './components/RecipeForm/RecipeForm';
import { FollowUs } from './components/FollowUs/FollowUs';
import { PopularRecipes } from './components/PopularRecipes/PopularRecipes';
import { ContentWrapper, Additional } from './AddRecipePage.styled';
import { Section } from '../../styles/shared';
import Ellipses from '../../components/EllipsesLayout/EllipsesLayout';

const AddRecipePage = () => {
  return (
    <Section>
      <Ellipses />
      <PageTitle>Add recipe</PageTitle>
      <ContentWrapper>
        <RecipeForm />
        <Additional>
          <FollowUs />
          <PopularRecipes count={4} />
        </Additional>
      </ContentWrapper>
    </Section>
  );
};

export default AddRecipePage;
