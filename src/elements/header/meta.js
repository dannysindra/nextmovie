import React from 'react'
import { Block } from 'baseui/block'
import { string, number, element } from 'prop-types'

export const Meta = ({ icon, label, value }) => (
  <Block marginTop="scale600" minWidth="50%">
    <Block color="mono500" font="font200">
      {icon} {label}
    </Block>
    <Block color="mono200" font="font200">
      {value}
    </Block>
  </Block>
)

Meta.propTypes = {
  icon: element,
  label: string,
  value: string,
}
