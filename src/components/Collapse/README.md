# Collapse

Collapse component에 대한 정의

## Constraint

- children은 항상 single element로 받습니다.

## Props

기본적으로 [react-transition-group/Transition](https://reactcommunity.org/react-transition-group/transition)의 props를 사용합니다.

### children

Type: `ReactElement`

### orientation

Type: `vertical | horizontal` (default: `vertical`)

### includingMargins

Type: `boolean` (default: `false`)

Collapse의 범위에 margins(존재할 경우)를 추가합니다.