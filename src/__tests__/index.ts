import aim from ".."

describe("test", () => {
  it("should print the version", () => {
    const aimVersion = aim.getVersion()
    expect(aimVersion).toBe("0.0.1")
  })
})
