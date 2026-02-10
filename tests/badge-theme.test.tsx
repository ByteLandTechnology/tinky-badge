/**
 * @fileoverview Test suite for badge-theme module.
 *
 * @module tests/badge-theme
 *
 * @description
 * Comprehensive tests for theme configuration including style functions
 * and type definitions for the Badge component.
 */

import { describe, it, expect } from "vitest";
import { badgeTheme, type BadgeTheme } from "../src/themes/badge-theme.js";
import { type BadgeProps } from "../src/components/Badge.js";

describe("badge-theme", () => {
  describe("badgeTheme export", () => {
    it("should export badgeTheme as an object", () => {
      expect(badgeTheme).toBeDefined();
      expect(typeof badgeTheme).toBe("object");
    });

    it("should have styles property", () => {
      expect(badgeTheme).toHaveProperty("styles");
      expect(typeof badgeTheme.styles).toBe("object");
    });
  });

  describe("theme styles", () => {
    describe("container style", () => {
      it("should export container style function", () => {
        expect(typeof badgeTheme.styles.container).toBe("function");
      });

      it("should return TextProps with backgroundColor", () => {
        const styles = badgeTheme.styles.container({ color: "green" });
        expect(styles).toHaveProperty("backgroundColor", "green");
      });

      it("should return an object", () => {
        const styles = badgeTheme.styles.container({ color: "blue" });
        expect(typeof styles).toBe("object");
      });

      it("should support different colors", () => {
        const redStyles = badgeTheme.styles.container({ color: "red" });
        const blueStyles = badgeTheme.styles.container({ color: "blue" });
        const magentaStyles = badgeTheme.styles.container({ color: "magenta" });

        expect(redStyles.backgroundColor).toBe("red");
        expect(blueStyles.backgroundColor).toBe("blue");
        expect(magentaStyles.backgroundColor).toBe("magenta");
      });
    });

    describe("label style", () => {
      it("should export label style function", () => {
        expect(typeof badgeTheme.styles.label).toBe("function");
      });

      it("should return TextProps with black color", () => {
        const styles = badgeTheme.styles.label();
        expect(styles).toHaveProperty("color", "black");
      });

      it("should return an object", () => {
        const styles = badgeTheme.styles.label();
        expect(typeof styles).toBe("object");
      });

      it("should consistently return black color", () => {
        const styles1 = badgeTheme.styles.label();
        const styles2 = badgeTheme.styles.label();
        expect(styles1.color).toBe("black");
        expect(styles2.color).toBe("black");
      });
    });
  });

  describe("BadgeProps type", () => {
    it("should accept children prop", () => {
      const props: BadgeProps = {
        children: "Test",
      };
      expect(props.children).toBeDefined();
    });

    it("should accept color prop", () => {
      const props: BadgeProps = {
        children: "Test",
        color: "green",
      };
      expect(props.color).toBe("green");
    });

    it("should accept optional color", () => {
      const props: BadgeProps = {
        children: "Test",
      };
      expect(props).toBeDefined();
      expect(props.color).toBeUndefined();
    });
  });

  describe("BadgeTheme type", () => {
    it("should be a valid type", () => {
      const theme: BadgeTheme = badgeTheme;
      expect(theme).toBeDefined();
    });

    it("should have all required style functions", () => {
      const requiredStyles = ["container", "label"];

      for (const style of requiredStyles) {
        expect(badgeTheme.styles).toHaveProperty(style);
        expect(
          typeof (
            badgeTheme.styles as Record<string, (...args: unknown[]) => unknown>
          )[style],
        ).toBe("function");
      }
    });
  });
});
