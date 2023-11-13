"use client"
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

export const FacebookMsg = () => {
  return (
    <div>
<FacebookProvider appId="735199028512065" chatSupport>
        <CustomChat pageId="105724509300753" minimized={true}/>
      </FacebookProvider>   

    </div>
  )
}
