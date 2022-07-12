import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Loading>
      <ThreeDots color="green" aria-label="Loading" />
    </Loading>
  );
};

const Loading = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Loader;
