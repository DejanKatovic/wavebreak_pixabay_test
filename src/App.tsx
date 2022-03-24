import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "src/pages/home";
import { Detail } from "src/pages/detail";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:img_id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
