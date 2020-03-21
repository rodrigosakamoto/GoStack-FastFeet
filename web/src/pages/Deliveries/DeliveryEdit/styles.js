import styled from 'styled-components';
import AsyncSelect from 'react-select/async';

export const Container = styled.div`
  padding: 0 270px;
`;

export const Content = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 4px;

  div.container {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 30px;

    > div {
      p {
        font-size: 14px;
        font-weight: bold;
        color: #444;
        margin-bottom: 10px;
      }
    }
  }
  > p {
    margin-top: 15px;
    font-size: 14px;
    font-weight: bold;
    color: #444;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #999;
    font-size: 16px;
  }
`;

export const Select = styled(AsyncSelect)`
  font-size: 16px;
  color: #999;
`;
