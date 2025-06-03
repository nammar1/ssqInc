import {
  Tooltip as ChakraTooltip,
  TooltipProps as ChakraTooltipProps,
  Portal,
} from "@chakra-ui/react"
import * as React from "react"

export interface TooltipProps {
  showArrow?: boolean
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
  content: React.ReactNode
  contentProps?: ChakraTooltipProps
  disabled?: boolean
  children: React.ReactNode
  label?: string
  placement?: ChakraTooltipProps["placement"]
  isOpen?: boolean
  defaultIsOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props) {
    const {
      showArrow,
      children,
      disabled,
      portalled = true,
      content,
      contentProps,
      portalRef,
      ...rest
    } = props

    if (disabled) return <>{children}</>

    return (
      <ChakraTooltip {...rest}>
        {children}
        <Portal containerRef={portalRef}>
          {content}
        </Portal>
      </ChakraTooltip>
    )
  },
)
