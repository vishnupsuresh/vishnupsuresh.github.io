---
title: Custom 32-bit Accumulator CPU
summary: Single-cycle and pipelined CPU in SystemVerilog with a 20-instruction ISA and a Python assembler.
date: Mar – May 2026
tags: [SystemVerilog, Python, GTKWave, Computer Architecture]
repo: https://github.com/Canjap/von-Neumann-architecture
order: 1
---

## Overview

A three-person team project. We designed a 32-bit accumulator-based CPU in SystemVerilog and built it twice: as a single-cycle datapath and as a pipelined datapath. Both share one control unit.

## Instruction set

- 20 instructions covering arithmetic, memory, branching, and stack-based procedure calls.
- Fixed 32-bit format: 6-bit opcode, 26-bit immediate.

## Pipeline

Hazard detection stalls the pipeline on stack-pointer and link-register dependencies.

## Assembler

A Python assembler with label resolution and PC-relative branch encoding translates programs such as Fibonacci and factorial into hex machine code.

## Verification

We verified both designs with testbench simulation and GTKWave waveforms, debugging timing and memory addressing.

## My role

I built the single-cycle CPU and its testbenches, and wrote the ISA specification (`isa.md`) and assembly specification (`asm_spec.md`).

<!-- TODO: add a datapath diagram or GTKWave screenshot to public/ and embed it here: ![Datapath](/cpu-datapath.png) -->
