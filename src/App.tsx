import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import RootLayout from './layouts/RootLayout'
import PrivateRoute from "./components/PrivateRoutes";
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Profile from './pages/Profile'
import Detail from "./pages/Detail";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout/>}>
              <Route index element={<Dashboard />} />
            </Route>
            <Route element={<PrivateRoute/>}>
              <Route path="/" element={<RootLayout/>}>
                <Route path="create" element={<Create />} />
                <Route path="profile" element={<Profile />} />
                <Route path="/detail/:id" element={<Detail />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

