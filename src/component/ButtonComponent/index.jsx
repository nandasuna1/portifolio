import React, { Children } from 'react'
import { Button, Img } from './styled'

export default function ButtonComponent({size = 'auto', hasIcon = false, children}) {

  const iconSrc = {
    'GitHubLogo': 'img/icons/GitHub-Logo.png',
    'Linkedin': 'img/icons/linkedin.png'
  }
  return (
    <>
        <Button size={size}>
          {hasIcon && <Img src={iconSrc[hasIcon]} />}
          {children}
        </Button>
    </>
  )
}
