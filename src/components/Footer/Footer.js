import React from "react";
import {
  FaFacebook,
  FaGit,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
} from "./Footer.elements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our super exclusive membership to receive the latest news and
          trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email Id" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>About CASE</FooterLinkTitle>
            <FooterLink to="/">About Us</FooterLink>
            <FooterLink to="/">Culture</FooterLink>
            <FooterLink to="/">Carrers</FooterLink>
            <FooterLink to="/">Blogs</FooterLink>
            <FooterLink to="/">Reports</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/">India</FooterLink>
            <FooterLink to="/">Australia</FooterLink>
            <FooterLink to="/">Canada</FooterLink>
            <FooterLink to="/">Italy</FooterLink>
            <FooterLink to="/">Poland</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/">Social Videos</FooterLink>
            <FooterLink to="/">User's Videos</FooterLink>
            <FooterLink to="/">Happy Customers</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/signup">Facebook</FooterLink>
            <FooterLink to="/">Instagram</FooterLink>
            <FooterLink to="/">Twitter</FooterLink>
            <FooterLink to="/">Github</FooterLink>
            <FooterLink to="/">Linked In</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            CASE
          </SocialLogo>
          <WebsiteRights>CASE &copy; 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedinIn />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Github">
              <FaGit />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
