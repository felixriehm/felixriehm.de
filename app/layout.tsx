import type { Metadata } from 'next'
import './globals.css'
import Footer from './ui/footer';
import localFont from 'next/font/local'

export const metadata: Metadata = {
    title: 'felixriehm.de',
    description: 'Website of Felix Riehm',
    authors: [
        {
            name: 'Felix Riehm',
            url: 'https://github.com/felixriehm'
        }
    ],
    robots: {
        index: false
    }
}

const noto_sans_font = localFont(
    {
        src: '../public/font/Noto_Sans/NotoSans-VariableFont_wdth,wght.ttf',
        variable: '--font-noto-sans',
    })

const noto_sans_font_italic = localFont(
    {
        src: '../public/font/Noto_Sans/NotoSans-Italic-VariableFont_wdth,wght.ttf',
        variable: '--font-noto-sans-italic',
    })

const material_icons_rounded_font = localFont(
    {
        src: '../public/font/MaterialIcons/MaterialSymbolsRounded[FILL,GRAD,opsz,wght].woff2',
        variable: '--font-material-icons-rounded',
    })

const material_icons_sharp_font = localFont(
    {
        src: '../public/font/MaterialIcons/MaterialSymbolsSharp[FILL,GRAD,opsz,wght].woff2',
        variable: '--font-material-icons-sharp',
    })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
      <html lang="en">
          <body className={`font-felixriehm font-light text-felixriehm-grey-400 ${noto_sans_font.variable} ${noto_sans_font_italic.variable} ${material_icons_rounded_font.variable} ${material_icons_sharp_font.variable}`}>
              {children}
              <Footer></Footer>
          </body>
      </html>
  )
}
