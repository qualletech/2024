"use client"

import theme from "../../styles/theme"
import { mdiLoading } from "@mdi/js"
import Icon from "@mdi/react"
import { useState } from "react"
import styled from "styled-components"

export default function Page() {
  const [formData, setFormData] = useState(null)
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = async () => {
    if (
      !formData ||
      !formData.name ||
      !formData.name.length ||
      !formData.request ||
      !formData.request.length ||
      !formData.email ||
      !formData.email.length
    ) {
      // checking not working right
      setMessage("Please fill out all form fields")
      return
    }
    try {
      setIsLoading(true)
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          service_id: "service_ie347fw",
          user_id: "R7AHgjOFyyr1qSNYp",
          template_id: "template_snd8tbq",
          template_params: formData,
        }),
      })
      // email send here
      setIsLoading(false)
    } catch (e) {
      setMessage("The email could not be sent please make sure you typed in your details correctly and try again")
    }
    setMessage("")
  }

  return (
    <Container>
      <h2>Contact Us</h2>
      <Form>
        <Label>
          Name*
          <Input
            type="text"
            placeholder="Your Name Here"
            value={formData?.name || ""}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </Label>
        <Label>
          Email*
          <Input
            type="email"
            placeholder="Your Email Here"
            value={formData?.email || ""}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </Label>
        <Label>
          Request*
          <TextArea
            placeholder="Details about your Project or Questions Here"
            required
            rows={10}
            value={formData?.request || ""}
            onChange={(e) => setFormData({ ...formData, request: e.target.value })}
          />
        </Label>
        <Button type="button" onClick={sendEmail}>
          {isLoading ? <Icon path={mdiLoading} spin size={0.8} /> : "Send"}
        </Button>
        <p>{message}</p>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto 1fr;
`

const Form = styled.div`
  display: grid;
  grid-gap: 1rem;
`

const Label = styled.label`
  font-size: 1.5rem;
  display: grid;
  grid-gap: 0.5rem;
`

const Input = styled.input`
  padding: 1rem;
  font-size: 1.2rem;
  color: ${theme.colors.neutralDark};
`

const TextArea = styled.textarea`
  padding: 1rem;
  font-size: 1.2rem;
  color: ${theme.colors.neutralDark};
  resize: vertical;
`

const Button = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
  background: ${theme.colors.interactionDark};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
