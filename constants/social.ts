interface SocialLink {
  slug: string
  icon: string
  url: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    slug: 'github',
    icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    url: 'https://github.com/Ipambe'
  },
  {
    slug: 'linkedin',
    icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    url: 'https://www.linkedin.com/in/adolfo-rosa'
  },
  {
    slug: 'gmail',
    icon: 'https://cdn-icons-png.flaticon.com/512/281/281769.png',
    url: 'mailto:adolforosa.dev@gmail.com'
  }
]
