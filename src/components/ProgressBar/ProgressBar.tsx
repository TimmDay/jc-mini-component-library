/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role

const SIZES = {
  small: {
    '--borderRadius': 4 + 'px',
    '--padding': 0,
    '--height': 8 + 'px',
  },
  medium: {
    '--borderRadius': 4 + 'px',
    '--padding': 0,
    '--height': 12 + 'px',
  },
  large: {
    '--borderRadius': 8 + 'px',
    '--padding': 4 + 'px',
    '--height': 24 + 'px',
  },
}

type Sizes = 'small' | 'medium' | 'large'
type ProgressBarProps = {
  value: number
  size: Sizes
}

const ProgressBar = ({ value, size }: ProgressBarProps) => {
  const styles = SIZES[size] as React.CSSProperties

  if (!styles) throw Error(`Unknown size passed to ProgressBar: ${size}`)

  return (
    <Wrapper role='progressbar' aria-valuenow={value} style={styles}>
      <VisuallyHidden>{`Progress is ${value}%`}</VisuallyHidden>
      <BarWrapper>
        <Bar progress={value} />
      </BarWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 370px;
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

// BarWrapper exists to trim the corners of bar when the parent has padding.
const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim corners of bar when progress near full */
  overflow: hidden;
`

const Bar = styled.div<{ progress: number }>`
  background-color: ${COLORS.primary};
  width: ${(p) => p.progress}%;
  height: var(--height);
`
export default ProgressBar
