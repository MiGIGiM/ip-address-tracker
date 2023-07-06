import styled from 'styled-components';

export const Form = styled.form`
  width: 20rem;
  display: flex;
  margin: 0 auto;
  border-radius: 0.65rem;
  overflow: hidden;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  background-color: white;
  margin-block: 1.25rem;

  &:focus-within {
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0);
    outline: transparent;
  }

  @media screen and (min-width: 768px) {
    width: 30rem;
  }

  @media screen and (min-width: 1440px) {
    width: 40rem;
  }
`;

export const Input = styled.input`
  padding-inline: 1.25rem;
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors['clr-100']};
  padding-inline: 1.25rem;
  padding-block: 0.87rem;
`;
