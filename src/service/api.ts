import axios from 'axios';

const BASE_URL = 'https://geo.ipify.org/api/v2/country,city';

const validateParams = (data: string) => {
  const pattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;

  if (pattern.test(data)) {
    return {
      ipAddress: data,
    };
  }

  return {
    domain: data,
  };
};

export const getIPInfo = async (form: string): Promise<APIResponse> => {
  const { data } = await axios.get<APIResponse>(BASE_URL, {
    params: {
      apiKey: import.meta.env.VITE_IPFY_KEY as string,
      ...validateParams(form),
    },
  });

  return data;
};

export const getUserIP = async (): Promise<APIResponse> => {
  const { data } = await axios.get<{ ip: string }>(
    'https://api.ipify.org?format=json',
  );

  const info = await getIPInfo(data.ip);

  return info;
};
