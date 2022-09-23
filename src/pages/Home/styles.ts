import styled from 'styled-components';

export const Container = styled.div`
  @media(min-width: 320px) {
    width: 100%;
    padding: 5.875rem 2.875rem 0  2.875rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  @media(min-width: 960px) {
    max-width: 1550px;
    width: 100%;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }
`
export const Header = styled.header`
  @media(min-width: 320px) {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media(min-width: 960px) {
  display: flex;
  align-items: center;
  flex-direction: flex;
  gap: 1rem;
}
`
export const Title = styled.h1`
  @media(min-width: 320px) {
    text-align: center;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2.25rem;
    color: ${({ theme }) => theme.colors.primary.purpleDark};

    span {
      line-height: 2.5625rem;
      background: linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  @media(min-width: 960px) {
    width: 35.8125rem;
    text-align: right;
    font-weight: 700;
    font-size: 4rem;
    line-height: 4rem;
    color: ${({ theme }) => theme.colors.primary.purpleDark};

    span {
      line-height: 4.625rem;
      background: linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
`
export const Subscription = styled.p`
 @media(min-width: 320px) {
  text-align: center;
  color: ${({ theme }) => theme.colors.neutrals.darkOne};
  font-weight: 300;
  line-height: 1.125rem;
 }

 @media(min-width: 960px) {
  width: 32.5625rem;
  font-size: 1.5rem;
  text-align: right;
  line-height: 1.75rem;
  margin-left: 3rem;
  color: ${({ theme }) => theme.colors.neutrals.darkOne};
 }
`
export const Section = styled.section`
 @media(min-width: 320px) {
  margin:  2.25rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 }

`
export const CardContainer = styled.div`
 @media(min-width: 320px) {
  margin-bottom: 2.125rem;
  text-align: center;
 }
`
export const ButtonContainer = styled.div`
@media(min-width: 320px) {
  width: 11.6875rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media(min-width: 425px) {
  width: 100%;
}

@media(min-width: 768px) {
  width: 100%;
}

@media(min-width: 960px) {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
`