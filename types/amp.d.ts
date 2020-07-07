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

  interface IntrinsicElements {
    'amp-img': AmpImg
    'amp-install-serviceworker': any
  }
}
