import React from "react";
import { render } from "@testing-library/react";
import GlobalHeader from "./GlobalHeader";

describe("global header", () => {
  it("render global header", () => {
    const { getByTestId } = render(
      <GlobalHeader />,
    );
    const input = getByTestId("global-header");
    expect(input).toBeTruthy();
  });
});
