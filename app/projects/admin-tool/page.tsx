"use client"

import ProjectDetailPage from "../../_components/ProjectDetailPage"

export default function Page() {
  return (
    <ProjectDetailPage
      projectDetails={{
        title: "Admin OS & Mobile Staff Portal",
        deployInfo: "In Development - Planned Deployment in April 2024",
        collab: "These solutions were developed in partnership with Square Mile Labs.",
        challenges: <Challenges />,
        flow: <Flow />,
        coverImgSrc: "/2024/admin-tool.png",
        coverImgAlt: "Overview of Admin Operational Dashboard and Staff Portal Project",
      }}
    />
  )
}

function Challenges() {
  return (
    <p>
      Our culinary service client, which connects customers with top-tier chefs for personalized at-home dining
      experiences, faced operational inefficiencies due to reliance on spreadsheet-based systems. Manual data entry and
      matching processes were time-consuming, and the lack of centralization led to errors and added effort for the
      admin team.
    </p>
  )
}

function Flow() {
  return (
    <>
      <p>
        To address these challenges, Square Mile Labs embarked on creating a dedicated admin dashboard for the client.
        This comprehensive solution centralizes databases, statistics, service management, automated pricing, staff
        matching, and payment systems within a single portal.
      </p>
      <p>
        Moreover, Square Mile Labs developed a Mobile Staff Portal for staff members to streamline service request
        reviews, acceptances, or declinations. The portal also enables staff to track expenses associated with accepted
        services, enhancing transparency and efficiency in managing operations.
      </p>
    </>
  )
}
