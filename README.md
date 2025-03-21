# 🌀 Node.js Reverse Proxy

This is a simple Node.js reverse proxy server built using the `http-proxy` package.  
It listens on a specified port (default: **9090**) and forwards all incoming HTTP requests to a target server (e.g., an R server running on port **8080**).

---

## 🚀 Features

- Lightweight HTTP reverse proxy
- Customizable target and port
- Logs incoming requests
- Graceful error handling

---

## 📦 Requirements

- Node.js (v14 or above recommended)
- npm
---OR---
- npm init -y
- npm install http-proxy
---

## 📁 Installation

1. Clone this repository or create a new directory:
   git clone <repository-url>

2. node proxy.js
3. Access your application through:
   http://localhost:9090
4. It will transparently forward all traffic to:
   http://localhost:8080

## ⚙️ Customization

- To change the proxy target, update this line in proxy.js:
const TARGET = 'http://localhost:8080';

- To change the proxy port, update this line:
const PORT = 9090;
