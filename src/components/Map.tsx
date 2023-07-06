import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import styled from 'styled-components';

type Props = {
  lat: number;
  lng: number;
};

const containerStyle = {
  width: '100%',
  height: '100%',
};

const MapContainer = styled.div`
  width: 100%;
  height: calc(100dvh - 35dvh);

  @media screen and (min-width: 768px) {
    height: calc(100dvh - 20dvh);
  }

  @media screen and (min-width: 1440px) {
    height: calc(100dvh - 25dvh);
  }
`;

const Map = (center: Props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_KEY as string,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <MapContainer>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{
          disableDefaultUI: true,
        }}
      >
        <MarkerF position={center} icon="/images/icon-location.svg" />
      </GoogleMap>
    </MapContainer>
  );
};

export default Map;
