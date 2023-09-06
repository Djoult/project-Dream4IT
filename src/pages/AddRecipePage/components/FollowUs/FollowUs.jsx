/* eslint-disable react/prop-types */
import { SubtitleSec } from '../../../../styles/shared';
import { Wrapper } from './FollowUs.styled';
import { Socials } from './Socials';

export const FollowUs = () => {
  return (
    <Wrapper>
      <SubtitleSec>Follow us</SubtitleSec>
      <Socials gap="16px" />
    </Wrapper>
  );
};
