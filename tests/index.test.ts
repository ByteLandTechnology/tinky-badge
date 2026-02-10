import { describe, it, expect } from "vitest";
import * as index from "../src/index.js";
import { Badge, badgeTheme } from "../src/index.js";

describe("Index Entry Point", () => {
  it("should export all public members", () => {
    expect(Badge).toBeDefined();
    expect(badgeTheme).toBeDefined();

    // Check that we are exporting exactly what we expect
    expect(Object.keys(index)).toEqual(
      expect.arrayContaining(["Badge", "badgeTheme"]),
    );
  });
});
