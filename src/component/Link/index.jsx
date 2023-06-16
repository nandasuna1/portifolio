import React from 'react'
import { Img, Link } from './styled'

export default function LinkComponent({size = 'auto', hasIcon = false, children, link='#', iconsize=50}) {

  console.log(size);
  const iconSrc = {
    'GitHubLogo': 'img/icons/GitHub-Logo.png',
    'DocLogo': 'img/icons/Doc-Logo.png'
  }
  return (
    <>
        <Link size={size} target='_blank' style={{textDecoration: 'none'}} href={link}>
          {hasIcon && <Img src={iconSrc[hasIcon]} iconsize={iconsize} />}
          {children}
        </Link>
    </>
  )
}
