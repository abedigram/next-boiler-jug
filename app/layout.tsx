import StyledComponentsRegistry from '@/lib/antdRegistry'
import theme from '@/theme/themeConfig'
import { ConfigProvider } from 'antd'
import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import StoreProvider from '@/app/StoreProvider'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const defaultFontFamily = localFont({
  src: '../public/font/IRANYekanXVF.woff2',
  variable: '--default-font-family',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fa' dir='rtl' className={`${defaultFontFamily.variable} font-display bg-sky-700/50`}>
      <body>
        <StoreProvider>
          <StyledComponentsRegistry>
            <ConfigProvider theme={theme} direction='rtl'>
              <div className='mx-auto h-screen max-w-md bg-white'>{children}</div>
            </ConfigProvider>
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  )
}