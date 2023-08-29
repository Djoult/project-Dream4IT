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
        <Route
          path="/welcome"
          element={
            <PublicRoute>
              <WelcomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SigninPage />
            </PublicRoute>
          }
        />
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              // <PrivateRoute>
                <MainPage />
              // </PrivateRoute>
            }
          />
          <Route
            path="/drinks"
            element={
              <PrivateRoute>
                <DrinksPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute>
                <AddRecipePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/recipe/:recipeId"
            element={
              <PrivateRoute>
                <RecipePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/my"
            element={
              <PrivateRoute>
                <MyRecipesPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/favorite"
            element={
              <PrivateRoute>
                <FavoritePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/terms"
            element={
              <PrivateRoute>
                <TermsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/privacy"
            element={
              <PrivateRoute>
                <PrivacyPage />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              <PublicRoute>
                <NotFoundPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
