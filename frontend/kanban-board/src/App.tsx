import { Navbar } from "@widgets/navbar/ui";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesEnum } from "@shared/routes";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<></>} /> {/*Перенапраление в профиль*/}
        <Route path={RoutesEnum.PROJECTS} element={<></>} />
        <Route path={RoutesEnum.TASKS} element={<></>} />
        <Route path={RoutesEnum.USERS} element={<></>} />
        <Route path={RoutesEnum.PROFILE} element={<></>} />
        <Route path={RoutesEnum.SIGN_OUT} element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
