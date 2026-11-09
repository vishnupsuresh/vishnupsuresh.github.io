---
title: Low-Cost EEG Brain Disorder Detection
summary: TensorFlow CNN that detects brain disorders from EEG data at 85% test accuracy.
date: Sep 2023 – Mar 2024
tags: [Python, TensorFlow, Pandas, CNNs]
order: 2
---

## Overview

EEG (electroencephalography) records the brain's electrical activity through electrodes on the scalp. Clinicians read EEGs to diagnose brain disorders, which takes trained specialists and expensive equipment. This project asks whether a convolutional neural network can flag disorders from EEG recordings automatically, as a step toward low-cost screening.

## Data

The data came from public medical repositories. Raw EEG data is messy, and most of the work was cleaning it with Pandas:

- **Missing values:** gaps in recordings had to be filled or dropped.
- **Inconsistent sampling rates:** recordings from different sources were sampled at different frequencies, so they had to be brought to a common rate before the model could compare them.
- **Label formatting:** each source labeled diagnoses differently, so I mapped them to one consistent set of classes.

<!-- TODO: name the repositories/datasets used and the disorders classified. -->

## Model

I chose a CNN because convolutions pick up local patterns in a signal, like spikes and rhythms in EEG, wherever they appear in the recording.

- Built and trained in TensorFlow.
- 80/20 train-test split, so the model is scored on recordings it never saw during training.
- Tuned batch size to improve convergence.

<!-- TODO: describe the architecture (number of conv layers, filter sizes, pooling, dense layers). -->

## Results

The final model reached **85% accuracy** on the held-out test set.

<!-- TODO: add a confusion matrix or training curve image to public/projects/eeg/ and embed it here. -->
<!-- TODO: add repo: https://github.com/vishnupsuresh/... to the frontmatter if the code is public. -->
