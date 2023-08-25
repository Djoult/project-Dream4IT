import './App.css'
import {GlobalStyles} from './styles/GlobalStyles.js'
import UserRoutes from './UserRoutes'
import SubscribeForm from './components/SubscribeForm/SubscribeForm'

const App = () => {

  return (
    <GlobalStyles>
      <UserRoutes />
      <SubscribeForm/>
    </GlobalStyles>
  )
}

export default App
