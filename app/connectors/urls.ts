import { initializeConnector } from "@web3-react/core";
import { Url } from "@web3-react/url";

export const [url, hooks] = initializeConnector<Url>(
  (actions) => new Url({ actions, url: "http://localhost:7545" })
);
