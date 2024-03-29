"use client"

import ProjectDetailPage from "../../_components/ProjectDetailPage"

export default function Page() {
  return (
    <ProjectDetailPage
      projectDetails={{
        title: "Seed - Food & Symptom Tracker",
        deployInfo: "Launched in April 2023",
        collab: "Seed was created in collaboration with 4 other independent developers.",
        challenges: <Challenges />,
        flow: <Flow />,
        coverImgSrc: "seed.png",
        coverImgAlt: "Overview of Seed Project",
      }}
    />
  )
}

function Challenges() {
  return (
    <p>
      Individuals with food sensitivities or allergies often face difficulties pinpointing which foods or ingredients
      trigger their symptoms. Traditional food diaries require constant maintenance and are inconvenient to carry
      around, leading to a less-than-optimal user experience. Moreover, identifying patterns solely through manual
      tracking in notebooks or spreadsheets can be a daunting task.
    </p>
  )
}

function Flow() {
  return (
    <>
      <p>
        With Seed, our aim was to simplify users' lives. The app seamlessly integrates an intuitive user interface with
        a robust algorithm.
      </p>
      <p>
        Users can effortlessly log their food intake using our extensive ingredient database. Additionally, they can
        monitor any symptoms as they occur.
      </p>
      <p>
        Recognizing that digestion times vary and symptoms may manifest hours after consumption, our algorithm leverages
        these insights to predict which foods are likely to cause sensitivities and symptoms.
      </p>
      <p>
        As users accumulate data, the app generates multiple graphs that illustrate correlations between food
        consumption and experienced symptoms, empowering users to identify food-based triggers more effectively.
      </p>
    </>
  )
}
