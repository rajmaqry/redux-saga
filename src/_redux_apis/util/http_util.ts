import { getExtensionSDK } from "@looker/extension-sdk";

let extensionSDK: any = null;

export const httpRequest = (resource: string, init: { [key: string]: any }) => {
  if (!extensionSDK) {
    extensionSDK = getExtensionSDK();
  }
  return extensionSDK.serverProxy(resource, init);
};
