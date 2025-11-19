import { Navbar } from "@widgets/navbar/ui";
import { Route, Routes, useLocation } from "react-router-dom";
import { RoutesEnum } from "@shared/routes";
import { SignInPage } from "@/pages/sign-in/ui";
import { QueryProvider } from "@/app/providers/query-provider.tsx";
import { Redirect } from "@widgets/redirect/ui";
import { AuthProvider } from "@entities/auth/ui";
import { ProfilePage } from "@/pages/profile/ui/profile-page.tsx";
function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const isSignOut = pathname.includes(RoutesEnum.LOGIN);
  return (
    <QueryProvider>
      <AuthProvider>
        <div className="flex flex-row">
          {!isSignOut && <Navbar />}
          <Routes>
            <Route path="/" element={<Redirect />} />
            <Route path={RoutesEnum.DASHBOARDS} element={<></>} />
            <Route path={RoutesEnum.PROJECTS} element={<></>} />
            <Route path={RoutesEnum.TASKS} element={<></>} />
            <Route path={RoutesEnum.USERS} element={<></>} />
            <Route path={RoutesEnum.PROFILE} element={<ProfilePage />} />
            <Route path={RoutesEnum.LOGIN} element={<SignInPage />} />
            <Route path="*" element={<Redirect />} />
          </Routes>
        </div>
      </AuthProvider>
    </QueryProvider>
  );
}

export default App;
