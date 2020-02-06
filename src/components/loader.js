import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import { IconMupati } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins } from '@styles';
const { colors } = theme;

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${colors.darkestNavy};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;
const StyledLogo = styled.div`
  width: max-content;
  // max-width: 100px;
  transition: ${theme.transition};
  opacity: ${props => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: #ddd29a;
    user-select: none;

    #R {
      opacity: 0;
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });
    loader
      .add({
        targets: '#logo .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 800,
        delay: function(el, i) {
          return i * 250;
        },
        direction: 'alternate',
        loop: true,
      })
      .add({
        targets: '#logo #stick',
        duration: 500,
        easing: 'linear',
        translateX: -20,
        translateY: 25,
      })
      .add({
        targets: '#logo #R',
        duration: 800,
        easing: 'easeInOutQuart',
        opacity: 1,
        translateX: 465.0,
        translateY: 18.0,
      })
      .add({
        targets: '#logo #stick',
        duration: 200,
        easing: 'linear',
        translateX: 20,
        translateY: -15,
      })
      .add({
        targets: '#logo #R',
        duration: 300,
        easing: 'linear',
        translateX: 485.0,
        translateY: -48.0,
      })
      .add({
        targets: '#logo',
        delay: 700,
        duration: 300,
        easing: 'easeInOutSine',
        opacity: 0,
        scale: 0.2,
      })
      .add({
        targets: '.loader',
        duration: 100,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledContainer className="loader">
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <StyledLogo isMounted={isMounted}>
        <IconMupati />
      </StyledLogo>
    </StyledContainer>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
