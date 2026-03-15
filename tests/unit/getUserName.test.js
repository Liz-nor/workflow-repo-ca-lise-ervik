import { describe, beforeEach, expect, it } from "vitest";
import { getUsername } from "../../js/utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it("should return the username from localStorage", () => {
    const user = { name: "Kari" };
    localStorage.setItem("user", JSON.stringify(user));

    expect(getUsername()).toBe("Kari");
  });

  it("should return null if there is no user in localStorage", () => {
    expect(getUsername()).toBeNull();
  });
});
