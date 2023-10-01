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
        {/* Inisialisasi router menggunakan BrowserRouter */}
        <BrowserRouter>
          {/* Konfigurasi rute dengan menggunakan komponen Routes */}
          <Routes>
            {/* Rute utama dengan RootLayout */}
            <Route path="/" element={<RootLayout/>}>
              {/* Rute beranda/dashboard */}
              <Route index element={<Dashboard />} />
            </Route>
            {/* Rute-rute yang memerlukan autentikasi dengan PrivateRoute */}
            <Route element={<PrivateRoute/>}>
              {/* Rute dengan RootLayout untuk halaman yang memerlukan autentikasi */}
              <Route path="/" element={<RootLayout/>}>
                {/* Rute untuk membuat konten */}
                <Route path="create" element={<Create />} />
                {/* Rute untuk halaman profil pengguna */}
                <Route path="profile" element={<Profile />} />
                {/* Rute untuk halaman detail item */}
                <Route path="/detail/:id" element={<Detail />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
