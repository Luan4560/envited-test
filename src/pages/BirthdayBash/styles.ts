import styled from "styled-components";

export const Container = styled.div`
  @media(min-width: 320px) {
    img {
      width: 100%;
      height: 23.4375rem;
      object-fit: cover;
    }
  }
`
export const Content = styled.div`
   @media(min-width: 320px) {
    padding: 0 1.25rem;
   }
`
export const Header = styled.header`
 @media(min-width: 320px) {
   margin-bottom: 2.34375rem;
   margin-top: 0.6875rem;
 }
`
export const Title = styled.h1`
  @media(min-width: 320px) {
    color: ${({ theme }) => theme.colors.primary.purpleDark};
    font-size: 1.75rem;
    line-height: 2rem;
  }
`
export const Description = styled.p`
  @media(min-width: 320px) {
    font-size: 0.875rem;
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.neutrals.darkTwo};
  }
`
export const NextButtonContainer = styled.div`
    @media(min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 21.8125rem;
  }
`
export const NextButton = styled.button`
  @media(min-width: 320px) {
    border: 0;
    display: flex;
    background-color: inherit;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
    transition: 0.2s;

    :hover {
      opacity:  0.8;
    }
  }
`
export const IconNextContainer = styled.div`
  @media(min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    width: 3rem;
    height: 3rem;
  
    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
`
export const NextInfoText = styled.div`
  @media(min-width: 320px) {
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  h2 {
    color: ${({ theme }) => theme.colors.primary.purpleDark};
    margin-left: 1.25rem;
  }

  p {
    margin-left: 1.25rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.neutrals.darkOne}
  }
}
`
export const ArrowIcon = styled.div`
  @media(min-width: 320px) {
    margin-right: -115px;
  }
`
