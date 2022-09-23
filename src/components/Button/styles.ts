import styled from 'styled-components';

export const Container = styled.button`
  @media(min-width: 320px) {
    width: 100%;
    padding: 1rem 1.3125rem ; 
    background: linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%);
    border-radius: 10px;
    border: none;
    color: #fff;
    font-weight: 700;
    line-height: 1.125rem;
    cursor: pointer;

    :hover {
      background: linear-gradient(90deg, #E87BF8 3.25%, #8456EC 100%);
    }
  }

  @media(min-width: 960px ) {
    width: 100%;
    padding: 1rem 1.3125rem ; 
    background: linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%);
    border-radius: 10px;
    border: none;
    color: #fff;
    font-weight: 700;
    line-height: 1.125rem;
    transistion: background 0.2s;
    cursor: pointer;

    :hover {
      background: linear-gradient(90deg, #E87BF8 3.25%, #8456EC 100%);
    }
  }
`