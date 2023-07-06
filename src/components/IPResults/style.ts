import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 0.5rem;
  width: calc(100% - 3rem);
  padding-block: 1.1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  z-index: 1;
  min-height: 17rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  padding-inline: 2.25rem;

  @media screen and (min-width: 768px) {
    max-width: 50rem;
    top: 15%;
    min-height: min-content;
    padding-inline: 0;
    flex-direction: row;
    align-items: baseline;
    column-gap: 1.5rem;

    & > div {
      padding-inline: 1.5rem;
      position: relative;
      text-align: left;

      &:nth-child(3) {
        white-space: nowrap;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    top: 18%;
    width: fit-content;
    max-width: 100%;

    & > span {
      height: 5rem;
      padding-inline: 2.25rem;
      padding-block: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }

    & > div {
      padding-inline: 2.25rem;
      padding-block: 0.5rem;
      position: relative;
      white-space: nowrap;

      &::after {
        content: '';
        width: 1px;
        height: 70px;
        background-color: ${({ theme }) => theme.colors['clr-900']};
        position: absolute;
        top: 60%;
        transform: translateY(-50%);
        right: 0;
      }

      &:last-child {
        width: 30ch;
        white-space: pre-wrap;

        &::after {
          display: none;
        }
      }
    }
  }
`;

export const Label = styled.span`
  font-weight: ${({ theme }) => theme.fonts['fw-700']};
  font-size: 0.6rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['clr-900']};
  letter-spacing: 0.1rem;

  @media screen and (min-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fonts['fw-500']};
  font-size: 1rem;
  margin-top: 0.5rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1.65rem;
  }
`;
