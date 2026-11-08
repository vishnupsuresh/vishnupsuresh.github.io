---
title: Low-Cost EEG Brain Disorder Detection
summary: TensorFlow CNN that detects brain disorders from EEG data at 85% test accuracy.
date: Sep 2023 – Mar 2024
tags: [Python, TensorFlow, Pandas, CNNs]
order: 2
---

## Overview

A convolutional neural network that classifies EEG recordings to detect brain disorders.

## Data

I pulled EEG data from public medical repositories and cleaned it with Pandas. That meant handling missing values, inconsistent sampling rates, and inconsistent label formats.

## Model

- TensorFlow CNN trained with an 80/20 train-test split.
- Tuned batch size to reach **85% test accuracy**.

<!-- TODO: name the dataset, list the disorders classified, and add a repo link in the frontmatter (repo: https://github.com/vishnupsuresh/...). -->
