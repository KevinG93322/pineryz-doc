import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://docs.pineryz.com'),
  title: {
    default: 'PineryZ Docs',
    template: '%s – PineryZ Docs'
  },
  description:
    'Documentation for PineryZ and VaultOS — on-chain vault infrastructure under development.',
  applicationName: 'PineryZ Docs'
}

const navbar = (
  <Navbar
    logo={<b>PineryZ Docs</b>}
    projectLink="https://pineryz.com"
  />
)

const footer = (
  <Footer>
    © {new Date().getFullYear()} PineryZ ·{' '}
    <a href="https://pineryz.com">pineryz.com</a>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/pineryz/pineryz-docs/tree/main"
          editLink="Edit this page"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
