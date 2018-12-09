import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const ResumeItem = props => (
    <div>
        <h3 
            css={{
                marginBottom: rhythm(0.2),
                display: "inline-block",
                fontStyle: "normal"
            }}
        >
            {props.title}
        </h3>
        <hr />
        <p>
            {props.body}
        </p>
        {props.children}
    </div>
)

const ProgressBar = props => (
    <div 
        css={{
            width: "100%",
            backgroundColor: "#ccc"
        }}
    >
        <div 
            css={{
                width: `${props.percentage * 100}%`,
                height: "3px",
                backgroundColor: "#000"
            }}
        />
    </div>
)

const SkillItem = props => (
    <div 
        css={{
                margin: "5px 10px",
                height: "50px",
                width: "100px"
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


export default ({ data }) => (
    <div>
        <ResumeItem 
            title="Summary"
            body={`
                Back-end developer aspiring to become a full-stack developer. 
                Interested in blockchain and machine learning and how they can 
                be used for everyday applications, but really I just enjoy 
                creating maintainable software people make use of.
            `}
        />
        <ResumeItem 
            title="Skills"
        >
            <div css={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <SkillItem title="Node.js" percentage=".75" />
                <SkillItem title="Firebase" percentage=".75" />
                <SkillItem title="React" percentage=".33" />
                <SkillItem title="GCS" percentage=".5" />
                <SkillItem title="Python" percentage=".5" />
                <SkillItem title="C" percentage=".75" />
                <SkillItem title="Bash" percentage=".66" />
                <SkillItem title="Linux OS" percentage=".75" />
                <SkillItem title="Golang" percentage=".5" />
                <SkillItem title="Googling" percentage="1" />
            </div>
        </ResumeItem>
        <ResumeItem 
            title="Experience"
        >
            {/* Put some experience here */}
            Loading...
        </ResumeItem>
        <ResumeItem 
            title="Projects"
        >
            {/* Redundancy of the /projects page */}
            Loading...
        </ResumeItem>
        <ResumeItem 
            title="Education"
        >
            {/* Put nothing here */}
            Loading...
        </ResumeItem>
    </div>
)
