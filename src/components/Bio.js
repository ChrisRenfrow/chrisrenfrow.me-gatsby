import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
      <div style={{
        width: rhythm(1.5),
        height: rhythm(1.5),
        marginRight: rhythm(1 / 2),
        marginBottom: '0px', 
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '50%',
      }}>
        <img
          src={profilePic}
          alt={`Chris Renfrow`}
          style={{
            height: 'auto',
            width: rhythm(2),
            marginTop: '-25%',
          }}
        />
      </div>
        <p>
          A blog by <strong>Chris Renfrow</strong>.{' '}
          <a href="https://twitter.com/crenfrow42">
            He's on Twitter too!
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
