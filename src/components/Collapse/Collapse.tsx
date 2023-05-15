import { useCallback } from 'react'
import Transition from 'react-transition-group/Transition'
import createChainedFunction from 'utils/createChainedFunction'
import { CollapseProps, CollapseDefaultProps } from './types'

const defaultProps: CollapseDefaultProps = {
  orientation: 'vertical',
  includingMargins: false,
}

// TODO: Transition 단계마다 transition 처리할 수 있는 util func 개발 후 아래에 적용
// 그리고 props 처리
// 아마 offsetHeight, offsetWidth 가져와서 해야할듯.
// offset*이 padding, border, scrollbar w or h 값 포함한 것이니까

const Collapse = ({
  in: inProps,
  orientation,
  includingMargins,
  children,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  ...props
}: CollapseProps): JSX.Element => {
  const handleChainedEnter = useCallback(
    () =>
      createChainedFunction((node, isAppearing) => {
        // TODO: implement this func
      }, onEnter),
    [onEnter]
  )

  const handleChainedEntering = useCallback(
    () =>
      createChainedFunction((node, isAppearing) => {
        // TODO: implement this func
      }, onEntering),
    [onEntering]
  )

  const handleChainedEntered = useCallback(
    () =>
      createChainedFunction((node, isAppearing) => {
        // TODO: implement this func
      }, onEntered),
    [onEntered]
  )

  const handleChainedExit = useCallback(
    () =>
      createChainedFunction((node) => {
        // TODO: implement this func
      }, onExit),
    [onExit]
  )

  const handleChainedExiting = useCallback(
    () =>
      createChainedFunction((node) => {
        // TODO: implement this func
      }, onExiting),
    [onExiting]
  )

  const handleChainedExited = useCallback(
    () =>
      createChainedFunction((node) => {
        // TODO: implement this func
      }, onExited),
    [onExited]
  )

  const handleChainedEndListener = useCallback(
    () => createChainedFunction(addEndListener),
    [addEndListener]
  )

  return (
    <Transition
      in={inProps}
      addEndListener={handleChainedEndListener}
      onEnter={handleChainedEnter}
      onEntering={handleChainedEntering}
      onEntered={handleChainedEntered}
      onExit={handleChainedExit}
      onExiting={handleChainedExiting}
      onExited={handleChainedExited}
      {...props}
    >
      <h1>HAHA</h1>
    </Transition>
  )
}

Collapse.defaultProps = defaultProps

export default Collapse
