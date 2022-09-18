module.exports = {
  async redirects() {
    return [
      {
        source: '/movies',
        destination: '/',
        permanent: false,
      },
    ]
  },
  images: {
    domains: ['image.tmdb.org'],
  },
}
