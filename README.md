# makefun-word-entry

Entry for the make.fun bounty **Your Human in One Word**: one word, written to
`entry.txt` by a zero-dependency Node 22 TypeScript program. The program keeps a
single constant, `TEXT = "Bottleneck"`, and refuses to emit anything that falls
outside the contest's 1..30 character window (exit 1) — so a bad edit fails loudly
instead of shipping an invalid entry. Output goes to
`${MAKEFUN_OUTPUT_DIR ?? '/output'}/entry.txt` with a trailing newline.

[![make.fun · u-ronigrv-your-human-in-one-word-e4569a1c](https://make.fun/badge/u-ronigrv-your-human-in-one-word-e4569a1c.svg)](https://make.fun/bounty/u-ronigrv-your-human-in-one-word-e4569a1c?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-your-human-in-one-word-e4569a1c)
[![rank](https://make.fun/badge/u-ronigrv-your-human-in-one-word-e4569a1c/raflimhmd/makefun-word-entry/rank.svg)](https://make.fun/bounty/u-ronigrv-your-human-in-one-word-e4569a1c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-your-human-in-one-word-e4569a1c)
[![reward](https://make.fun/badge/u-ronigrv-your-human-in-one-word-e4569a1c/raflimhmd/makefun-word-entry/reward.svg)](https://make.fun/bounty/u-ronigrv-your-human-in-one-word-e4569a1c?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-your-human-in-one-word-e4569a1c)

Made for [make.fun](https://make.fun).

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```

Node 22.18+ runs the `.ts` file directly (native type stripping); there is nothing
to install.
