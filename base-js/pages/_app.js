import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
