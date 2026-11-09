---
title: Custom 32-bit Accumulator CPU
summary: Single-cycle and pipelined CPU in SystemVerilog with a 20-instruction ISA and a Python assembler.
date: Mar – May 2026
tags: [SystemVerilog, Python, GTKWave, Computer Architecture]
repo: https://github.com/Canjap/von-Neumann-architecture
order: 1
---

## Overview

For our ECE 251 final project, a team of three (Sanjay Chemban, Austin Blaylock, and I) designed a CPU from the instruction set up. Most textbook CPUs use a register file. Ours is an **accumulator architecture**: one 32-bit register, `ACC`, is the implicit source and destination of every ALU operation. That removes register fields from the instruction, which frees 26 bits for the immediate.

We built the design twice, as a single-cycle CPU and as a 5-stage pipelined CPU, and both run the same programs. A [video demo](https://youtu.be/gfwH_sCVNXE) shows the build, compile, and waveform workflow.

## My role

- Designed the **single-cycle datapath and controller** (`cpu_datapath.sv`, `cpu_controller.sv`) and integrated them into the top-level module.
- Wrote the **single-cycle testbench** (`tb_sc_cpu.sv`), which verifies instruction execution, PC incrementing, and memory write-back.
- Wrote the **ISA specification** (`isa.md`) and **assembly language specification** (`asm_spec.md`).
- Mapped every part of the project rubric to the repository files.

## Instruction format

Every instruction is 32 bits: a 6-bit opcode and a 26-bit signed immediate.

```
 31      26 25                         0
┌──────────┬───────────────────────────┐
│  opcode  │           imm26           │
└──────────┴───────────────────────────┘
```

Besides `ACC`, the CPU has three special registers: the program counter (`PC`), a link register (`LR`) for return addresses, and a stack pointer (`SP`) that starts at `0x100` and grows downward.

## Instruction set

| Group | Instructions | What they do |
|---|---|---|
| Arithmetic (immediate) | `NOP` `ADD` `MULT` `DIV` | ACC ← ACC op imm |
| Arithmetic (memory) | `ADDM` `SUBM` `MULTM` `DIVM` | ACC ← ACC op Mem[imm] |
| Load / store | `LDA` `STA` | Move a word between ACC and memory |
| Stack | `ADDSP` `STSP` `LDSP` | Adjust SP; push and pop ACC |
| Link register | `GETLR` `SETLR` | Copy between ACC and LR, for nested calls |
| Control flow | `BZ` `BNZ` `JMP` `CALL` `RET` | Branch on ACC, jump, call, return |

Branches are PC-relative. The target is

**target** = (PC + 4)<sub>D</sub> + 4 + (sign_ext(imm26) × 4)

where (PC + 4)<sub>D</sub> is the decode-stage value. The extra +4 compensates for the registered PC.

## Single-cycle CPU

Each instruction completes in one clock cycle. The main decoder turns the opcode into control signals: ALU source, memory address source (immediate, ALU result, or `SP`), write enables for `ACC`, memory, `SP`, and `LR`, and branch and jump flags. A 3-bit `aluop` is passed to an ALU decoder that selects add, subtract, multiply, or divide.

<figure>
  <img src="/projects/cpu/sc-waveform.png" alt="GTKWave trace of the single-cycle CPU running a countdown program" loading="lazy" />
  <figcaption>The single-cycle CPU running a countdown program in GTKWave. ACC steps 5 → 4 → 3 → 2 → 1 → 0, one instruction per cycle. The final memory write to address 252 signals completion.</figcaption>
</figure>

## Pipelined CPU

The pipelined version splits execution into fetch, decode, execute, memory, and writeback. It forwards results from the memory and writeback stages back to execute, and it flushes the pipeline on taken branches.

The hard part of an accumulator design is that almost every instruction reads and writes the same register, and procedure calls depend on `SP` and `LR`. The hazard unit stalls the pipeline up to 3 cycles after `ADDSP` before a stack access, and 2 cycles between `SETLR` and `RET` or `GETLR`.

<figure>
  <img src="/projects/cpu/component-diagram.png" alt="Pipeline diagram showing the five stages, forwarding paths, and hazard stalls" loading="lazy" />
  <figcaption>Data flow through the five stages, including the MEM → EX and WB → EX forwarding paths and the stall and flush signals.</figcaption>
</figure>

## Assembler and test programs

A Python assembler turns `.asm` files into hex machine code for instruction memory. It resolves labels and encodes branch offsets relative to the PC. We tested both CPUs with a countdown loop, leaf and nested procedures, and recursive Fibonacci and factorial programs. The recursive programs exercise the stack and link register.

## What I learned

Writing the ISA spec before the hardware made the control logic simpler: every signal in the controller traces back to one row of the spec. The pipeline showed what the single-cycle design hides. An accumulator machine has constant data dependencies, so forwarding and stall logic carry much of the design.
