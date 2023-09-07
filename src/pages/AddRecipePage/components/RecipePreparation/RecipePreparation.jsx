import { Subtitle } from '../../../../styles/shared';
import { Container, Description } from './RecipePreparation.styled';
import { useAddRecipe } from '../../../../redux/addRecipe/hooks';
import { useTextArea } from './useTextarea';

export const RecipePreparation = () => {
  const [ref] = useTextArea();
  const { setRecipeInstructions } = useAddRecipe();

  return (
    <Container>
      <Subtitle>Recipe preparation</Subtitle>
      <Description
        ref={ref}
        required
        placeholder="Enter the recipe..."
        onChange={e => setRecipeInstructions(e?.target.value)}
      />
    </Container>
  );
};
