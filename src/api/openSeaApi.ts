import { publicApi } from './setup';

export const retrieveNFTs = ({
  chain,
  address,
  params,
}: {
  address: string;
  chain: string;
  params: object;
}) => publicApi.get(`/chain/${chain}/account/${address}/nfts`, { params });

export const getAnNFT = ({
  chain,
  address,
  identifier,
}: {
  address: string;
  chain: string;
  identifier: string;
}) => publicApi.get(`/chain/${chain}/contract/${address}/nfts/${identifier}`);
