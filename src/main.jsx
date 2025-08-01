import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";


import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async"; // ✅ SEO provider
import AuthProvider from "./Providers/AuthProvider";
import { router } from "./routes/routes";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        
        <HelmetProvider>
          <div className="full-screen">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
        
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
