import React from 'react'
import { Remarkable } from 'remarkable'
import RemarkableReactRenderer from 'remarkable-react'
import { rhythm } from '../utils/typography'

const md = new Remarkable({ breaks: true })
md.renderer = new RemarkableReactRenderer()

const ResumeContainer = props => (
  <div
    id={props.title.toLowerCase()}
  >
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
      { md.render(props.body) }
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
      margin: '5px 20px',
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

// TODO: Move some of this out as a utility/helper
const DateRange = props => {
  let range = ''
  let { start, end } = props
  let startDate = new Date(start)
  let endDate = (end) ? new Date(end) : new Date()
  let duration = {}
  let dateOptions = { year: 'numeric', month: 'short' }

  if (startDate && endDate) {
    let diffTime = Math.abs(startDate.getTime() - endDate.getTime())
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    let diffMonths = Math.ceil(diffDays / (7 * 4))
    let diffYears = Math.ceil(diffMonths / 12)
    duration = (diffMonths < 12)
      ? { value: diffMonths - 1, unit: 'month' }
      : { value: diffYears - 1, unit: 'year' }
  }

  if (start && end) {
    if (String(start) === String(end)) { range = `${ startDate.toLocaleDateString('en-US', dateOptions) }` } else {
      range = `${ startDate.toLocaleDateString('en-US', dateOptions) } - ` +
        `${ endDate.toLocaleDateString('en-US', dateOptions) }`
    }
  } else if (start) {
    range = `${ startDate.toLocaleDateString('en-US', dateOptions) } - Present`
  } else {
    return null
  }

  range += (duration.value > 0)
    ? ` (${ duration.value } ${ (duration.value > 1) ? duration.unit + 's' : duration.unit })`
    : ''

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
    { md.render(props.body) }
  </div>
)

export default ({ data }) => (
  <div>
    <ResumeContainer
      title="Summary"
      body={
        `Hey there! I'm a software developer with over 2 years of professional experience working remotely for clients with big ideas. In my free time you'll find me planning my break into security, preparing for the next [DEF CON](https://defcon.org/), or figuring out a way to automate something in my day-to-day life.
        \nI am currently open to additional opportunities/clients. If you are interested in the services I provide please feel free to reach out to me using one of the [methods](#contact) below.`
      }
    />

    <ResumeContainer
      title="Contact"
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flexBasis: '100%',
          flex: 1
        }}>
          <ContactMethod
            title="Email"
            value="dev@chrisrenfrow.me"
            link="mailto:dev@chrisrenfrow.me"
          />
          <ContactMethod
            title="Keybase"
            value="crenfrow"
            link="https://keybase.io/crenfrow"
          />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flexBasis: '100%',
          flex: 1
        }}>
          <ContactMethod
            title="LinkedIn"
            value="crenfrow"
            link="https://www.linkedin.com/in/crenfrow"
          />
          <ContactMethod
            title="Mobile/Signal"
            value="+1 (805) 270-3252"
            link="tel:+18052703252"
          />
        </div>
      </div>
    </ResumeContainer>
    <ResumeContainer
      title="Skills"
    >
      <div css={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Skill title="Node.js" percentage=".75" />
        <Skill title="Firebase" percentage=".75" />
        <Skill title="C" percentage=".75" />
        <Skill title="Bash" percentage=".75" />
        <Skill title="GNU/Linux" percentage=".75" />
        <Skill title="React" percentage=".50" />
        <Skill title="Python" percentage=".50" />
        <Skill title="Golang" percentage=".50" />
        <Skill title="Security" percentage=".33" />
      </div>
    </ResumeContainer>
    <ResumeContainer
      title="Experience"
    >

      <Entry
        title="Software Developer"
        subtitle="Findable"
        start="2019-07"
        body={
          `A platform that makes renting to or leasing from anyone as easy and painless as it should be.
          \nLearn more at [findable.net](https://findable.net).`
        }
      />

      <Entry
        title="Software Developer"
        subtitle="MCrowdsourcing Canada (MC2)"
        start="2017-09"
        body={
          `MC2 is a social venture that seeks to transform the way we do common altruistic tasks by providing a platform for those that want to contribute by taking positive actions, and those that want to sponsor and encourage them to do so.
          \nDuring my time at MC2 I've been primarily responsible for the continuing development and maintenance of MC2's Facebook chatbot service (built with Node.js) among other data-related tasks.`
        }
      />
      <Entry
        title="Contractor / Consultant"
        subtitle="Misc. Clients and Projects"
        start="2015"
        body={
          `I have worked with several small business clients to build websites, automate data processing and imports, and have helped friends and colleagues with various projects as well as receiving the intensive training that 42 Silicon Valley has to to offer.
          \nIn this time I've developed strong work habits and have been exposed to the wide variety of issues and tasks that this field has to offer.`
        }
      />
    </ResumeContainer>
    <ResumeContainer
      title="Projects"
    >
      {/* Redundancy of the /projects page */}
      <Entry
        title="ChrisRenfrow.me"
        start="2018"
        body={
          `My personal website and blog. Made with React and Gatsby.js to achieve all the performance benefits of a static website while still using modern web-development standards.
          \nCheck it out on [github](https://github.com/ChrisRenfrow/chrisrenfrow.me).`
        }
      />
      <Entry
        title="Interactive AI Storyteller"
        start="2017-07"
        end="2017-07"
        body={
          `One of the winning projects made during the 2017 VentureBeat AI Hackathon which made use of Google Assistant to create an interactive story-telling experience.
          \nMade using Firebase Cloud Functions and DialogFlow (for conversational intent-matching).`
        }
      />
    </ResumeContainer>
    <ResumeContainer
      title="Education"
    >
      <Entry
        title="42 Silicon Valley"
        start="2016-08"
        end="2018-04"
        body={
          `42 is a nonprofit, tuition-free programming school created and funded by French billionare and philanthropist, Xavier Niel. This 3-5 year program departs from the traditional education experience by using a peer-to-peer based learning system with no classes or teachers and a purely project-based curriculum. To learn more, visit [42.us.org](https://www.42.us.org).
          \nI worked with my peers on projects involving computer graphics and low level computing. Went on to learn about web development using PHP during an intense web development program. And quickly achieved my first internship.`
        }
      />
    </ResumeContainer>
  </div>
)
