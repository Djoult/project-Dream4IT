

import ListCardsTwo from '../../components/ListCardsTwo/ListCardsTwo';
import styled from "@emotion/styled";

const Page = styled.div`
background: #0A0A11;
`


const MyRecipesPage = () => {
  return (
<>
<Page>
  {/* <div>MyRecipesPage</div> */}
        
      <ListCardsTwo />
    </Page>

</>
  )
};

export default MyRecipesPage;