import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Colors, Dimensions } from '@/styles'
import locales from '@locales/header'
import { Root, LogoContainer, Title } from './styles'

const Header: React.FC = () => {
  return (
    <Root>
      <LogoContainer>
        <Title>{locales.title.toUpperCase()}</Title>
      </LogoContainer>
      <FiMenu
        cursor="pointer"
        color={Colors.black0a}
        size={Dimensions.px.size30}
      />
    </Root>
  )
}

export default Header
