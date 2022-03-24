import { useInfiniteQuery, useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";

import { getApiClient } from "src/modules/axios";
import { IHits } from "src/types/pixabay";

const getHits = (page: number) => {
  return getApiClient().get(
    `/?key=${process.env.REACT_APP_API_KEY}&page=${page}&per_page=24&image_type=photo`
  );
};

export const useGetHits = () => {
  return useInfiniteQuery<AxiosResponse<IHits>, AxiosError>(
    "getHits",
    ({ pageParam = 1 }) => getHits(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const { totalHits } = lastPage.data;
        return allPages.length < Math.ceil(totalHits / 24)
          ? allPages.length + 1
          : undefined;
      },
    }
  );
};

const getHit = (id: string) => {
  return getApiClient().get(`/?key=${process.env.REACT_APP_API_KEY}&id=${id}`);
};

export const useGetHit = (id: string) => {
  return useQuery<AxiosResponse<IHits>, AxiosError>(["getHit", id], () =>
    getHit(id)
  );
};
