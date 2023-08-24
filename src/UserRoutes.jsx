import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import Loader from "components/modules/Loader/Loader";
import SharedLayout from "./components/SharedLayout/SharedLayout";
// import PrivateRoute from "components/modules/PrivateRoute/PrivateRoute";
// import PublicRoute from "components/modules/PublicRoute/PublicRoute";
const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const DrinksPage = lazy(() => import("./pages/DrinksPage/DrinksPage"));
const AddRecipePage = lazy(() => import("./pages/AddRecipePage/AddRecipePage"));
const RecipePage = lazy(() => import("./pages/RecipePage/RecipePage"));
const MyRecipesPage = lazy(() => import("./pages/MyRecipesPage/MyRecipesPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<div>...here will be Loader Component</div>}>
      <Routes>
        {/* <Route element={<PublicRoute />}> */}
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        {/* </Route> */}
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/drinks/:categoryName" element={<DrinksPage />} />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Route>
        {/* </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
