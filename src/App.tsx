import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { IntlProvider } from "react-intl";
import { useState } from "react";
import { LocaleContext, getMessages, defaultLocale, SupportedLocale } from "./contexts/LocaleContext";

import Homeuwu from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CartPage from "./pages/CartPage/CartPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import StoresPage from "./pages/StoresPage/StoresPage";

const queryClient = new QueryClient();

function App() {
  const [locale, setLocale] = useState<SupportedLocale>(defaultLocale);

  return (
    <QueryClientProvider client={queryClient}>
      <LocaleContext.Provider value={{ locale, changeLocale: setLocale }}>
        <IntlProvider locale={locale} messages={getMessages(locale)}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Navigate to={"/login"} />} />
              <Route path="home" element={<Homeuwu />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="menu" element={<MenuPage />} />
              <Route path="stores" element={<StoresPage />} />
            </Routes>
          </BrowserRouter>
        </IntlProvider>
      </LocaleContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
