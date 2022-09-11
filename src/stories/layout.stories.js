import React from 'react'
import { Content, Section } from '../components/layout'
import { P1 } from '../components/typography'

export default {
  title: 'Layout',
}

export const base = () => (
  <Content>
    <P1>Inside content</P1>
    <Section label="Section 1">
      <P1>Inside section 1</P1>
    </Section>
    <Section label="Section 2">
      <P1>Inside section 2</P1>
    </Section>
  </Content>
)
