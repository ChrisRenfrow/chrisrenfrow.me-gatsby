import Typography from 'typography'
import GrandView from 'typography-theme-grand-view'

GrandView.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

delete GrandView.googleFonts

const typography = new Typography(GrandView)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
