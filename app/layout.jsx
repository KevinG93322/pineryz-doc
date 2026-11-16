import { IBM_Plex_Sans } from 'next/font/google'
import { Layout, Navbar } from 'nextra-theme-docs'
import { DocsFooter } from './DocsFooter'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './docs.css'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-sans'
})

export const metadata = {
  metadataBase: new URL('https://docs.pineryz.com'),
  title: {
    default: 'PineryZ Docs',
    template: '%s – PineryZ Docs'
  },
  description:
    'Documentation for VaultOS, the vault a business offers under its own name.',
  applicationName: 'PineryZ Docs'
}

const navbar = (
  <Navbar
    logo={
      <span className="docs-wordmark">
        <img src="/pineryz-logo.png" alt="" width={28} height={28} />
        <span>PineryZ</span>
        <span className="docs-wordmark-label">Docs</span>
      </span>
    }
  >
    <span className="docs-nav-links">
      <a href="https://pineryz.com">PineryZ</a>
      <a href="https://demo.pineryz.com">Console</a>
    </span>
  </Navbar>
)

const footer = <DocsFooter />

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={plexSans.variable} suppressHydrationWarning>
      <Head
        backgroundColor={{ light: '#f4f6f8', dark: '#0b1c2c' }}
        color={{
          hue: 192,
          saturation: { light: 77, dark: 42 },
          lightness: { light: 25, dark: 68 }
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/pineryz/pineryz-docs/tree/main"
          editLink="Edit this page"
          footer={footer}
          search={null}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
