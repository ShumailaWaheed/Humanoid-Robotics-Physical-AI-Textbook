---
title: "Module 1: ROS 2 Fundamentals"
description: "Master the Robotic Operating System 2 (ROS 2) to control humanoid robots, manage nodes, topics, and services, and bridge Python AI agents with ROS controllers for advanced robotics applications."
keywords: [ROS 2, Robot Operating System, Python, nodes, topics, services, humanoid robots, middleware, robotics]
sidebar_position: 1
sidebar_label: "Module 1: ROS 2"
week: 3
module: 1
prerequisites: ["intro"]
learning_objectives:
  - Understand ROS 2 architecture, middleware, and ecosystem
  - Create, manage, and orchestrate ROS 2 nodes, topics, services, and actions
  - Bridge Python-based AI agents with ROS 2 controllers
  - Work with URDF to describe complex humanoid robots
  - Implement launch files, manage parameters, and debug multi-node systems
---

# Module 1: ROS 2 Fundamentals

## Module Overview
**ROS 2 (Robot Operating System 2)** is the industry-standard framework for developing advanced robot software. It provides a **modular and distributed architecture**, enabling humanoid robots to communicate, process sensor data, and perform complex autonomous behaviors.  

In this module, students will learn **ROS 2 fundamentals**, gain hands-on experience with Python nodes, topics, and services, and connect AI agents to control physical and simulated robots. By the end, learners will have the skills to design, implement, and test humanoid robot behaviors in a robust and scalable way.

---

## Why ROS 2?

ROS 2 is essential for modern robotics due to its:

- **Standardized Middleware:** Supports inter-process communication using DDS, ensuring interoperability across robots and platforms.  
- **Distributed Architecture:** Nodes can run across multiple machines, enabling scalable and modular robot systems.  
- **AI Integration:** Python-based AI agents can be seamlessly connected to control ROS 2 nodes.  
- **Humanoid Robot Support:** URDF allows precise representation of humanoid kinematics, sensors, and actuators.  
- **Cross-Platform Compatibility:** Works on Linux, Windows, and Mac, giving flexibility for development environments.

---

## Module Structure

### Week 3: Introduction to ROS 2
- Overview of ROS 2 architecture: **DDS**, **nodes**, **topics**, and **services**  
- Installation of ROS 2 Humble/Iron on Ubuntu 22.04 LTS  
- Creating your **first ROS 2 node** in Python  
- Understanding ROS 2 workspace structure and package organization  
- Hands-on exercise: Create a basic publisher-subscriber node pair  

### Week 4: ROS 2 Communication
- **Publishing & Subscribing** to topics for real-time messaging  
- **Services & Actions**: Implement request-response and long-running tasks  
- **Parameter Management**: Dynamic runtime parameters and configurations  
- Simulating sensors (IMU, LiDAR) and actuators  
- Hands-on exercise: Build a multi-node communication pipeline  

### Week 5: Advanced ROS 2 Concepts
- **Launch Files**: Automate multi-node orchestration  
- **Debugging & Logging**: Use `ros2 topic echo`, `ros2 node info`, and logging best practices  
- Bridging **Python AI agents** with ROS 2 nodes  
- Working with **URDF**: Model humanoid robot joints, sensors, and links  
- Hands-on exercise: Integrate AI logic with robot motion and sensor feedback  

---

## Learning Outcomes

After completing this module, students will be able to:

1. Design and implement ROS 2 nodes and communication networks  
2. Build and deploy ROS 2 packages in Python  
3. Simulate and test humanoid robot behaviors effectively  
4. Integrate AI agents to control ROS 2 nodes  
5. Debug multi-node systems and optimize robot performance  
6. Work with URDF for complex humanoid modeling  

---

## Practical Tips

- Always **namespace nodes and topics** to avoid conflicts in large projects  
- Use **RViz** to visualize URDF robots and verify kinematics  
- Modularize Python scripts for **reusability across robots**  
- Debug communication using `ros2 topic list`, `ros2 topic echo`, and `ros2 service list`  
- Keep a consistent folder structure for packages, nodes, and launch files  

---

## Hands-On Exercises

- Week 3: Create a **publisher-subscriber** node pair for a sensor  
- Week 4: Implement a **service-action pair** for a request-response scenario  
- Week 5: Integrate a **Python AI agent** to control a humanoid joint in simulation  

---

## Next Steps

- Move on to **Module 2: Digital Twin** to simulate ROS 2-controlled robots in Gazebo and Unity  
- Practice running multiple nodes simultaneously and testing robot behaviors in a simulated environment  
- Begin planning your **capstone humanoid project** by defining key nodes and sensors  

