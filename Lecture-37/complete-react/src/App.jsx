import React, { Suspense } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
// import Dashboard from "./Components/Dashboard";
const Dashboard = React.lazy(() => import("./Components/Dashboard"));
const Home = React.lazy(() => import("./Components/Home"));
// import Home from "./Components/Home";
// import Users from "./Components/Users";
// import Ref from "./Components/Ref";
// import Reff from "./Components/Reff";
// import Refff from "./Components/Refff";

// function App() {
//   return (
//     <div>
//       {/* <Users /> */}
//       {/* <Ref /> */}
//       {/* <Reff /> */}
//       {/* <Refff /> */}
//     </div>
//   );
// }
// ----------------
function App() {
  let navigate = useNavigate(); //function
  // reloading
  function handleClick1() {
    // window.location.href = "/dashboard";
    navigate("/dashboard");
  }
  function handleClick2() {
    // window.location.href = "/home";
    navigate("/home");
  }

  return (
    <div>
      <nav
        style={{
          height: "50px",
          border: "2px solid black",
          backgroundColor: "lightcyan",
        }}
      >
        <div>MAI NAVBAR HU</div>
        <button onClick={handleClick1}>go to dashboard</button>
        <button onClick={handleClick2}>go to home</button>
        {/* <a href="/home">home</a> */}
        <Link to="/home"> home </Link>
        <Link to="/dashboard"> dashboard </Link>
        {/* <a href="/dashboard">dashboard</a> */}
      </nav>

      <Routes>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback="loading1...">
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense fallback="loading2...">
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
