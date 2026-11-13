---
title: "Control strategies"
summary: "Model predictive control and coordinated converter control for power exchange between AC and DC sub-grids."
order: 2
status: in-progress
methods: ["Model predictive control (MPC)", "Finite-control-set MPC (FCS-MPC)", "Converter control"]
featured: true
placeholder: true
---

## Model predictive control

Model predictive control (MPC) uses a mathematical model of the converter and its surroundings to predict how the system will respond to each possible control action, then applies the action that best meets a stated objective. In finite-control-set MPC (FCS-MPC), the controller evaluates the converter's discrete switching states directly, without a separate modulator.

## Coordinated converter control

In a hybrid multi-microgrid the interlinking converters do not act alone: their control objectives have to be coordinated so that power exchange between sub-grids supports the system as a whole.

## Contribution of this work

This section will state the specific control strategies developed in the PhD and how they differ from existing approaches, once those details are confirmed for publication.
