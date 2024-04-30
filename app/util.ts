import { MetaMask } from "@web3-react/metamask";
import type { Connector } from "@web3-react/types";
import { Url } from "@web3-react/url";

export function getName(connector: Connector) {
  if (connector instanceof MetaMask) return "MetaMask";
  if (connector instanceof Url) return "Url";
  return "Unknown";
}
