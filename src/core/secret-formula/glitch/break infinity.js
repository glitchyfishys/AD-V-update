
export const breakInfinityUG = [
  {
    name: "Limited Space",
    id: 0,
    requirement: () => `Reach ${format("1e450")} Antimatter up to 4 Dimension Boosts, one galaxy (pre-Eternity)`,
    hasFailed: () => player.dimensionBoosts > 4 || player.galaxies > 1 && !PlayerProgress.eternityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 450 && player.dimensionBoosts <= 4 && player.galaxies <= 1,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "IP multiplier from Antimatter galaxies",
    effect: () => 1 + Math.pow(player.galaxies, 1.25),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "Infinitly Limiting",
    id: 1,
    requirement: () => `Reach ${format(2000)} (pending) Infinity Points with up to four Dimension Boosts and one Antimatter galaxy (pre-Eternity)`,
    hasFailed: () => player.dimensionBoosts > 4 || player.galaxies > 1 && !PlayerProgress.eternityUnlocked(),
    checkRequirement: () =>  gainedInfinityPoints().gt(2000) && player.dimensionBoosts <= 4 && player.galaxies <= 1,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "x10 Infinity Points",
    effect: () => 10,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "Chaos",
    id: 2,
    requirement:  "Finish IC1 without Infinity Dimensions",
    hasFailed: () => player.dimensions.infinity[0].amount.gt(0),
    checkRequirement: () => player.antimatter.gte("1e650") && player.challenge.infinity.current == 1 && !player.dimensions.infinity[0].amount.gt(0),
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "1e50 more Infinity Points",
    effect: () => 1e50,
    formatEffect: value => formatX(value, 2, 2),
    isUseless: () => Pelle.isDoomed
  },
  {
    name: "Cosmic Infinity",
    id: 3,
    requirement: () => `Have ${format(1e150)} Infinity Points`,
    hasFailed: () => false,
    checkRequirement: () => player.infinityPoints.e >= 150,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "IP multiplier from Antimatter Galaxies",
    effect: () => 1 + Math.pow(player.galaxies, 3),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Replicated Infinity",
    id: 4,
    requirement: () => `Have ${format(10)} Replicanti without any upgrades (pre-Eternity)`,
    hasFailed: () => player.replicanti.chance > 0.01 || player.replicanti.interval < 1000 || PlayerProgress.eternityUnlocked(),
    checkRequirement: () => player.replicanti.amount.gte(10) && player.replicanti.chance == 0.01 && player.replicanti.interval >= 1000 && !PlayerProgress.eternityUnlocked(),
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Replicanti speed by it's amount",
    effect: () => 1 + Math.sqrt(player.replicanti.amount.log10()),
    formatEffect: value => formatX(value, 2, 2),
    isUseless: () => Pelle.isDoomed
  },
  {
    name: "Cloned Replication",
    id: 5,
    requirement: () => `Have ${format(1.79e308)} Replicanti without any upgrades (pre-Eternity)`,
    hasFailed: () => player.replicanti.chance > 0.01 || player.replicanti.interval < 1000 || PlayerProgress.eternityUnlocked(),
    checkRequirement: () => player.replicanti.amount.gte(1.79e308) && player.replicanti.chance == 0.01 && player.replicanti.interval >= 1000 && !PlayerProgress.eternityUnlocked(),
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Increase Replcanti speed by their Galxies",
    effect: () => 1 + (Math.pow(player.replicanti.galaxies, 1.2) / 38),
    formatEffect: value => formatX(value, 2, 2)
  },
  
];
