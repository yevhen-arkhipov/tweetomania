import { useEffect, useState, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../Layout";

const Home = lazy(() => import("../../pages/Home"));
const Tweets = lazy(() => import("../../pages/Tweets"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      )}
    </>
  );
};

export default App;
