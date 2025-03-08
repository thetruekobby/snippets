import React from "react"
import { findAllByRole, render, screen } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"
import DisplayUsers from "./DisplayUsers"
import "@testing-library/jest-dom/vitest"
import userEvent from "@testing-library/user-event"
import { server } from "../../mocks/server"

// server.listen()

describe("Users", () => {
  test("renders correctly", () => {
    render(<DisplayUsers />)
    expect(screen.getByRole("heading")).toBeInTheDocument()
  })
  test("renders fetch button", () => {
    const func = vi.fn()
    render(<DisplayUsers func={func} />)
    expect(screen.getByRole("button", { name: /fetch/i })).toBeInTheDocument()
  })
  

  test("mock funtion", async () => {
    const func = vi.fn()
    render(<DisplayUsers func={func} />)
    const button = screen.getByRole("button", { name: /run props function/i })
    await userEvent.dblClick(button)
    expect(func).toHaveBeenCalledTimes(2)
  })

    test("fetches users on click", async () => {
      render(<DisplayUsers />)
      const button = screen.getByRole("button", { name: /fetch/i })
      await userEvent.click(button)
      // const loading = await screen.findByText(/loading/i)
      // expect(loading).toBeInTheDocument()
      const users = await screen.findAllByRole("listitem")
      expect(users).toHaveLength(3)
    })

})
