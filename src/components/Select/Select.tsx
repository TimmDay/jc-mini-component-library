import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

// remove default icon
// show new chevron icon

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationSelect>
        <Text>
          <span>{displayedValue}</span>
          <Icon id='chevron-down' size={24} strokeWidth={1} />
        </Text>
      </PresentationSelect>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  font-size: 16px;
  width: fit-content;
`

const NativeSelect = styled.select`
  // native select goes over the top, invisible. Still clickable, not visible.
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`

const PresentationSelect = styled.div`
  padding-block: 12px;
  padding-inline: 16px;
  color: ${COLORS.gray700};
  width: fit-content;
  border-radius: 4px;
  background-color: ${COLORS.transparentGray15};

  // + is adjacent sibling combinator. Put the focus outline that is hidden, onto the adjacent presentation bit
  ${NativeSelect}:focus + & {
    outline: 2px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`

const ChevronIcon = styled(Icon)`
  /* color: ${COLORS.gray500}; */
`

export default Select
