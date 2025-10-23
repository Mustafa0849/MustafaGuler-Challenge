import { getFullnodeUrl } from "@mysten/sui/client";
import { createNetworkConfig } from "@mysten/dapp-kit";

/**
 * Package ID retrieved from transaction summary, after runnning `sui client publish`
 *
 * Example:
 * ```bash
 *  Published Objects:
 * ┌──
 * │ PackageID: 0xdbd32a4b9802fab3bca9f7c7cb339d9a88d3b271581280cb83df487ce87a65e6
 * │ Version: 1
 * │ Digest: bn8Vs7TgMzhyPN4GtjDdjTfufX67dErp4926bQeCSFr
 * │ Modules: arena, hero, marketplace
 * └──
 */
const packageId = "0x709fc78012ceb653fee978425c41a7fcafb01d27bf9371b361de7f4a3adda1e8";

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
      variables: { packageId: 0x709fc78012ceb653fee978425c41a7fcafb01d27bf9371b361de7f4a3adda1e8 },
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: { packageId: 0x709fc78012ceb653fee978425c41a7fcafb01d27bf9371b361de7f4a3adda1e8 },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: { packageId: 0x709fc78012ceb653fee978425c41a7fcafb01d27bf9371b361de7f4a3adda1e8 },
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
