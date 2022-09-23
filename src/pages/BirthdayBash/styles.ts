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
    gap: 1rem;
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
  text-align: left;
`
