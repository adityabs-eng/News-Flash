# 📰 News Flash – Modern News Web App

👉 **Live Demo (GitHub Pages):**
🔗 [https://adityabs-eng.github.io/News-Flash/]

---

## ⚠️ Important Notice (Why This App Doesn’t Work on GitHub Pages)

This project **works perfectly on local machines** but may **NOT work when hosted on GitHub Pages**.

### ❌ Reason: CORS Policy Restriction

* The app fetches news directly from the **GNews API** using JavaScript (`fetch()` from the browser).
* **GitHub Pages is a static hosting platform**.
* The **GNews API blocks browser requests coming from GitHub Pages domains** due to **CORS (Cross-Origin Resource Sharing) security policies**.

🔒 Because of this, **GitHub’s server cannot call the API**, and the browser blocks the request.

✅ This is **NOT a bug in the code**.
❌ This is a **server-side restriction imposed by the API provider**.

---

## ✅ Why It Works Locally

When you run the project locally:

* The browser treats it as a **local origin**
* API requests are allowed
* No CORS block occurs

Hence, the application works correctly on your system.

---

## 🛠️ How to Run This Project Locally (Recommended)

Follow these steps to run the project successfully:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/adityabs-eng/News-Flash.git
```

### 2️⃣ Navigate to the Project Folder

```bash
cd News-Flash
```

### 3️⃣ Open Using a Local Server (Important)

⚠️ Do **NOT** open `index.html` directly by double-clicking.

Use **any local server**:

####  VS Code Live Server (Easiest)

1. Open the folder in **VS Code**
2. Install **Live Server** extension
3. Right-click `index.html`
4. Click **Open with Live Server**


## 🚀 Features

* 🔎 Search news by keyword
* 🇮🇳 Indian & 🌍 International news
* 🗂 Category filters (Finance, Politics, Tech, Entertainment)
* 🔄 Load More pagination
* 📱 Responsive UI

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript (ES6)**
* **GNews API**

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

* The API key is currently placed in `script.js` for demo purposes.
* For production:

  * Use a backend proxy (Node.js / Vercel)
  * Or store keys in environment variables

---

## 📌 Future Improvements

* Backend proxy to avoid CORS issues
* Server-side caching
* Authentication-based API access
* Deployment using Vercel / Netlify with serverless functions

---

## 🙌 Conclusion

If the app does not load news on GitHub Pages:
✔ Your code is correct
✔ The UI is working
❌ The API blocks GitHub Pages due to CORS

👉 **Clone and run locally to see the full working application.**

---

### ⭐ If you like this project, don’t forget to star the repository!
