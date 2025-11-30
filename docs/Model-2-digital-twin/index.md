---
title: "Module 2: Digital Twins & Robot Simulation"
description: "Build digital twins for humanoid robots using Gazebo and Unity to simulate sensors, physics, and environments."
keywords: [Gazebo, Unity, digital twin, simulation, sensors, physics, robotics simulation]
sidebar_position: 2
sidebar_label: "Module 2: Digital Twin"
week: 6
module: 2
prerequisites: ["module-1-ros2/index"]
learning_objectives:
  - Build Gazebo simulation environments with physics and sensor models
  - Integrate Unity for photorealistic visualization and synthetic sensor data
  - Debug and validate robot behaviors in simulation before hardware deployment
  - Bridge simulation and real-world workflows for sim-to-real transfer
---

# Digital Twins - Simulation & Sensors

**Duration**: Weeks 6-7 | **Estimated Time**: 6 hours  
**Prerequisites**: [Module 1: ROS 2](../module-1-ros2/index.md)

---

## Module Overview

A **digital twin** is a precise virtual replica of a physical robot, replicating its sensors, movements, and environment. Digital twins enable you to:

- **Safely test algorithms** without risking hardware  
- **Train AI/ML models** using synthetic sensor data  
- **Debug complex robot behaviors** in controlled simulations  
- **Validate designs and workflows** before deploying real robots  

In this module, you will learn to simulate robots using:  

- **Gazebo**: Open-source physics engine integrated with ROS 2  
- **Unity**: High-fidelity visualization and sensor simulation platform  

---

## Why Digital Twins?

Digital twins are essential in **Physical AI** because they:

- **Save costs**: Reduce hardware testing expenses  
- **Enhance safety**: Avoid damaging robots or environments  
- **Accelerate learning**: Experiment and iterate faster  
- **Enable reproducibility**: Exact simulation conditions can be repeated  

---

## Module Structure

### Week 6: Gazebo Simulation

- Install and configure Gazebo with ROS 2  
- Create simulation worlds with realistic physics  
- Integrate sensors: cameras, LiDAR, IMU, and force/torque sensors  
- Spawn robots and control them via ROS 2 topics  
- Debug **simulation-to-reality discrepancies**  

### Week 7: Unity for Photorealistic Simulation

- Set up Unity Robotics Hub with ROS-TCP Connector  
- Import robot URDF models into Unity  
- Simulate sensors with **photorealistic rendering**  
- Generate synthetic datasets for ML training  
- Compare Gazebo and Unity for different simulation use cases  

---

## Learning Outcomes

By completing this module, you will be able to:

✅ **Build Gazebo worlds** with terrain, obstacles, and lighting  
✅ **Simulate realistic sensors** including cameras, LiDAR, and IMUs  
✅ **Perform sim-to-real transfer** for algorithms  
✅ **Choose the right tool** for your use case: Gazebo vs Unity vs Isaac Sim  
✅ **Create synthetic datasets** for machine learning applications  

---

## Capstone Integration

- Test navigation in Gazebo before physical deployment  
- Use Unity for photorealistic camera feeds for perception tasks  
- Validate sim-to-real performance efficiently  
- Reduce hardware dependency for early-stage prototyping  

---

## Time Commitment

- **Lectures & Reading**: 2 hours/week  
- **Hands-On Exercises**: 2 hours/week  
- **Gazebo Simulation Project**: 4 hours  
- **Unity Simulation Project**: 4 hours  
- **Total**: ~12 hours across 2 weeks  

---

## Assessment

- **Gazebo Simulation Project**: Build an environment and navigate a robot using simulated sensors  
- **Unity Simulation Project**: Generate realistic sensor data and validate perception algorithms  
- Focus on realism, sensor integration, and **sim-to-real performance**  

---

## Table 1: Simulation Platform Comparison

| Feature | Gazebo | Unity / Isaac Sim |
|---------|--------|-----------------|
| **Physics** | ODE, Bullet | PhysX / PhysX GPU |
| **ROS Integration** | Native ROS 2 | ROS-TCP Connector / Native ROS 2 |
| **Graphics** | Basic | Photorealistic + RTX |
| **Best For** | Rapid prototyping | Synthetic data generation / Large-scale RL |
| **License** | Open-source | Free (with GPU for Isaac Sim) |

---

## Next Steps

1. Complete **Module 1**: ROS 2 basics  
2. Install **Gazebo** and set up simulation environment  
3. Begin **Week 6**: Build Gazebo simulations  
4. Prepare for **Week 7**: Unity photorealistic sensor simulations  

---

## Discussion & Self-Check Questions

Test your understanding and apply what you learned in this module with the following questions:

### Conceptual Understanding
1. What is a **digital twin**, and why is it essential for developing physical AI systems?
2. How does simulating a robot in Gazebo reduce costs, risks, and development time compared to real-world testing?

### Practical Application
3. Design a simple Gazebo environment with obstacles. How would you test a humanoid robot’s navigation using sensors?
4. Compare Unity vs. Gazebo for simulating **RGB-D sensors**. What are the main advantages and disadvantages of each?

### Sim-to-Real Transfer
5. What challenges might arise when transferring control algorithms from simulation to a real robot?
6. How would you validate that your simulated behaviors accurately match the physical robot’s behavior?

### Critical Thinking
7. If a sensor behaves differently in Unity than in Gazebo, how would you diagnose and resolve the discrepancy?
8. Discuss how digital twins can be used to **train AI models for humanoid manipulation tasks** before real-world deployment.

### Bonus / Research Questions
9. Explore how photorealistic simulation in Unity can improve **computer vision models** for humanoid robots.
10. How can multiple digital twins running in parallel accelerate testing for autonomous robot navigation?


