import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";

import { NextUIProvider } from "@nextui-org/react";
import type { LinksFunction } from "@remix-run/node";
import { MetaMask } from "@web3-react/metamask";
import { Url } from "@web3-react/url";
import stylesheet from "~/tailwind.css?url";
import { metaMask, hooks as metaMaskHooks } from "./connectors/metamask";
import { hooks as networkHooks, url } from "./connectors/urls";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

const connectors: [MetaMask | Url, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [url, networkHooks],
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <Web3ReactProvider connectors={connectors}>
            {children}
          </Web3ReactProvider>
        </NextUIProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
