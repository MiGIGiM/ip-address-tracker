import { BeatLoader } from 'react-spinners';
import Map from '../Map';
import { Container, Label, Text } from './style';
import { useIPTracker } from '../../context/IPTrackerContext';

const IPResults = () => {
  const { data, isLoading } = useIPTracker();

  if (isLoading) {
    return (
      <Container>
        <BeatLoader color="hsl(0, 0%, 17%)" />
      </Container>
    );
  }

  return (
    <>
      <Container>
        <div>
          <Label>IP ADDRESS</Label>
          <Text>{data ? data.ip : 'N/A'}</Text>
        </div>
        <div>
          <Label>LOCATION</Label>
          <Text>
            {data
              ? `${data?.location?.city}, ${data?.location?.country} ${data?.location.postalCode}`
              : 'N/A'}
          </Text>
        </div>
        <div>
          <Label>TIMEZONE</Label>
          <Text>{data ? `UTC ${data?.location.timezone}` : 'N/A'}</Text>
        </div>
        <div>
          <Label>ISP</Label>
          <Text>{data ? data.isp : 'N/A'}</Text>
        </div>
      </Container>
      <Map
        lat={data?.location.lat || 13.674507}
        lng={data?.location.lng || -89.240926}
      />
    </>
  );
};

export default IPResults;
