import {
  Tooltip as ChakraTooltip,
  UseTooltipProps as ChakraTooltipProps,
  Portal,
} from "@chakra-ui/react"
import * as React from "react"

export interface TooltipProps extends ChakraTooltipProps {
  showArrow?: boolean
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
  content: React.ReactNode
  contentProps?: ChakraTooltipProps
  disabled?: boolean
  children: React.ReactNode
  label?: string
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
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
      <ChakraTooltip.Root {...rest}>
        <ChakraTooltip.Trigger asChild>
          {children}
        </ChakraTooltip.Trigger>
        {portalled ? (
          <Portal container={portalRef}>
            <ChakraTooltip.Positioner>
              <ChakraTooltip.Content ref={ref} {...contentProps}>
                {showArrow && <ChakraTooltip.Arrow />}
                {content}
              </ChakraTooltip.Content>
            </ChakraTooltip.Positioner>
          </Portal>
        ) : (
          <ChakraTooltip.Positioner>
            <ChakraTooltip.Content ref={ref} {...contentProps}>
              {showArrow && <ChakraTooltip.Arrow />}
              {content}
            </ChakraTooltip.Content>
          </ChakraTooltip.Positioner>
        )}
      </ChakraTooltip.Root>
    )
  },
)
