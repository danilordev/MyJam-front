import { createBrowserRouter } from "react-router-dom";
import Aulas from "../components/aulas/Aulas";
import Slider from "../components/slideDepoimento/SliderDepoimento";
import Home from "../pages/home";
import { LessonsTwo } from "../pages/lessonsTwo";
import { LessonsThree } from "../pages/lessonsThree ";
import { OnBoarding } from "../pages/Onboarding";
import { LessonsFour } from "../pages/lessonsFour";
import { Lessons } from "../pages/lessonsOne";



const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/onboarding",
    element: <OnBoarding />,
  },
  {
    path: "/aula",
    element: <Aulas />,
  },
  {
    path: "/lessons/1",
    element: <Lessons />,
  },
  {
    path: "/lessons/2",
    element: <LessonsTwo />,
  },
  {
    path: "/lessons/3",
    element: <LessonsThree />,
  },
  {
    path: "/lessons/4",
    element: <LessonsFour />,
  }
  
  
]);

export default router;
