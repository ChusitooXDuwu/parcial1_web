import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Homeuwu from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CartPage from "./pages/CartPage/CartPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import StoresPage from "./pages/StoresPage/StoresPage";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          
            <Route index element={<Navigate to={"./login"} />}></Route>
            
            <Route path="home"  element={<Homeuwu />}/>
            <Route path="login" element={<LoginPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="stores" element={<StoresPage />} />

          
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
