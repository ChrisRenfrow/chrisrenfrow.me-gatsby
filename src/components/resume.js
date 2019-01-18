import React from 'react'
import { rhythm } from '../utils/typography'

const ResumeContainer = props => (
  <div>
    <h3
      css={{
        marginBottom: rhythm(0.2),
        display: 'inline-block',
        fontStyle: 'normal'
      }}
    >
      {props.title}
    </h3>
    <hr />
    <div>
      {/* Split by string '\n' to support new lines (i.e. paragraphs) */}
      <div>{props.body && props.body.split('\\n').map((i, key) => {
        return <p key="key">{i}</p>
      })}</div>
    </div>
    {props.children}
  </div>
)

const ProgressBar = props => (
  <div
    css={{
      width: '100%',
      backgroundColor: '#ccc'
    }}
  >
    <div
      css={{
        width: `${ props.percentage * 100 }%`,
        height: '3px',
        backgroundColor: '#000'
      }}
    />
  </div>
)

const Skill = props => (
  <div
    css={{
      margin: '5px 10px',
      height: '50px',
      width: '100px'
    }}
  >
    <h5
      css={{
        marginTop: rhythm(0.5),
        marginBottom: rhythm(0.25),
      }}
    >
      {props.title}</h5>
    <ProgressBar percentage={props.percentage} />
  </div>
)

const Entry = props => (
  <div>
    <h4
      css={{ marginTop: rhythm(0.5) }}
    >{props.title}</h4>
    {(props.start)
      ? <p><b>{props.start} - {props.end || 'Present'}</b></p>
      : null
    }
    {/* Split by string '\n' to support new lines (i.e. paragraphs) */}
    <div>{props.desc && props.desc.split('\\n').map((i, key) => {
      return <p key={key}>{i}</p>
    })}</div>
  </div>
)

export default ({ data }) => (
  <div>
    <ResumeContainer
      title="Summary"
      body="
        Back-end developer aspiring to work in network/software
        security. Interested in blockchain and machine learning
        and how they can be used for everyday applications, but really
        I just enjoy creating maintainable software people make use of.
      "
    />
    <ResumeContainer
      title="Skills"
    >
      <div css={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <Skill title="Node.js" percentage=".75" />
        <Skill title="Firebase" percentage=".75" />
        <Skill title="React" percentage=".33" />
        <Skill title="GCS" percentage=".5" />
        <Skill title="Python" percentage=".5" />
        <Skill title="C" percentage=".75" />
        <Skill title="Bash" percentage=".66" />
        <Skill title="Linux OS" percentage=".75" />
        <Skill title="Golang" percentage=".5" />
        <Skill title="Hacking" percentage=".25" />
        <Skill title="Googling" percentage="1" />
      </div>
    </ResumeContainer>
    <ResumeContainer
      title="Experience"
    >
      {/* Put some experience here */}
      <Entry
        title="MCrowdsourcing Canada"
        start="Sep 2017"
        desc="
          MCrowdsourcing Canada (MC2) is a social venture that
          seeks to transform the way we do common altruistic tasks
          by providing a platform for those that want to contribute
          by taking positive actions, and those that want to sponsor
          and encourage them to do so.
          \n
          For the past year I've been mostly involved in the
          development of the platform's Facebook bot integration
          which consists of a Node.js server running on Google App
          Engine, communicating with Firebase for data, storage, and
          authentication.
        "
      />
    </ResumeContainer>
    <ResumeContainer
      title="Projects"
    >
      {/* Redundancy of the /projects page */}
      <Entry
        title="ChrisRenfrow.me"
        start="Dec 2018"
        desc="
          My personal website and blog.
          Made with React and Gatsby.js to achieve all the performance
          benefits of a static website while still using modern
          web-development standards.
        "
      />
    </ResumeContainer>
    <ResumeContainer
      title="Education"
    >
      <Entry
        title="42 Silicon Valley"
        start="2016"
        end="2018"
        desc="
          42 is a nonprofit, tuition-free programming school created and
          funded by French billionare and philanthropist, Xavier Niel.
          This 3-5 year program departs from the traditional education
          experience by using a peer-to-peer based learning system
          with no classes or teachers and a purely project-based curriculum.
          \n
          I worked with my peers on projects involving computer graphics
          and low level computing. Went on to learn about web development
          using PHP during an intense web development program. And
          quickly achieved my first internship.
        "
      />
    </ResumeContainer>
  </div>
)
