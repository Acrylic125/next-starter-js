import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProps } from "next/app";

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
