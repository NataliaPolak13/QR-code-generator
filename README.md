# 📦 QR Code Generator

A simple Node.js application that generates **QR codes** from a user-submitted link.  
Built with **Express.js**, **EJS** templates and the [`qr-image`](https://www.npmjs.com/package/qr-image) package.  

---

## ✨ Features
- Generate a QR code from any link 📱  
- Save generated QR codes in the `/public/assets` folder 🗂️  
- Display the last 8 submitted links and their QR codes directly in the browser.  
- Use JSON storage for persisting the last submitted links.  

---

## 🚀 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/NataliaPolak13/QR-code-generator.git
cd qr-code-generator
npm install

```

## ▶️ Usage

Start the development server:
```bash
node index.js
```

By default, the app will run at http://localhost:3000

## 🖥️ How it works

1. Open http://localhost:3000.
2. Enter a link in the form.
3. Click generate button – the app will:
    - Save your link in data/links.json.
    - Generate a QR code (qr.png) in /public/assets.
    - Display it back in the browser.

## 📂 Project structure
```bash
├── public/
│   ├── assets/        # generated QR codes
│   └── styles/        # CSS files
├── views/             # EJS templates
├── routes/            # application routes
├── controllers/       # route controllers (business logic)
├── data/              # JSON file with saved links
├── index.js           # Express server
└── package.json

```

## ⚙️ Tech stack

- Node.js
- Express.js
- EJS
- qr-image

## 📸 Example
```bash
Input:   https://www.google.com/
Output: 
  - A QR code is generated and saved as qr.png.  
  - The QR code is displayed back in the browser.
```

## 👩‍💻 Author
Created by [NataliaPolak13](https://github.com/NataliaPolak13).
