import React, { PropsWithChildren, createContext, useMemo } from 'react';
import { AxiosError } from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { getIPInfo, getUserIP } from '../service/api';

interface IPTrackerContextProps {
  handleSearch: (form: string) => void;
  data: APIResponse | undefined;
  isLoading: boolean;
  isError: boolean;
}

const IPTrackerContext = createContext<IPTrackerContextProps>({
  handleSearch: () => {},
  data: undefined,
  isLoading: false,
  isError: false,
});

const IPTrackerProvider = ({ children }: PropsWithChildren) => {
  const { mutate, data, isLoading, isError } = useMutation({
    mutationFn: getIPInfo,
    onError: (error: AxiosError<{ code: number; messages: string }>) => {
      toast.error(error.response?.data.messages || 'Something went wrong', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    },
    retry: false,
  });

  const {
    data: userIPData,
    isLoading: isUserDataLoading,
    isError: isUserError,
    error,
  } = useQuery<APIResponse, AxiosError<{ code: number; messages: string }>>({
    queryKey: ['userIP'],
    queryFn: getUserIP,
    retry() {
      return false;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const handleSearch = (form: string) => mutate(form);

  if (error) {
    toast.error(error.response?.data.messages || 'Something went wrong', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  const value = useMemo(
    () => ({
      handleSearch,
      data: data || userIPData,
      isLoading: isLoading || isUserDataLoading,
      isError: isError || isUserError,
    }),
    [data, userIPData],
  );

  return (
    <IPTrackerContext.Provider value={value}>
      {children}
    </IPTrackerContext.Provider>
  );
};

export const useIPTracker = () => React.useContext(IPTrackerContext);

export default IPTrackerProvider;
