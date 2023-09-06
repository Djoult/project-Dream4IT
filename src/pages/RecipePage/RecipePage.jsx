import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setToken, instance } from '../../api/auth';
import EllipsesLayout from '../../components/EllipsesLayout/EllipsesLayout';
import RecipePageHero from '../../components/RecipePageHero/RecipePageHero.jsx';
import RecipeInngredientsList from '../../components/RecipeInngredientsList/RecipeInngredientsList.jsx';

const Page = styled.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`;

export const Container = styled.div`
  padding: 80px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 32px 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 100px 62px 100px;
  }
`;
const RecipePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setResipe] = useState(null);
  const { recipeId } = useParams();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    setToken(token);

    setIsLoading(true);

    instance
      .get(`/api/recipes/${recipeId}`)
      .then(res => {
        console.log(res.data);
        const data = res.data;

        setResipe(data);
      })
      .catch(error => console.log(error.message))
      .finally(setIsLoading(false));
  }, [recipeId]);

  return (
    <>
      <Page>
        <EllipsesLayout />
        <Container>
          {recipe !== null && (
            <>
              <RecipePageHero recipe={recipe} />
              <RecipeInngredientsList recipe={recipe} />
            </>
          )}
        </Container>
      </Page>
    </>
  );
};

export default RecipePage;
