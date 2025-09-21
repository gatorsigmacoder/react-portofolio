import { Route, Routes } from "react-router";
import LandingPage from "../pages/LandingPage";
import ShowcaseLayout from "@/layout/showcaseLayout";
import Projects from "@/pages/projects";
import Apis from "@/pages/apis";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/projects"
        element={
          <ShowcaseLayout>
            <Projects />
          </ShowcaseLayout>
        }
      />
      <Route
        path="/apis"
        element={
          <ShowcaseLayout>
            <Apis />
          </ShowcaseLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
