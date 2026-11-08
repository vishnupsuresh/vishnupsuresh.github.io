---
title: Custom 32-bit CPU
summary: Single-cycle and 5-stage pipelined CPU in SystemVerilog with a custom assembler.
date: Mar – May 2026
tags: [SystemVerilog, Python, Computer Architecture]
repo: https://github.com/Canjap/von-Neumann-architecture
order: 1
---

## Overview

A three-person team project for ECE 251B. We designed a Von Neumann accumulator architecture with a fixed 32-bit instruction format and implemented it twice: as a single-cycle datapath and as a 5-stage pipeline.

## Design

- **Pipeline:** five stages with hazard detection, stall logic, and forwarding.
- **Assembler:** a custom Python assembler converts our assembly language to machine code.
- **Testing:** test programs include Fibonacci and factorial.

## My role

I built the single-cycle CPU and its testbenches, and wrote the ISA specification (`isa.md`) and assembly specification (`asm_spec.md`).
