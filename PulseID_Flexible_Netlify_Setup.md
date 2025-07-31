# PulseID Flexible Netlify Proxy – Step-by-Step

This proxy allows you to call **any PulseID API endpoint** (GET, POST, etc.) securely via a single Netlify Function.

---

## ✅ Step 1: Folder Structure

```
pulseid-flexible-netlify-proxy/
├── netlify.toml
└── netlify/
    └── functions/
        └── pulseid-proxy.js
```

Or use the provided ZIP file.

---

## ✅ Step 2: Deploy to Netlify

1. Go to https://netlify.com
2. Create a new site
3. Import from Git or drag/drop this folder
4. After deployment, your function will be live at:

```
https://your-site-name.netlify.app/.netlify/functions/pulseid-proxy
```

---

## ✅ Step 3: Usage Examples

### 🔹 GET Example

```js
fetch("https://your-site-name.netlify.app/.netlify/functions/pulseid-proxy?endpoint=Designer/GetProduct&variantId=123&sku=123")
```

### 🔹 POST Example

```js
fetch("https://your-site-name.netlify.app/.netlify/functions/pulseid-proxy?endpoint=Designer/SaveDesign", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ design: "abc123", sku: "xyz789" })
})
```

---

## ✅ Step 4: Secure CORS in Production

In `pulseid-proxy.js`, update this:

```js
"Access-Control-Allow-Origin": "*"
```

To:

```js
"Access-Control-Allow-Origin": "https://yourstore.com"
```

---

You now have:
- ✅ Support for all PulseID endpoints
- ✅ CORS-safe requests
- ✅ Hidden API credentials
- ✅ Single maintainable endpoint
