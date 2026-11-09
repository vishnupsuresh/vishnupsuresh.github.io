---
title: SOS Board Game
summary: Full SOS game in C with an AI opponent and a multi-file Makefile build.
tags: [C, Make]
order: 4
---

## Overview

SOS is a two-player grid game. Players take turns placing an S or an O in an empty cell. Completing the sequence S-O-S in a row, column, or diagonal scores a point and earns another turn. When the grid is full, the player with more points wins.

I built the full game in C for a programming course, including a computer opponent.

## Structure

The code is split across several source files with a Makefile, instead of one large file. Each file handles one part of the game, such as the board, move checking, scoring, and the AI. The Makefile compiles each file separately and links them, so changing one file only recompiles that file.

## AI opponent

The computer player picks its moves instead of placing letters at random.

<!-- TODO: describe the AI's strategy. For example: does it first look for a move that completes an SOS, then avoid moves that set up an SOS for the opponent? -->

<!-- TODO: add a screenshot of a game in the terminal to public/projects/sos/ and embed it here. -->
<!-- TODO: add repo: https://github.com/vishnupsuresh/... to the frontmatter if the code is public. -->
