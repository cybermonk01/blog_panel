import React, { useContext } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import List from "./pages/list/List";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import DetailsContextProvider from "./context/DetailsContext";
import AddBlog from "./components/AddBlog";
import BlogDisplay from "./components/BlogDisplay";
import { AuthContext } from "./context/AuthContext";
import UploadFile from "./pages/Gallery/UploadFile";
import Contact from "./pages/Contacts/contact-us";
import ListTable from "./pages/ListTable/ListTable";
import CalendarPage from "./pages/CalendarPage/CalendarPage";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser);
  return (
    <DetailsContextProvider>
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="login" element={<Login />} />
              {/* <Route path="leads" element={<Contact />} /> */}
              <Route
                index
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              {/* <Route path="blog" element={<BlogDisplay />} /> */}
              {/* <Route
                path="blogs"
                element={
                  <div className="blogs">
                    {" "}
                    <BlogDisplay />
                    <AddBlog />
                  </div>
                }
              /> */}
            </Route>
            //gallery route
            <Route path="gallery" element={<UploadFile />} />
            <Route path="blogs">
              <Route path="new" element={<AddBlog />} />
              <Route path="all" element={<BlogDisplay />} />
            </Route>
            <Route path="leads" element={<ListTable />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single id="userId" />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Employees" />}
              />
            </Route>
            <Route path="projects">
              <Route index element={<List />} />
              <Route path=":projectId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </DetailsContextProvider>
  );
};

export default App;
