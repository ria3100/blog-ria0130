import * as React from 'react'
import { useTransition, animated } from 'react-spring'
import { useRouter } from 'next/router'

const AnimatedRoute: React.FC = ({ children }) => {
  const router = useRouter()

  const transitions = useTransition(router, router => router.asPath, {
    from: { opacity: 0.8 },
    enter: { opacity: 1 },
    leave: { opacity: 0.8 },
  })

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              {children}
            </animated.div>
          )
      )}
    </>
  )
}

export default AnimatedRoute
