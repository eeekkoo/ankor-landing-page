import { CardLink } from '@modulz/radix';

export const FeatureCard = ({ children }) => (
  <CardLink
    sx={{
      bg: 'transparent',
      userSelect: 'none',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {children}
  </CardLink>
);
