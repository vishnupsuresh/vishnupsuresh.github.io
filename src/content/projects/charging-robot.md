---
title: "ChargeMate: Mobile Charging Robot"
summary: Robot that drives to a user's call button, coordinated by a network of Raspberry Pis.
date: Sep – Dec 2025
tags: [Python, C++, Raspberry Pi, Arduino, ESP32, Linux]
order: 3
---

## Overview

A five-person team built a robot car that drives to a user who presses a call button and charges their device.

## How it works

- **Client-server network:** button-equipped Raspberry Pi client nodes send charge requests to a Raspberry Pi 5 server over Python sockets, with multithreading to handle several clients.
- **Server to robot:** the server talks to an Arduino-driven robot car through an ESP32 Wi-Fi module and UART (SoftwareSerial), turning each request into a target position for the motors.
- **Hardware:** built on an ELEGOO Smart Robot Car Kit, with 3D-printed mounts for the battery and controls.

<!-- TODO: add a photo of the robot to public/ and embed it: ![ChargeMate](/chargemate.jpg) -->
