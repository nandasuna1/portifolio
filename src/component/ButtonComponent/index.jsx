import React, { Children } from 'react'
import { Button, Img } from './styled'

export default function ButtonComponent({size = 'auto', hasIcon = false, children}) {

  console.log(size);
  const iconSrc = {
    'GitHubLogo': 'img/icons/GitHub-Logo.png'
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
