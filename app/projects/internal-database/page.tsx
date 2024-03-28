"use client"

import ProjectDetailPage from "../../_components/ProjectDetailPage"

export default function Page() {
  return (
    <ProjectDetailPage
      projectDetails={{
        title: "Backboard - Internal Database & Workflow Automation",
        deployInfo: "Launched in August 2023",
        collab: "Backboard was created in partnership with Square Mile Labs.",
        challenges: <Challenges />,
        flow: <Flow />,
        coverImgSrc: "/2024/prideworks-backboard.png",
        coverImgAlt: "Overview of Backboard Database and Workflow Automation Project",
      }}
    />
  )
}

function Challenges() {
  return (
    <p>
      {" "}
      Non-profit organizations often struggle with managing diverse tools to track their membership, expenses,
      fundraisers, and other essential details. These elements are typically scattered across disjointed spreadsheets,
      leading to manual data entry and duplicate handling inefficiencies.
    </p>
  )
}

function Flow() {
  return (
    <>
      <p>
        Backboard, developed by Square Mile Labs, is a centralized solution designed to streamline data management and
        automate workflows for clients in various industries and niches. Qualle Tech collaborated specifically on the
        non-profit sector, leveraging their expertise to enhance automated processes tailored for this industry.
      </p>
      <p>
        Backboard integrates the convenience of a centralized database structure, enabling administrators to input,
        update, or remove database entries seamlessly.
      </p>
      <p>
        Moreover, customizable user-based access rights empower admins to grant specific read/edit/write permissions to
        team members based on their roles.
      </p>
      <p>
        Additionally, Backboard offers tailored workflow automations, such as managing event registrations and expenses,
        for non-profit clients, ensuring all essential data is centralized and easily accessible.
      </p>
    </>
  )
}
