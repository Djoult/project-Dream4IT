import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import Loader from "components/modules/Loader/Loader";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
// import PrivateRoute from "components/modules/PrivateRoute/PrivateRoute";
// import PublicRoute from "components/modules/PublicRoute/PublicRoute";
const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const SignupPage = lazy(() => import("./pages/SignupPage/SignupPage"));
const SigninPage = lazy(() => import("./pages/SigninPage/SigninPage"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const DrinksPage = lazy(() => import("./pages/DrinksPage/DrinksPage"));
const AddRecipePage = lazy(() => import("./pages/AddRecipePage/AddRecipePage"));
const RecipePage = lazy(() => import("./pages/RecipePage/RecipePage"));
const MyRecipesPage = lazy(() => import("./pages/MyRecipesPage/MyRecipesPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const TermsPage = lazy(() =>
  import("./pages/TermsOfServicePage/TermsOfServicePage")
);
const PrivacyPage = lazy(() =>
  import("./pages/PrivacyPolicyPage/PrivacyPolicyPage")
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<div>...here will be Loader Component</div>}>
      <Routes>
        {/* <Route element={<PublicRoute />}> */}
        <Route path="/welcome" element={<PublicRoute><WelcomePage /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><SignupPage /></PublicRoute>} />
        <Route path="/signin" element={<PublicRoute><SigninPage /></PublicRoute>} />
        {/* </Route> */}
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PrivateRoute><MainPage /></PrivateRoute>} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
