import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Modal = styled.div`
  background: var(--card-bg);
  border-radius: var(--border-radius);
  max-width: 900px;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 0;
    max-width: 100%;
    height: 100%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: var(--text-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: var(--transition);

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

export const Backdrop = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

export const Content = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  font-size: 1rem;
  color: var(--text-secondary);
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Year = styled.span``;

export const Overview = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const FavoriteButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  background: ${props => props.$isFavorite ? 'var(--primary-color)' : 'var(--button-bg)'};
  color: ${props => props.$isFavorite ? '#ffffff' : 'var(--button-text)'};
  border: 1px solid ${props => props.$isFavorite ? 'var(--primary-color)' : 'var(--card-border)'};
  border-radius: var(--border-radius);
  transition: var(--transition);

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.$isFavorite ? '#c40812' : 'var(--button-hover)'};
  }

  &:active {
    background: ${props => props.$isFavorite ? '#a00610' : 'var(--button-active)'};
  }
`;
