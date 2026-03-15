import { describe, it, expect } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";

describe("isActivePath", () => {
  it("should return true for the active path", () => {
    expect(isActivePath("/venues", "/venues")).toBe(true);
  });

  it('should return true for the root path "/" when path is "/"', () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it('should return true for root path "/" when path is "/index.html"', () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("should return true when current path includes the href", () => {
    expect(isActivePath("/venues", "/venues/123")).toBe(true);
  });

  it("should return false when current path does not include the href", () => {
    expect(isActivePath("/venues", "/events")).toBe(false);
  });
});
