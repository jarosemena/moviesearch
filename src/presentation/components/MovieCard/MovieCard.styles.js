import styled from 'styled-components';

export const Card = styled.div`
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--border-radius);
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 2px 8px var(--card-shadow);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px var(--card-shadow);
    background: var(--hover-bg);
  }
`;

export const PosterContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 0%;
  overflow: hidden;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: var(--transition);
  z-index: 2;

  &:hover {
    transform: scale(1.1);
    background: rgba(0, 0, 0, 0.9);
  }
`;

export const Info = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Year = styled.span``;

export const Overview = styled.p`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.4;
`;
