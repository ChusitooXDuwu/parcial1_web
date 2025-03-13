import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Loginuwu from "./pages/LoginPage/LoginPage";
import Homeuwu from "./pages/HomePage/HomePage";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          
            <Route index element={<Navigate to={"./login"} />}></Route>
            <Route path="login" element={<Loginuwu />} />
            <Route path="home"  element={<Homeuwu />}/>
          
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
