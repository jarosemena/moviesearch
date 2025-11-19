import {
  Card,
  PosterSkeleton,
  InfoSkeleton,
  TitleSkeleton,
  MetaSkeleton,
  LineSkeleton,
} from './MovieCardSkeleton.styles';

export const MovieCardSkeleton = () => {
  return (
    <Card>
      <PosterSkeleton />
      <InfoSkeleton>
        <TitleSkeleton />
        <MetaSkeleton>
          <LineSkeleton $width="60px" />
          <LineSkeleton $width="40px" />
        </MetaSkeleton>
        <LineSkeleton $width="100%" />
        <LineSkeleton $width="80%" />
      </InfoSkeleton>
    </Card>
  );
};
