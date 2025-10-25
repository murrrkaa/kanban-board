import { Navbar } from "@widgets/navbar/ui";
import { Route, Routes, useLocation } from "react-router-dom";
import { RoutesEnum } from "@shared/routes";
import { SignInPage } from "@/pages/sign-in/ui";
import { QueryProvider } from "@/app/providers/query-provider.tsx";
function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const isSignOut = pathname.includes(RoutesEnum.LOGIN);
  return (
    <QueryProvider>
      <div className="flex flex-row">
        {!isSignOut && <Navbar />}
        <Routes>
          <Route path="/" element={<></>} /> {/*Перенапраление в профиль*/}
          <Route path={RoutesEnum.PROJECTS} element={<></>} />
          <Route path={RoutesEnum.TASKS} element={<></>} />
          <Route path={RoutesEnum.USERS} element={<></>} />
          <Route path={RoutesEnum.PROFILE} element={<></>} />
          <Route path={RoutesEnum.LOGIN} element={<SignInPage />} />
        </Routes>
      </div>
    </QueryProvider>
  );
}

export default App;
