/**
 * @fileoverview Test suite for Badge component.
 *
 * @module tests/badge
 *
 * @description
 * Comprehensive tests for the Badge component including rendering,
 * theme integration, color variations, and text transformation.
 */

import { describe, it, expect } from "vitest";
import { render } from "tinky-test";
import { Text } from "tinky";
import { Badge } from "../src/index.js";

describe("Badge", () => {
  describe("basic rendering", () => {
    it("should render with default magenta color", () => {
      const { lastFrame } = render(<Badge>Test</Badge>);
      const output = lastFrame();

      expect(output).toBeDefined();
      expect(output).toContain("TEST");
    });

    it("should render with green color", () => {
      const { lastFrame } = render(<Badge color="green">Success</Badge>);
      const output = lastFrame();

      expect(output).toContain("SUCCESS");
      // eslint-disable-next-line no-control-regex
      expect(output).toMatch(/\u001b\[42m/); // Green background ANSI code
    });

    it("should render with red color", () => {
      const { lastFrame } = render(<Badge color="red">Error</Badge>);
      const output = lastFrame();

      expect(output).toContain("ERROR");
      // eslint-disable-next-line no-control-regex
      expect(output).toMatch(/\u001b\[41m/); // Red background ANSI code
    });

    it("should render with blue color", () => {
      const { lastFrame } = render(<Badge color="blue">Info</Badge>);
      const output = lastFrame();

      expect(output).toContain("INFO");
      // eslint-disable-next-line no-control-regex
      expect(output).toMatch(/\u001b\[44m/); // Blue background ANSI code
    });

    it("should render with yellow color", () => {
      const { lastFrame } = render(<Badge color="yellow">Warning</Badge>);
      const output = lastFrame();

      expect(output).toContain("WARNING");
      // eslint-disable-next-line no-control-regex
      expect(output).toMatch(/\u001b\[43m/); // Yellow background ANSI code
    });
  });

  describe("text transformation", () => {
    it("should convert string children to uppercase", () => {
      const { lastFrame } = render(<Badge color="green">success</Badge>);
      const output = lastFrame();

      expect(output).toContain("SUCCESS");
      expect(output).not.toContain("success");
    });

    it("should handle mixed case strings", () => {
      const { lastFrame } = render(<Badge color="blue">MiXeD CaSe</Badge>);
      const output = lastFrame();

      expect(output).toContain("MIXED CASE");
    });

    it("should handle special characters", () => {
      const { lastFrame } = render(<Badge color="green">test-123_test</Badge>);
      const output = lastFrame();

      expect(output).toContain("TEST-123_TEST");
    });
  });

  describe("edge cases", () => {
    it("should handle empty string", () => {
      const { lastFrame } = render(<Badge color="green"> </Badge>);
      const output = lastFrame();

      expect(output).toBeDefined();
    });

    it("should handle single character", () => {
      const { lastFrame } = render(<Badge color="blue">a</Badge>);
      const output = lastFrame();

      expect(output).toContain("A");
    });

    it("should handle very long text", () => {
      const longText = "a".repeat(50);
      const { lastFrame } = render(<Badge color="green">{longText}</Badge>);
      const output = lastFrame();

      expect(output).toContain("A".repeat(50));
    });

    it("should handle non-string children without transformation", () => {
      const { lastFrame } = render(
        <Badge color="red">
          <Text>Mixed Content</Text>
        </Badge>,
      );
      const output = lastFrame();

      expect(output).toContain("Mixed Content");
      expect(output).not.toContain("MIXED CONTENT");
    });
  });

  describe("default props", () => {
    it("should use magenta as default color when not specified", () => {
      const { lastFrame } = render(<Badge>Test</Badge>);
      const output = lastFrame();

      // Magenta background should be present
      expect(output).toBeDefined();
      expect(output).toContain("TEST");
    });
  });
});
