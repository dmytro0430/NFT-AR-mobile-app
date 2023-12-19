import { getAnNFTDataAction } from '@actions';
import { APP } from '@constants';
import { getAnNFTData, getNFTsData } from '@selectors';
import { isObjectEmpty } from '@utils';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useGetNFT = ({
  id,
  mockData,
}: {
  id: string;
  mockData: object[];
}) => {
  const [nft, setNft] = useState({});

  const dispatch = useDispatch();
  const nftsData = useSelector(getNFTsData);
  const anNFT = useSelector(getAnNFTData);

  useEffect(() => {
    const getAnNFT = () => {
      // @ts-ignore
      const mock = mockData.find(item => item.id === id) ?? {};
      if ('id' in mock) {
        setNft(mock);
        return;
      }
      const data = nftsData?.filter(
        (item: { identifier: string }) => item.identifier === id,
      )[0];
      if (isObjectEmpty(data)) return;
      if (anNFT?.identifier === id) {
        setNft(anNFT);
        return;
      }
      const payload = {
        chain: APP.CHAIN,
        address: data.contract,
        identifier: data.identifier,
        imageUrl: data.imageUrl,
      };
      dispatch(getAnNFTDataAction(payload));
    };
    getAnNFT();
  }, [nftsData]);

  useEffect(() => {
    if (anNFT?.identifier === id) {
      setNft(anNFT);
      return;
    }
  }, [anNFT]);

  return nft;
};
