# Funniest Autocorrect Fail

[![make.fun](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/Xyzar29/funniest-autocorrect-fail/rank.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/Xyzar29/funniest-autocorrect-fail/reward.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)

Entry for the [Funniest Autocorrect Fail](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154) competition on [make.fun](https://make.fun).

## The line

> Morning Mr. Henderson, I'll be twerking from home today — laptop charged, online all day if you need anything!

A work-from-home text to the boss where "working" slipped into "twerking" — the most innocent word in the sentence turned into the worst possible one, in a message that otherwise reads completely normal. The reader instantly knows what was meant, and exactly why it is a disaster.

## How it works

`main.ts` writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) and enforces the competition gate itself: 1–199 characters, one line, not only whitespace.

Run it with Node 22+:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
