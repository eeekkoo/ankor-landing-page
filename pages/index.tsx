import React, { useState } from 'react';
import { Container, Box, Heading, Text, Divider, Flex, CardLink } from '@modulz/radix';
import { BlogCardGrid } from '../components/BlogCardGrid';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { MarketingButton } from '../components/MarketingButtton';
import { LegacyComposerHero } from '../components/LegacyHeroIllustration/LegacyComposerHero';
import { HideInProd } from '../components/HideInProd';
import { FeatureCard } from '../components/FeatureCard';
import { JoinWaitlist } from '../components/JoinWaitlist';

const Home = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Container size={2} mt={6} sx={{ textAlign: 'center' }}>
        <Heading size={5} mb={3}>
          Time tracking for Linear
        </Heading>
      </Container>

      <Container size={2} sx={{ textAlign: 'center', px: [6, '120px'] }}>
        <Heading as="h2" size={2} mb={6} sx={{ color: 'gray700', lineHeight: '3', fontWeight: 400 }}>
          Time-tracking apps today are not suited to the user who utilises keyboard shortcuts in their daily workflow.
          Performing repetitive tasks by pointing and clicking is frustrating. With Ankor, we optimise for the keyboard.
        </Heading>
        <JoinWaitlist />
        {/* <MarketingButton as="a" href="https://q2k0h6bc7lq.typeform.com/to/GJMeDrrU" target="_blank" rel="noopener">
          Apply for beta access
          <Box as="span" ml={2} aria-hidden>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M5.5 3.5L11.5 3.5L11.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.5 11.5L11.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Box>
        </MarketingButton> */}

        <Box mt={3}>
          <Text as="p" size={2} sx={{ color: 'gray700', lineHeight: '1' }}>
            We're currently in private alpha.
          </Text>
        </Box>
      </Container>

      <LegacyComposerHero />
      {/* <Divider size={2} my={8} mx="auto" /> */}

      <Box my={8}>
        <Container size={1} sx={{ textAlign: 'center' }}>
          <Text as="p" size={4} mb={4}>
            Built from
          </Text>
        </Container>

        <Container size={2} sx={{ maxWidth: '1090px', margin: '0 auto' }}>
          <Flex sx={{ alignItems: 'center', justifyContent: 'center' }}>
            <svg
              width="120"
              height="120"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '50px', height: '50px', marginRight: '12px' }}
            >
              <path
                d="M0.403013 37.3991L26.6009 63.597C13.2225 61.3356 2.66442 50.7775 0.403013 37.3991Z"
                fill="#5E6AD2"
              ></path>
              <path
                d="M0 30.2868L33.7132 64C35.7182 63.8929 37.6742 63.6013 39.5645 63.142L0.85799 24.4355C0.398679 26.3259 0.10713 28.2818 0 30.2868Z"
                fill="#5E6AD2"
              ></path>
              <path
                d="M2.53593 19.4042L44.5958 61.4641C46.1277 60.8066 47.598 60.0331 48.9956 59.1546L4.84543 15.0044C3.96691 16.402 3.19339 17.8723 2.53593 19.4042Z"
                fill="#5E6AD2"
              ></path>
              <path
                d="M7.69501 11.1447C13.5677 4.32093 22.2677 0 31.9769 0C49.6628 0 64 14.3372 64 32.0231C64 41.7323 59.6791 50.4323 52.8553 56.305L7.69501 11.1447Z"
                fill="#5E6AD2"
              ></path>
            </svg>
            <svg width="100" height="30" viewBox="0 0 55 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.487393 14H8.86737V11.718H3.25515V0.909091H0.487393V14ZM10.6491 14H13.3722V4.18182H10.6491V14ZM12.017 3.01847C12.8097 3.01847 13.4936 2.41761 13.4936 1.63778C13.4936 0.864346 12.8097 0.263494 12.017 0.263494C11.2308 0.263494 10.5469 0.864346 10.5469 1.63778C10.5469 2.41761 11.2308 3.01847 12.017 3.01847ZM18.2765 8.32386C18.2828 7.05824 19.0371 6.31676 20.1365 6.31676C21.2296 6.31676 21.888 7.03267 21.8816 8.23438V14H24.6046V7.74858C24.6046 5.46023 23.2623 4.05398 21.2168 4.05398C19.7594 4.05398 18.7047 4.76989 18.2637 5.91406H18.1486V4.18182H15.5534V14H18.2765V8.32386ZM31.2507 14.1918C33.6861 14.1918 35.3161 13.0092 35.6996 11.1875L33.1875 11.0213C32.9126 11.7692 32.2031 12.1591 31.3018 12.1591C29.9403 12.1591 29.0774 11.2578 29.0774 9.79403V9.78764H35.7635V9.03977C35.7635 5.70312 33.7436 4.05398 31.1484 4.05398C28.2592 4.05398 26.3864 6.10582 26.3864 9.13565C26.3864 12.2486 28.2337 14.1918 31.2507 14.1918ZM29.0774 8.10014C29.1286 6.98153 29.9851 6.08665 31.1932 6.08665C32.3693 6.08665 33.1875 6.9304 33.2003 8.10014H29.0774ZM40.3786 14.1854C41.8295 14.1854 42.7692 13.5526 43.2486 12.6385H43.3253V14H45.9077V7.37784C45.9077 5.03835 43.907 4.05398 41.7848 4.05398C39.3686 4.05398 37.8409 5.17898 37.4638 6.96875L39.9822 7.1733C40.1676 6.52131 40.7493 6.0419 41.7273 6.0419C42.6669 6.0419 43.1783 6.50213 43.1847 7.3267C43.1911 7.9723 42.5135 8.06818 40.8068 8.23438C38.8636 8.41335 37.1186 9.06534 37.1186 11.2578C37.1186 13.201 38.5057 14.1854 40.3786 14.1854ZM41.1584 12.3061C40.321 12.3061 39.7202 11.9162 39.7202 11.1683C39.7202 10.4013 40.353 10.0241 41.3118 9.88991C41.9062 9.80682 42.8778 9.66619 43.2038 9.44886V10.4908C43.2038 11.5199 42.3537 12.3061 41.1584 12.3061ZM48.0202 14H50.7433V8.44531C50.7496 7.24361 51.619 6.41903 52.7184 6.41903C53.0891 6.41903 53.3896 6.52131 53.6452 6.64915L54.4634 4.39915C54.1055 4.18182 53.6452 4.04119 53.1211 4.04119C52.0153 4.04119 51.1204 4.6804 50.7624 5.89489H50.6602V4.18182H48.0202V14Z"
                fill="#282b2e"
              ></path>
            </svg>
          </Flex>
        </Container>
      </Box>
      <Divider mx="auto" size={2} />
      <Divider mx="auto" size={2} />

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
                No more spinners or save buttons. We sync data on the fly.
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
                Moving a task from In Progress to Done automatically logs time.
              </Text>
            </FeatureCard>
          </BlogCardGrid>
        </Container>
      </Box>
      <Divider mx="auto" size={2} />
      <Divider mx="auto" size={2} />

      <BetaAccess />
    </Box>
  );
};

export default Home;
