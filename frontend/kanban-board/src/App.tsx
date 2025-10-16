import { Navbar } from "@widgets/navbar/ui";
import { Route, Routes, useLocation } from "react-router-dom";
import { RoutesEnum } from "@shared/routes";
import { SignIn } from "@/pages/sign-in/ui";
function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const isSignOut = pathname.includes(RoutesEnum.SIGN_OUT);
  return (
    <div className="flex flex-row">
      {!isSignOut && <Navbar />}
      <Routes>
        <Route path="/" element={<></>} /> {/*Перенапраление в профиль*/}
        <Route path={RoutesEnum.PROJECTS} element={<></>} />
        <Route path={RoutesEnum.TASKS} element={<></>} />
        <Route path={RoutesEnum.USERS} element={<></>} />
        <Route path={RoutesEnum.PROFILE} element={<></>} />
        <Route path={RoutesEnum.SIGN_OUT} element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
