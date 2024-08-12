import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useRoutes,
} from "react-router-dom";
import { supabase } from "./client.js";
import AddCreator from "./pages/AddCreator.jsx";
import EditCreator from "./pages/EditCreator.jsx";
import ShowCreators from "./pages/ShowCreators.jsx";
import ViewCreator from "./pages/ViewCreator.jsx";

function App() {
  const [creators, setCreators] = useState(0);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from("Creators").select();
      setCreators(data);
      console.log(data);
    };
    fetchCreators();
  }, []);

  return (
    <Router>
      <nav id="navBar">
        <Link className="navItem" to="/">
          Home
        </Link>{" "}
        <br />
        <Link className="navItem" to="/new">
          New Creator
        </Link>
      </nav>
      <div id="root">
        <div className="header">
          <h1>CreatorVerse</h1>
        </div>
        <Routes>
          <Route path="/" element={<ShowCreators data={creators} />}></Route>
          <Route path="/new" element={<AddCreator />}></Route>
          <Route path="/creatorDetails/:id" element={<ViewCreator />}></Route>
          <Route
            path="/edit/:id"
            element={<EditCreator data={creators} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
