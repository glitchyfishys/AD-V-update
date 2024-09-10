
export const realityUG = [
  {
    name: "Realitize",
    id: 0,
    requirement: () => `Reach ${format("1e6000")} Eternity Points before your first Reality`,
    hasFailed: () => player.realities != 0,
    checkRequirement: () => player.eternityPoints.e >= 6000 && player.realities == 0,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Gain x1e25 more EP",
    effect: () => 1e25,
    formatEffect: value => formatX(value, 2, 2),
    isUseless: () => Pelle.isDoomed
  },
  {
  name: "Dialated",
    id: 1,
    requirement: () => `Reach ${format("1e1250")} (pending) Eternity Points while Dialated before your first Reality (check multiplier breakdown)`,
    hasFailed: () => player.realities != 0,
    checkRequirement: () => gainedEternityPoints().gte("1e1250") && player.dilation.active && player.realities == 0,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "Gain 15 times more Tachyon Particles",
    effect: () => 15,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Real Time Complex",
    id: 2,
    requirement: () => `Reach ${format("1e8000")} Eternity Points before your first Reality`,
    hasFailed: () => player.realities != 0,
    checkRequirement: () => player.eternityPoints.e >= 8000 && player.realities == 0,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Gain 25 more Perks Points and Realities",
    effect: () => 25,
    formatEffect: value => format(value, 2, 2)
  },
  {
    name: "Immensity",
    id: 3,
    requirement: () => `Reach ${format(1e6)} RM`,
    hasFailed: () =>false,
    checkRequirement: () => player.reality.realityMachines.e >= 6,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "All TD gain a 1e100 multiplier",
    effect: () => Decimal.add(1e100),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Sacrifisal Power",
    id: 4,
    requirement: () => `reach ${format("1e5000")} eternity points in teresa's Reality the first time`,
    hasFailed: () => player.celestials.teresa.bestRunAM.e >= 10000,
    checkRequirement: () => player.eternityPoints.e >= 5000 && Teresa.isRunning && player.celestials.teresa.bestRunAM.e < 10000,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "EC4 and EC8 have no path reqierment (unlock other paths at the same row)",
    effect: 1,
    formatEffect: value => formatX(value, 2, 2),
  },
  {
    name: "Limiting Reality",
    id: 5,
    requirement: () => `Reach ${format(1e24)} RM`,
    hasFailed: () =>false,
    checkRequirement: () => player.reality.realityMachines.e >= 24,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Gain 25 additional Perk Points",
    effect: () => 25,
    formatEffect: value => format(value, 2, 2)
  },
{
    name: "External Dilation",
    id: 6,
    requirement: () => `Reach ${format(1.79e308)} Antimater in Effarigs Reality (Infinity Layer) with three Glyphs maxium`,
    hasFailed: () => Effarig.currentStage > 1 || player.reality.glyphs.active.length > 3,
    checkRequirement: () => player.antimatter.gte(1.79e308) && Effarig.isRunning && Effarig.currentStage == 1 && player.reality.glyphs.active.length <= 3,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Glyphs have additional effect",
    effect: 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Alternitve Realitive",
    id: 7,
    requirement: "Fill the Nameless ones Real time storage",
    hasFailed: () =>false,
    checkRequirement: () =>  player.celestials.enslaved.storedReal >= Enslaved.storedRealTimeCap,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Real time storing is fulled automatically and 60 times faster",
    effect: 60,
    formatEffect: value => format(value, 2, 2)
  },
  {
    name: "I hate V's Achievements",
    id: 8,
    requirement: "Unlock V",
    hasFailed: () =>false,
    checkRequirement: () =>  player.celestials.v.unlockBits != 0,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Gain space theorem",
    effect: 10,
    formatEffect: value => format(value, 2, 2)
  },
  {
    name: "Ra forgot to make this",
    id: 9,
    requirement: "Unlock Ra",
    hasFailed: () =>false,
    checkRequirement: () =>  Ra.isUnlocked,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Unlock a Glitched memory",
    effect: 1,
    formatEffect: value => format(value, 2, 2)
  },
  {
    name: "Astral Confrontment",
    id: 10,
    requirement: "Unlock Lai'tela",
    hasFailed: () => false,
    checkRequirement: () =>  Laitela.isUnlocked,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Dark Matter / Energy gained is 50 times faster",
    effect: 50,
    formatEffect: () => "Active"
  },
  {
    name: "Galatic Overload",
    id: 11,
    requirement: () => `Have ${format(10000)} Singularities without desablizing once`,
    hasFailed: () => Laitela.difficultyTier != 0,
    checkRequirement: () =>  player.celestials.laitela.singularities.gte(10000) && Laitela.difficultyTier == 0,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Singularities gain is boosted by their amount",
    effect: () => player.celestials.laitela.singularities.add(10).log10(),
    formatEffect: value => format(value, 2, 2)
  },
  {
    name: "Pre Galatic ",
    id: 12,
    requirement: () => `Reach ${format("1e66.66E9")} Antimatter in Effarig's Reality with 5 Cursed Glyphs, before destablizing Latela's Reality thrice`,
    hasFailed: () => Laitela.difficultyTier > 2,
    checkRequirement: () =>  player.requirementChecks.reality.maxGlyphs <= -15 && Effarig.isRunning && Laitela.difficultyTier <= 2 && Currency.antimatter.gt("1e6.666E10"),
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Unlock two new treasa shop items",
    effect: () => 1,
    formatEffect: () => "Active"
  },
  {
    name: "Overlight Powerforce",
    id: 13,
    requirement: "Complete all other glitch challanges",
    hasFailed: () => player.glitch.preinfinity.upgradebits != 255 || player.glitch.breakinfinity.upgradebits != 63 || player.glitch.eternity.upgradebits != 63 || player.glitch.reality.upgradebits != 8191,
    checkRequirement: () =>  player.glitch.preinfinity.upgradebits >= 255 && player.glitch.breakinfinity.upgradebits >= 63 && player.glitch.eternity.upgradebits >= 63 && player.glitch.reality.upgradebits >= 8191,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Unlock a pelle rift",
    effect: () => 1,
    formatEffect: () => "unlocked"
  },
];
