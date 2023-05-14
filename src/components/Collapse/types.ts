import { ReactElement } from 'react'
import { TransitionProps as BaseTransitionProps } from 'react-transition-group/Transition'

type TransitionHandlerKeys =
  | 'onEnter'
  | 'onEntering'
  | 'onEntered'
  | 'onExit'
  | 'onExiting'
  | 'onExited'

type TransitionBasePropsKeys =
  | 'in'
  | 'timeout'
  | 'appear'
  | 'enter'
  | 'exit'
  | 'mountOnEnter'
  | 'unmountOnExit'
  | 'addEndListener'

export type TransitionProps = Pick<
  BaseTransitionProps,
  TransitionHandlerKeys | TransitionBasePropsKeys
>

export type Orientation = 'horizontal' | 'vertical'

export type CollapseDefaultProps = {
  orientation: Orientation
  includingMargins: boolean
}

export interface CollapseProps
  extends Partial<TransitionProps>,
    Partial<CollapseDefaultProps> {
  children: ReactElement
}
