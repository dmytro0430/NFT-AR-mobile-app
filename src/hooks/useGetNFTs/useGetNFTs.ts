import { getNFTsDataAction } from '@actions';
import { APP, MOCK_BUY_BUTTON } from '@constants';
import { getMetaMaskData, getNFTsData } from '@selectors';
import { sortByTitle } from '@utils';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface IAsset {
  collection: string;
  contract: string;
  createdAt: string;
  description: string;
  identifier: string;
  imageUrl: string;
  isDisabled: string;
  isNsfw: string;
  metadataUrl: string;
  name: string;
  tokenStandard: string;
  updatedAt: string;
}

export const useGetNFTs = (mockData: object[], isSortByAdc: boolean) => {
  const dispatch = useDispatch();
  const nfts = useSelector(getNFTsData);
  const metamask = useSelector(getMetaMaskData);

  const [newData, setNewData] = useState<object[]>([]);

  useEffect(() => {
    const getCollection = () => {
      if (metamask === null) return;
      if (nfts === null || !nfts.length) {
        const data = {
          chain: APP.CHAIN,
          address: metamask,
          params: { limit: '50' },
        };
        dispatch(getNFTsDataAction(data));
      }
    };
    getCollection();
  }, [metamask]);

  useEffect(() => {
    const addAssets = () => {
      const assets = nfts?.filter(
        (item: { collection: string }) => item?.collection === APP.SLUG,
      );
      if (!assets?.length) {
        setNewData([...mockData, MOCK_BUY_BUTTON]);
        return;
      }
      const convert = assets.map((asset: IAsset) => {
        return {
          id: asset.identifier,
          imageUrl: asset.imageUrl,
          title: asset.name,
        };
      });
      setNewData([...mockData, ...convert, MOCK_BUY_BUTTON]);
    };
    addAssets();
  }, [nfts]);

  useEffect(() => {
    const onSort = () => {
      if (newData?.length) {
        const newDataCopy = [...newData];
        const lastItem = newDataCopy.pop();

        setNewData([...sortByTitle(newDataCopy, isSortByAdc), lastItem]);
      }
    };
    onSort();
  }, [isSortByAdc]);

  return newData;
};
