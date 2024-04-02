"use client"

import theme from "../../styles/theme"
import PageContainer from "../_components/PageContainer"
import { mdiLoading } from "@mdi/js"
import Icon from "@mdi/react"
import { useState } from "react"
import styled from "styled-components"

export default function Page() {
  const [formData, setFormData] = useState({ name: "", email: "", request: "" })
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [formValid, setFormValid] = useState(false)

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validateForm = () => {
    const { name, email, request } = formData
    const isNameValid = name !== ""
    const isEmailValid = validateEmail(email)
    const isRequestValid = request !== ""
    setFormValid(isNameValid && isEmailValid && isRequestValid)
  }

  const sendEmail = async () => {
    if (!formValid) {
      setMessage("Please fill out all form fields with valid data")
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
      setMessage("Request sent")
      setFormData({ name: "", email: "", request: "" })
      setIsLoading(false)
    } catch (e) {
      setMessage("The email could not be sent. Please try again later.")
    }
    setTimeout(() => {
      setMessage("")
    }, 10000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    validateForm()
    setMessage("")
  }

  return (
    <PageContainer>
      <h2>Contact Us</h2>
      <Form>
        <Label>
          Name*
          <Input
            type="text"
            name="name"
            placeholder="Your Name Here"
            value={formData?.name || ""}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Email*
          <Input
            type="email"
            name="email"
            placeholder="Your Email Here"
            value={formData?.email || ""}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Request*
          <TextArea
            name="request"
            placeholder="Details about your Project or Questions Here"
            required
            rows={8}
            value={formData?.request || ""}
            onChange={handleChange}
          />
        </Label>
        <ButtonContainer>
          <Button type="button" onClick={sendEmail} $deactivated={!formValid}>
            {isLoading ? <Icon path={mdiLoading} spin size={0.8} /> : "Send"}
          </Button>
          {message.length > 0 ? <p>{message}</p> : null}
        </ButtonContainer>
      </Form>
    </PageContainer>
  )
}
const Form = styled.div`
  display: grid;
  grid-gap: 1rem;
  overflow: auto;
  padding-right: 2rem;
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    align-items: start;
    align-content: start;
    grid-gap: 1.5rem;
  }
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
  border-radius: 0.5rem;
`

const TextArea = styled.textarea`
  padding: 1rem;
  font-size: 1.2rem;
  color: ${theme.colors.neutralDark};
  resize: vertical;
  border-radius: 0.5rem;
`

const Button = styled.button<{ $deactivated: boolean }>`
  padding: 1rem;
  font-size: 1.5rem;
  background: ${theme.colors.interactionDark};
  border-radius: 0.5rem;
  opacity: ${({ $deactivated }) => ($deactivated ? 0.5 : 1)};
  cursor: ${({ $deactivated }) => ($deactivated ? "not-allowed" : "pointer")};
  &:hover {
    opacity: ${({ $deactivated }) => ($deactivated ? 0.5 : 0.8)};
  }
`

const ButtonContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  > p {
    text-align: center;
  }
`
