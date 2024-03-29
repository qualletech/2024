"use client"

import ProjectDetailPage from "../../_components/ProjectDetailPage"

export default function Page() {
  return (
    <ProjectDetailPage
      projectDetails={{
        title: "Sourcing Tool - Monday Integration",
        deployInfo: "Launched in January 2024",
        collab: "This tool was developed in collaboration with Square Mile Labs.",
        challenges: <Challenges />,
        flow: <Flow />,
        coverImgSrc: "sourcing-tool.png",
        coverImgAlt: "Overview of Monday Sourcing Tool Integration Project",
      }}
    />
  )
}

function Challenges() {
  return (
    <p>
      A bespoke jewelry designer approached us looking for assistance to streamline their order sourcing process, which
      involved repetitive tasks such as sending identical emails to suppliers and manually copying extensive text.
      Managing vendor responses further added complexity, requiring the sourcing team to sift through emails to confirm
      successful sourcing.
    </p>
  )
}

function Flow() {
  return (
    <>
      <p>
        Given the client's use of Monday as their project management platform, Square Mile Labs and Qualle Tech
        collaborated to develop a seamless Monday integration to automate the workflow.
      </p>
      <p>
        The Monday integration enables the client to initiate a new order, automatically extract stone details, and
        generate a templated email. The sourcing team can then easily browse and select vendors from a curated list,
        with advanced filtering and search functionalities. They can either individually select vendors or opt for
        multi-select options to send requests efficiently.
      </p>
      <p>
        Additionally, responses are streamlined through an AI-powered system, providing ratings like potential,
        positive, or negative replies. This innovative approach significantly accelerates the sourcing process,
        empowering the client and the sourcing team to achieve optimal efficiency.
      </p>
    </>
  )
}
