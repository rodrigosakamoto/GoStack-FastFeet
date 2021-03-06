import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    ul {
      display: flex;

      a {
        color: #999;
        font-size: 15px;
        font-weight: bold;
        margin-right: 20px;

        &:hover {
          color: ${darken(0.1, '#999')};
        }

        &.active {
          color: #444;
        }
      }
    }

    img {
      height: 26px;
      margin-right: 30px;
      padding-right: 30px;
      border-right: 1px solid #ddd;
    }
  }

  aside {
    display: flex;
    flex-direction: column;

    strong {
      margin: 0 0 5px 0;
      font-size: 14px;
      font-weight: bold;
      color: #666;
    }

    button {
      border: 0;
      background: none;
      color: #de3b3b;
      font-size: 14px;
      text-align: right;

      &:hover {
        color: ${darken(0.1, '#de3b3b')};
      }
    }
  }
`;
