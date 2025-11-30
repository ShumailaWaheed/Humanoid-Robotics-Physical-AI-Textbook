# Edge Kit Setup

The **Edge Kit** is a hardware and software toolkit designed to help developers, engineers, and researchers rapidly prototype and deploy edge computing applications. It provides sensors, microcontrollers, and software libraries that integrate seamlessly for IoT, AI, and robotics projects.  

This document provides a detailed setup guide for the Edge Kit, including hardware assembly, software installation, and configuration.

---

## 1. Hardware Components

The Edge Kit contains the following components:

| Component Name          | Description                                      | Quantity | Notes                       |
|-------------------------|--------------------------------------------------|----------|-----------------------------|
| Edge Board              | Microcontroller for processing sensor data      | 1        | Comes pre-flashed           |
| Power Adapter           | Provides stable 5V/2A power                      | 1        | Required for continuous use |
| USB Cable               | Connects Edge Board to computer                 | 1        | Type-C recommended          |
| Sensor Module Pack      | Includes temperature, humidity, and motion sensors | 1        | Stackable on Edge Board     |
| Expansion Boards        | Optional add-ons like camera or display module  | Varies   | Plug-and-play design        |
| Screws & Mounting Kit   | For securing modules                             | 1 set    | Includes small screwdriver  |

---

## 2. Software Requirements

To interface with the Edge Kit, install the following software:

| Software                | Purpose                                         | Recommended Version |
|-------------------------|-------------------------------------------------|-------------------|
| Python                  | Run scripts and manage dependencies            | 3.10+             |
| Edge SDK                | Provides Python API to control Edge Kit        | Latest stable     |
| Visual Studio Code (VSCode) | Code editor for development                  | Latest stable     |
| Git                     | Version control                                 | Latest stable     |
| Drivers for Edge Board  | Allows computer to detect Edge hardware        | Provided in kit   |

---

## 3. Hardware Setup Steps

Follow these steps to assemble the Edge Kit:

1. **Unbox Components:** Lay out all components on a clean workspace.
2. **Attach Sensor Modules:** Connect each sensor module to the Edge Board using the labeled ports.
3. **Connect Expansion Boards (Optional):** Stack any optional expansion modules on top of the Edge Board.
4. **Power the Edge Board:** Plug in the USB cable to your computer or use the power adapter for standalone operation.
5. **Secure Modules:** Use screws from the mounting kit to stabilize modules for long-term deployment.

---

## 4. Software Installation

### 4.1 Install Python

Install Python from the [official website](https://www.python.org/downloads/) and verify installation:

```bash
python --version
