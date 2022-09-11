import React from 'react'
import { styled } from 'baseui'
import { KIND } from 'baseui/button'
import { SIZE } from 'baseui/modal'
import Markdown from 'react-markdown'
import { func, node, arrayOf, oneOfType } from 'prop-types'

import { Button, Modal } from '../../components'

export const Blockquote = styled('blockquote', ({ $theme }) => ({
  borderLeft: `0.2em solid ${$theme.colors.mono700}`,
  paddingLeft: '1em',
}))

const Dialog = {
  style: ({ $theme }) => ({
    maxWidth: `${1.25 * $theme.breakpoints.medium}px`,
    display: 'flex',
    flexDirection: 'column',
  }),
}

export const ReviewModal = ({ header, body, onClose, ...rest }) => (
  <Modal
    {...rest}
    unstable_ModalBackdropScroll
    header={header}
    footer={
      <Button kind={KIND.secondary} onClick={onClose}>
        Close
      </Button>
    }
    size={SIZE.auto}
    onClose={onClose}
    overrides={{ Dialog }}
  >
    <Markdown
      components={{
        blockquote: Blockquote,
      }}
    >
      {body}
    </Markdown>
  </Modal>
)

ReviewModal.propTypes = {
  header: oneOfType([node, arrayOf(node)]),
  body: oneOfType([node, arrayOf(node)]).isRequired,
  onClose: func,
}
