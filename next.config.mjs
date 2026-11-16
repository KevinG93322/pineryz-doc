import nextra from 'nextra'

const withNextra = nextra({
  search: false
})

export default withNextra({
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/getting-started', destination: '/vaultos/foundation', permanent: false },
      { source: '/vaultos/demonstration', destination: '/vaultos/foundation', permanent: false },
      { source: '/vaultos/contracts', destination: '/vaultos/foundation', permanent: false }
    ]
  }
})
