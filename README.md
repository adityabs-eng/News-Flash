# 📰 News Flash – Modern News Web App

👉 **Live Demo (GitHub Pages):**
🔗 [https://adityabs-eng.github.io/News-Flash/](https://adityabs-eng.github.io/News-Flash/)

---

## 📌 Overview

**News Flash** is a modern, responsive news web application that fetches real-time news articles using the **NewsData.io API**. The application is built with pure **HTML, CSS, and JavaScript** and is hosted on **GitHub Pages**.

---

## 🔄 API Update (Important)

### ❌ Removed API

* **GNews API** has been completely removed from this project.
* Reason: GNews does **not support direct frontend requests** on static hosting platforms like GitHub Pages due to strict **CORS restrictions**.

### ✅ Current API Used

* **NewsData.io API**
* Reason:

  * Allows **direct browser-based requests**
  * Works seamlessly on **GitHub Pages**
  * Suitable for frontend-only projects

---

## ⚠️ Concern: CORS (Cross-Origin Resource Sharing)

### ❓ What was the problem?

* While using **GNews API**, the application failed on GitHub Pages.
* The browser blocked API calls due to **CORS policy restrictions**.

### 🧠 Why this happens

* GitHub Pages is a **static hosting service**.
* Some APIs (like GNews) block requests coming directly from browsers for security reasons.

---

## 🛠️ How This Issue Was Overcome

### ✅ Solution Implemented

* Switched from **GNews API** to **NewsData.io API**.
* NewsData.io supports **client-side fetching** without triggering CORS errors.

### 🧩 Alternative Solutions Considered

* Backend proxy using **Node.js + Vercel**
* Serverless functions to hide API keys

> For simplicity and frontend-only deployment, **NewsData.io** was chosen.

---

## 🚀 Features

* 🔎 Search news by keyword
* 🇮🇳 Indian & 🌍 International news coverage
* 🗂 Category-based filtering
* 🔄 Load More pagination
* 📱 Fully responsive UI

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript (ES6)**
* **NewsData.io API**

---

## 📁 Project Structure

```
📦 News-Flash
 ┣ index.html
 ┣ style.css
 ┣ script.js
 ┗ assets/
```

---

## 🔐 API Key Notice

* The API key is currently stored in `script.js` for demo purposes.
* For production-level applications:

  * Use a **backend proxy** (Vercel / Node.js)
  * Store keys in **environment variables**

---

## 📌 Future Enhancements

* Backend proxy for enhanced security
* Server-side caching
* Improved pagination & filters
* Deployment with serverless backend

---

## 🙌 Conclusion

* ✅ Application works perfectly on **GitHub Pages**
* ✅ CORS issue resolved using **NewsData.io**
* ✅ Fully frontend-based solution

If you clone and run this project, you will see a fully working news application without backend dependencies.

---

### ⭐ If you like this project, don’t forget to star the repository!
