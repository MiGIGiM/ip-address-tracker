import styled from 'styled-components';
import SearchForm from './components/SearchForm';
import IPResults from './components/IPResults';

const Container = styled.div`
  background-image: url('/images/pattern-bg-mobile.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  margin: 0;
  height: 35dvh;
  padding-block-start: 1.5rem;

  & > h2 {
    text-align: center;
    color: white;
    padding-bottom: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    background-image: url('/images/pattern-bg-desktop.png');
    height: 20vh;

    & > h2 {
      margin-bottom: 2rem;
    }
  }

  @media screen and (min-width: 1440px) {
    padding-block-start: 1.5rem;
    height: 25vh;

    & > h2 {
      margin-bottom: 1rem;
    }
  }
`;

const App = () => (
  <>
    <Container>
      <h2>IP Address Tracker</h2>
      <SearchForm />
    </Container>
    <IPResults />
  </>
);

export default App;
