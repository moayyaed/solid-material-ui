import { Breakpoint, Hidden, Paper } from 'solid-material-ui';
import { styled } from 'solid-styled-components';

const Root = styled('div')`
  flex-grow: 1;
`;

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

const Square = styled(Paper)`
  flex: 1 0 auto;
  color: var(--theme-palette-text-secondary);
  margin: 8px;
  padding: 16px;
  text-align: center;
`;

export function HiddenSample() {
  return (
    <Root>
      <Container>
        <Hidden extraSmallDown>
          <Square>ExtraSmallDown</Square>
        </Hidden>
        <Hidden smallDown>
          <Square>SmallDown</Square>
        </Hidden>
        <Hidden mediumDown>
          <Square>MediumDown</Square>
        </Hidden>
        <Hidden largeDown>
          <Square>LargeDown</Square>
        </Hidden>
        <Hidden extraLargeDown>
          <Square>ExtraLargeDown</Square>
        </Hidden>
        <Hidden only={[Breakpoint.Large]}>
          <Square>Hidden on Large</Square>
        </Hidden>
        <Hidden only={[Breakpoint.Small]}>
          <Square>Hidden on Small</Square>
        </Hidden>
        <Hidden only={[Breakpoint.Large, Breakpoint.Small]}>
          <Square>Hidden on Large and Small</Square>
        </Hidden>
      </Container>
    </Root>
  );
}
