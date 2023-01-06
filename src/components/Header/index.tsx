import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Colors, Dimensions } from '@/styles'
import locales from '@locales/header'
import { Root, LogoContainer } from './styles'

const Header: React.FC = () => {
  return (
    <Root>
      <LogoContainer>
        <h2>{locales.title.toUpperCase()}</h2>
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
