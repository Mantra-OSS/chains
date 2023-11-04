/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface EIP155ChainData {
  /**
   * Name of the Network
   */
  name: string;
  shortName: string;
  /**
   * Optional title for the Network
   */
  title?: string;
  /**
   * Name of the Network
   */
  chain: string;
  /**
   * Icon type
   */
  icon?: string;
  rpc: string[];
  faucets: string[];
  features?: {
    /**
     * feature name - e.g. EIP155
     */
    name?: string;
    [k: string]: unknown;
  }[];
  nativeCurrency: {
    /**
     * Name of the Native Currency
     */
    name?: string;
    /**
     * Symbol of the Native Currency
     */
    symbol?: string;
    /**
     * Decimal points supported
     */
    decimals?: number;
    [k: string]: unknown;
  };
  /**
   * infoURL
   */
  infoURL: string;
  /**
   * Chain ID of the Network
   */
  chainId: number;
  /**
   * Network ID of the Network
   */
  networkId: number;
  /**
   * Slip44 of the Network
   */
  slip44?: number;
  ens?: {
    registry?: string;
    [k: string]: unknown;
  };
  explorers?: {
    name?: string;
    url?: string;
    /**
     * EIP3091 or none
     */
    standard?: string;
    [k: string]: unknown;
  }[];
  parent?: {
    type?: string;
    chain?: string;
    bridges?: {
      url?: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  status?: string;
  redFlags?: "reusedChainId"[];
}
