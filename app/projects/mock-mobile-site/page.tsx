"use client"

import ProjectDetailPage from "../../_components/ProjectDetailPage"

export default function Page() {
  return (
    <ProjectDetailPage
      projectDetails={{
        title: "Mock Mobile College Site",
        deployInfo: "Deployed May 2024",
        challenges: <Challenges />,
        flow: <Flow />,
        coverImgSrc: "/karamozov.png",
        coverImgAlt: "Mock Mobile College Site",
      }}
    />
  )
}

function Challenges() {
  return (
    <p>
      A filmmaker working on a short film needs a realistic and functional mock website to represent a college
      application process. This website will be used as a prop within the film and must operate locally on a mobile
      device, viewable in a mobile browser. The challenge was to create a visually appealing and fully functional local
      website that enhances the authenticity of the film without requiring an active internet connection.
    </p>
  )
}

function Flow() {
  return (
    <>
      <p>
        To meet the needs of the short film, we developed a mock mobile website that simulates a college application
        process, featuring four main pages designed for local deployment.
      </p>
      <ul>
        <li>
          <strong>Homepage:</strong> A dynamic image carousel introduces viewers to the college, showcasing key aspects
          of campus life and facilities, creating an engaging and informative first impression.
        </li>
        <li>
          <strong>Requirements Page:</strong> This section lists all necessary application requirements in a clear and
          organized format, ensuring that prospective students and viewers understand the application process.
        </li>
        <li>
          <strong>Application Form:</strong> A user-friendly form where applicants can upload required documents and
          paste their application essay. The form includes validation features to ensure all fields are completed
          accurately. Data entered into the form is stored in session storage, allowing users to resume the application
          if they navigate away.
        </li>
        <li>
          <strong>Submission Confirmation Page:</strong> After completing and submitting the application, users are
          directed to a confirmation page that acknowledges the successful submission.
        </li>
      </ul>
      <p>
        By building this mock website with HTML, CSS, and JavaScript, we ensure that all components are self-contained
        and can be easily loaded on a mobile phone without the need for an internet connection. This solution not only
        fulfills the filmmaker’s requirements but also adds a layer of authenticity to the film by presenting a
        realistic college application process.
      </p>
    </>
  )
}
