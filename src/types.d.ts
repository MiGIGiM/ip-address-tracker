type TLocation = {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: 4560349;
};

type TAs = {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
};

type APIResponse = {
  ip: string;
  location: TLocation;
  domains: string[];
  as: TAs;
  isp: string;
};
