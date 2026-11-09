---
title: "ChargeMate: Mobile Charging Robot"
summary: Robot that drives to a user's call button, coordinated by a network of Raspberry Pis.
date: Sep – Dec 2025
tags: [Python, C++, Raspberry Pi, Arduino, ESP32, Linux]
order: 3
---

## Overview

ChargeMate is a robot car that comes to you when your phone is dying. A user presses a button at a station, and the robot drives to that station so the user can charge their device. A team of five built it in fall 2025.

## System design

The system has three layers, each on different hardware:

| Layer | Hardware | Job |
|---|---|---|
| Button stations | Raspberry Pi clients | Detect a button press and send a charge request |
| Server | Raspberry Pi 5 | Collect requests and decide where the robot goes |
| Robot | Arduino + ESP32 | Receive a target position and drive the motors |

**Request flow:**

1. A user presses the button at a station.
2. That station's Raspberry Pi sends a request to the server over a Python socket.
3. The server handles each client on its own thread, so several stations can send requests at once.
4. The server forwards the target to the robot through an ESP32 Wi-Fi module.
5. The ESP32 passes the command to the Arduino over UART (SoftwareSerial), and the Arduino drives the motors to that position.

## Hardware

The robot is built on an ELEGOO Smart Robot Car Kit. We added 3D-printed mounts to hold the battery pack and controls on the chassis. The robot follows a line on the floor using infrared sensors.

## My role

- Built the **IR line-tracking module** that keeps the robot on its path.
- Built the **button stations** and their communication with the robot through the ESP32.

## Challenges

- **Three kinds of hardware in one path.** A request crosses Python sockets, Wi-Fi, and a serial link before it reaches the motors. Each hop has its own message format, so we translated the request at every boundary.
- **Concurrent requests.** Multithreading on the server lets several stations send requests without blocking each other.

<!-- TODO: add a photo or short video of the robot: put it in public/projects/chargemate/ and embed with
<figure><img src="/projects/chargemate/robot.jpg" alt="ChargeMate robot" /><figcaption>...</figcaption></figure> -->
<!-- TODO: add repo: https://github.com/vishnupsuresh/... to the frontmatter if the code is public. -->
