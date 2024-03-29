"use client"

import ProjectDetailPage from "../../_components/ProjectDetailPage"

export default function Page() {
  return (
    <ProjectDetailPage
      projectDetails={{
        title: "Mic Drop - Open Mic Dashboard",
        deployInfo: "Currently in development",
        challenges: <Challenges />,
        flow: <Flow />,
        coverImgSrc: "mic-drop.png",
        coverImgAlt: "Coming Soon Image",
      }}
    />
  )
}

function Challenges() {
  return (
    <p>
      New York City comedians face difficulty in locating centralized information about open mic events in their area.
      Information is primarily spread through word of mouth, Instagram, and various websites, leading to missed
      opportunities and incomplete details. Additionally, Instagram pages often lack updates and may not provide
      comprehensive event information.
    </p>
  )
}

function Flow() {
  return (
    <>
      <p>
        Mic Drop aims to revolutionize the open mic experience for NYC comedians by providing a user-friendly dashboard
        to discover upcoming events effortlessly.
      </p>
      <p>
        Our dashboard features customized filters and advanced search functionalities, enabling comedians to find the
        perfect open mic with just a few clicks. This streamlined approach eliminates the need to navigate through
        multiple platforms or rely solely on word of mouth, saving valuable time and ensuring access to comprehensive
        event details.
      </p>
    </>
  )
}
