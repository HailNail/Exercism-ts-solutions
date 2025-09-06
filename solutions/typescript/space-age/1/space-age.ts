const planets = [
  { name: "mercury", orbitalPeriod: 0.2408467 },
  { name: "venus", orbitalPeriod: 0.61519726 },
  { name: "earth", orbitalPeriod: 1.0 },
  { name: "mars", orbitalPeriod: 1.8808158 },
  { name: "jupiter", orbitalPeriod: 11.862615 },
  { name: "saturn", orbitalPeriod: 29.447498 },
  { name: "uranus", orbitalPeriod: 84.016846 },
  { name: "neptune", orbitalPeriod: 164.79132 },
] as const;

const planetNames = planets.map((p) => p.name);
type PlanetParam = (typeof planetNames)[number];

type AgeParam = (x: PlanetParam, y: number) => number | string;

export const age: AgeParam = (planet, second) => {
  const currentPlanet = planets.find((p) => p.name === planet);
  const planetAge =
    currentPlanet !== undefined
      ? parseFloat(
          (
            second /
            (currentPlanet.orbitalPeriod * 365.25 * 24 * 60 * 60)
          ).toFixed(2)
        )
      : "Please provide correct age";
  return planetAge;
};

