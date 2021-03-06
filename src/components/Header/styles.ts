import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 720px) {
    padding: 2rem 1rem 8.5rem;
  }

  button {
    height: 3rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--shape);
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 720px) {
      font-size: 0.9rem;
      padding: 0 1.5rem;
      border-radius: 0.4rem;
    }
  }
`
