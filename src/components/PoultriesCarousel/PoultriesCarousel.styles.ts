import { Colors, createMinWidthMediaQuery, MAIN_FONT } from '@cig-platform/ui'
import styled from 'styled-components'

export const StyledContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 30px);
  margin: 0 auto;

  ${createMinWidthMediaQuery(`
    width: 100%;
  `)}
`

export const StyledTitle = styled.p`
  text-align: center;
  font-family: ${MAIN_FONT};
  text-transform: uppercase;
  color: ${Colors.Black};
  position: relative;
  display: flex;

  &::before, &::after {
    content: "";
    position: absolute;
    background-color: ${Colors.Black};
    width: 50vw;
    height: 2px;
    top: 50%;
  }

  &::before {
    left: 0;
    transform: translate(-102%,-50%);
  }

  &::after {
    right: 0;
    transform: translate(102%,-50%);
  }
`

export const StyledCarousel = styled.div`
  width: 100%;
`
