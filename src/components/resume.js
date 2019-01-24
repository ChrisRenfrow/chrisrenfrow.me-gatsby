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

const ContactMethod = props => (
  <div
    css={{
      margin: '5px 10px',
      height: '50px',
      width: 'auto'
    }}
  >
    {/* <img src={ props.icon } alt='contact icon' /> */}
    <h5
      css={{
        marginTop: rhythm(0.5),
        marginBottom: rhythm(0.25),
      }}
    >{ props.title }</h5>
    <p>
      {
        (props.link)
          ? <a href={ props.link }>{ props.value }</a>
          : props.value
      }
    </p>
  </div>
)

const DateRange = props => {
  let range = ''

  if (props.start) {
    if (props.end) {
      if (String(props.start) === String(props.end)) {
        range = `${ props.start }`
      } else {
        range = `${ props.start } - ${ props.end }`
      }
    } else {
      range = `${ props.start } - Present`
    }
  } else {
    return null
  }
  return (<h4 css={{ marginTop: rhythm(0) }}>{ range }</h4>)
}

const Entry = props => (
  <div css={{ marginBottom: rhythm(2) }}>
    <h4
      css={{ marginTop: rhythm(0.5), color: 'black' }}
    ><b>{props.title}</b></h4>
    <h5
      css={{ marginTop: rhythm(0) }}
    >{props.subtitle}</h5>
    <DateRange start={props.start} end={props.end} />
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
        Self-taught software developer with over a year of experience
        writing backend software. When I'm not busy with my job, you will
        find me researching new topics on network/software security, planning my
        home server build, managing my personal system/network, or figuring
        out how to automate the things that I find myself doing frequently.
        \n
        I'm currently open to new opportunities/clients. If you have a need for
        my skills please feel free to contact me using one of the methods
        below.
      "
    />

    <ResumeContainer
      title="Contact"
    >
      <div css={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <ContactMethod
          title="Email"
          value="dev@chrisrenfrow.me"
          link="mailto:dev@chrisrenfrow.me"
        />
        <ContactMethod
          title="Messenger"
          value="m.me/crenfrow42"
          link="https://m.me/crenfrow42"
        />
        <ContactMethod
          title="Phone"
          value="+1 (805) 270-3252"
        />
      </div>
    </ResumeContainer>
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
        <Skill title="React" percentage=".50" />
        <Skill title="C" percentage=".75" />
        <Skill title="Bash" percentage=".66" />
        <Skill title="GNU/Linux" percentage=".75" />
        <Skill title="Python" percentage=".5" />
        <Skill title="Golang" percentage=".5" />
        <Skill title="GCS" percentage=".5" />
        <Skill title="Java" percentage=".33" />
        <Skill title="Security" percentage=".25" />
      </div>
    </ResumeContainer>
    <ResumeContainer
      title="Experience"
    >
      <Entry
        title="Software Developer"
        subtitle="MCrowdsourcing Canada (MC2)"
        start="Sep 2017"
        desc="
          MC2 is a social venture that
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
      <Entry
        title="Contractor / Consultant"
        subtitle="Misc. Clients and Projects"
        start="2015"
        desc="
          I have worked with several small business clients to build websites,
          automate data processing and imports, and have helped friends and
          colleagues with various projects as well as receiving the intensive
          training that 42 Silicon Valley has to to offer. Being on my own,
          I've developed good work habits and been exposed to many types of
          computing issues and tasks.
        "
      />
    </ResumeContainer>
    <ResumeContainer
      title="Projects"
    >
      {/* Redundancy of the /projects page */}
      <Entry
        title="ChrisRenfrow.me"
        start="2018"
        desc="
          My personal website and blog.
          Made with React and Gatsby.js to achieve all the performance
          benefits of a static website while still using modern
          web-development standards.
        "
      />
      <Entry
        title="Interactive AI Storyteller"
        start="2017"
        end="2017"
        desc="
          One of the winning projects made during the 2017 VentureBeat AI
          Hackathon which made use of Google Assistant to create an interactive
          story-telling experience. Made using Firebase Cloud Functions and
          DialogFlow (for conversational intent-matching).
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
