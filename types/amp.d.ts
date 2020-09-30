declare namespace JSX {
  interface AmpImg {
    children?: Element
    alt?: string
    src?: string
    width?: string
    height?: string
    layout?: string
    className?: string
  }

  interface AmpState {
    id?: string
    children?: Element
  }

  interface IntrinsicElements {
    'amp-img': AmpImg
    'amp-state': AmpState
    'amp-install-serviceworker': any
  }
}
