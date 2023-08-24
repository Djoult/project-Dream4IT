import React from 'react';
import { ReactComponent as Facebook } from '../../images/facebook.svg';
import { ReactComponent as Instagram } from '../../images/instagram.svg';
import { ReactComponent as Youtube } from '../../images/youtube.svg';
import { SocialsItem, SocialsLink, SocialsList, SocialsWrapper } from './Socials.styled';

const Socials = () => {
  return (
        <>
    <SocialsWrapper>
            <SocialsList>
                <SocialsItem>
                    <SocialsLink
                        href="https://facebook.com/"
                        aria-label="Facebook link"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                    <Facebook/>
                    </SocialsLink>
                </SocialsItem>
                <SocialsItem>
                    <SocialsLink
                        href="https://instagram.com/"
                        aria-label="Instagram link"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                    <Instagram/>
                    </SocialsLink>
                </SocialsItem>
                <SocialsItem>
                    <SocialsLink
                        href="https://youtube.com/"
                        aria-label="Youtube link"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                    <Youtube/>
                    </SocialsLink>
                    </SocialsItem>
                </SocialsList>
    </SocialsWrapper>
    </>
  );
};

export default Socials;
