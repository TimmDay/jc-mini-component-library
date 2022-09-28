import React, { CSSProperties } from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"

import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"

const SIZES = {
  small: {
    "--height": 24 / 16 + "rem",
    "--font-size": 14 + "px",
    "--border-thickness": 1 + "px",
    "--padding-left": 24 + "px",
    "--icon-size": 16 + "px",
  },
  large: {
    "--height": 36 / 16 + "rem",
    "--font-size": 18 + "px",
    "--border-thickness": 2 + "px",
    "--padding-left": 36 + "px",
    "--icon-size": 24 + "px",
  },
}

type Sizes = "small" | "large"

type IconInputProps = {
  label: string
  icon: "search" | "at-sign"
  width: number
  size: Sizes
  placeholder: string
}

const IconInput = (props: IconInputProps) => {
  const { label, icon, width = 250, size, ...delegated } = props
  const styles = SIZES[size] as CSSProperties

  const iconSize = size === "small" ? 16 : 24

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>

      <IconWrapper style={styles}>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>

      <TextInput type="text" width={width} style={styles} {...delegated} />
    </Wrapper>
  )
}

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`
const IconWrapper = styled.i`
  position: absolute;
  height: var(--icon-size);
  left: 4px;
  top: 0;
  bottom: 0;
  margin: auto 0;
`

const TextInput = styled.input`
  width: ${(p) => p.width}px;
  height: var(--height);
  padding-left: var(--height);
  font-size: var(--font-size);
  border: 0;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`
export default IconInput
