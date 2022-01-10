import casino from "../src/functions/Casino";
import { Casino, UserCassino, LOCATION, NACIONALITY } from "../src/types/types";

test("1 brazilian allowed", () => {
    const brazilian: UserCassino = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casinoInfo: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = casino(casinoInfo, [brazilian])
    expect(result.brazilians.allowed).toStrictEqual(["Astrodev"]);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
  });

  test("1 american allowed", () => {
    const brazilian: UserCassino = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casinoInfo: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = casino(casinoInfo, [brazilian])
    expect(result.americans.allowed).toStrictEqual(["Astrodev"]);
    expect(result.americans.unallowed.length).toBe(0);
  });

  test("No one allowed", () => {
    const brazilian: UserCassino = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: UserCassino = {
      name: "Astrodev EUA",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casinoInfo: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = casino(casinoInfo, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed).toStrictEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.unallowed).toStrictEqual([
      "Astrodev EUA",
      "Astrodev EUA",
    ]);
    expect(result.brazilians.unallowed).toContain("Astrodev BR");
    expect(result.americans.unallowed).toContain("Astrodev EUA");
  });

  test("2 american allowed and 2 brazilians unallowed", () => {
    const brazilian: UserCassino = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: UserCassino = {
      name: "Astrodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casinoInfo: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = casino(casinoInfo, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed).toStrictEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.allowed).toStrictEqual(["Astrodev EUA", "Astrodev EUA"]);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toBe(2);
  });