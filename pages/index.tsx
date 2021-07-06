import React from 'react';
import { Container, Box, Heading, Text, Divider, Flex, CardLink } from '@modulz/radix';
import { BlogCardGrid } from '../components/BlogCardGrid';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { MarketingButton } from '../components/MarketingButtton';
import { LegacyComposerHero } from '../components/LegacyHeroIllustration/LegacyComposerHero';
import { HideInProd } from '../components/HideInProd';
import { FeatureCard } from '../components/FeatureCard';

const Home = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Container size={2} mt={6} sx={{ textAlign: 'center' }}>
        <Heading size={5} mb={3}>
          Time tracking for power-users
        </Heading>
      </Container>

      <Container size={2} sx={{ textAlign: 'center', px: [6, '120px'] }}>
        <Heading as="h2" size={2} mb={6} sx={{ color: 'gray700', lineHeight: '3', fontWeight: 400 }}>
          Time-tracking apps today are not suited to the user who utilises keyboard shortcuts in their daily workflow.
          Performing repetitive tasks by pointing and clicking is frustrating. With Ankor, we optimise for the keyboard.
        </Heading>
        <MarketingButton as="a" href="https://modulz.typeform.com/to/fp4gBW" target="_blank" rel="noopener">
          Apply for beta access
          <Box as="span" ml={2} aria-hidden>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M5.5 3.5L11.5 3.5L11.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.5 11.5L11.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Box>
        </MarketingButton>

        <Box mt={3}>
          <Text as="p" size={2} sx={{ color: 'gray700', lineHeight: '1' }}>
            We're currently in private alpha.
          </Text>
        </Box>
      </Container>

      <LegacyComposerHero />
      <Divider size={2} my={8} mx="auto" />

      <HideInProd>
        <Box my={8}>
          <Container size={2} sx={{ textAlign: 'center' }}>
            <Heading as="h3" size={4} mb={4}>
              Features
            </Heading>
          </Container>

          <Container size={2} sx={{ maxWidth: '1090px' }}>
            <BlogCardGrid>
              <FeatureCard>
                <Heading as="h4" size={1} sx={{ fontWeight: 500 }}>
                  Keyboard first
                </Heading>

                <Text as="p" size={3} mt={2} sx={{ color: 'gray700' }}>
                  Ankor is built with keyboard shortcuts front of mind.
                </Text>
              </FeatureCard>

              <FeatureCard>
                <Heading as="h4" size={1} sx={{ fontWeight: 500 }}>
                  Speed
                </Heading>

                <Text as="p" size={3} mt={2} sx={{ color: 'gray700' }}>
                  No more spinners or save button. We sync data on the fly as you move.
                </Text>
              </FeatureCard>

              <FeatureCard>
                <Heading as="h4" size={1} sx={{ fontWeight: 500 }}>
                  Reports
                </Heading>

                <Text as="p" size={3} mt={2} sx={{ color: 'gray700' }}>
                  Review the week. See how well you performed. Improve bottlenecks. Then export as PDF, CSV, or Excel.
                </Text>
              </FeatureCard>

              <FeatureCard>
                <Heading as="h4" size={1} sx={{ fontWeight: 500 }}>
                  Automatic
                </Heading>

                <Text as="p" size={3} mt={2} sx={{ color: 'gray700' }}>
                  Moving from In Progress to Done automatically tracks time.
                </Text>
              </FeatureCard>
            </BlogCardGrid>
          </Container>
        </Box>

        <Divider mx="auto" size={2} />
      </HideInProd>
      <Divider mx="auto" size={2} />

      <BetaAccess />
    </Box>
  );
};

export default Home;
