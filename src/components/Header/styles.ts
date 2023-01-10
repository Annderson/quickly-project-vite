import styled from 'styled-components'
import { Layout, Dimensions, TypeScale } from '@/styles'

const Root = styled(Layout.Container)`
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: space-between;
  padding: ${Dimensions.px.size20};
  width: ${Dimensions.per.sizeFull};
`

const LogoContainer = styled(Layout.CenteredHorizontal)`
  width: ${Dimensions.per.sizeFull};
`

const Title = styled(TypeScale.SansFont20)`
  font-weight: bold;
`

export { Root, LogoContainer, Title }
