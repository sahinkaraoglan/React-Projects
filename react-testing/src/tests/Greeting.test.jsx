import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Greeting } from "../components/Greeting";
import "@testing-library/jest-dom/vitest";

//GRUPLANDIRMAK İÇİN
describe("Greeting", () => {
    it("render a default greeting", () => {
    render(<Greeting />);
    expect(screen.getByText("Merhaba, Dünya")).toBeInTheDocument();
});

it("render greeting with a name", () => {
    render(<Greeting name={"Şahin"} />);
    expect(screen.getByText("Merhaba, Şahin")).toBeInTheDocument();
});
})

