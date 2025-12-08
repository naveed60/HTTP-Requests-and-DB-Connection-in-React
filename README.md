We are going to cover making HTTP requests from a React application and connecting to a database.
Note: React is a frontend library, so it doesn't connect directly to a database. Instead, we make HTTP requests to a backend server (like Node.js, Express, etc.) that interacts with the database.

Steps:

Setting up a React app.

Making HTTP requests from React to a backend API.

Example of a backend API (for context) that connects to a database.

Since the focus is on React, we'll briefly show how to set up a simple Express server with a database (using MongoDB as an example) and then focus on the React part.

Part 1: React HTTP Requests

We can use the built-in fetch or libraries like axios to make HTTP requests.

Example using fetch:

GET request
Once basics work:

Search bar (query param on GET /api/books?search=...)

Filters: category, price range
Common security vulnerabilities in Next.js applications typically stem from how data is rendered (SSR/CSR), how API routes are handled, and standard web vulnerabilities that affect React.

Here are the critical security issues to watch for in Next.js and how to fix them.

1. Cross-Site Scripting (XSS) via dangerouslySetInnerHTML
React naturally protects against XSS by escaping content. However, developers often bypass this using dangerouslySetInnerHTML. If the data passed here is not sanitized, attackers can inject malicious scripts.

The Risk: An attacker inputs <img src=x onerror=alert(1)> into a comment field, and your app renders it raw.

The Fix: Use a sanitation library like DOMPurify before rendering.

JavaScript

import DOMPurify from 'isomorphic-dompurify';

const content = "<img src=x onerror=alert('Hacked')>";
const clean = DOMPurify.sanitize(content);

function MyComponent() {
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}
2. Server-Side Request Forgery (SSRF) in API Routes
Next.js allows you to build backend API routes (/pages/api or /app/api). If your API fetches data from a URL provided by a user without validation, an attacker can trick your server into querying internal resources (like AWS metadata services or internal databases) that are not exposed to the public internet.

The Risk: An attacker sends https://your-site.com/api/proxy?url=http://169.254.169.254/latest/meta-data/.

The Fix: Whitelist allowed domains and validate URLs strictly.

JavaScript

// Good practice in API route
const allowedDomains = ['api.example.com', 'partners.com'];

export default async function handler(req, res) {
  const { url } = req.query;
  const parsedUrl = new URL(url);

  if (!allowedDomains.includes(parsedUrl.hostname)) {
    return res.status(400).json({ error: 'Invalid domain' });
  }

  const response = await fetch(url);
  // ...
}
3. Leaking Secrets in the Client Bundle
This is the most common Next.js specific error. Environment variables prefixed with NEXT_PUBLIC_ are bundled into the JavaScript sent to the browser. If you accidentally prefix a private key (like a Stripe Secret Key or Database Password) with NEXT_PUBLIC_, it is visible to anyone who inspects your source code.

The Risk: NEXT_PUBLIC_DB_PASSWORD is visible in the "Sources" tab of Chrome DevTools.

The Fix:

Only use NEXT_PUBLIC_ for variables that are truly public (like Google Analytics IDs).

Keep secret keys (API secrets, DB passwords) in .env without the prefix and only access them inside getStaticProps, getServerSideProps, or API routes.

4. Broken Authentication in Middleware
Next.js Middleware allows you to run code before a request is completed. A common mistake is using NextResponse.next() too liberally or failing to properly verify JSON Web Tokens (JWTs) on protected routes.

The Risk: A user manually sets a fake cookie or header, bypassing a weak check in middleware.

The Fix: Use established libraries (like next-auth or jose) to verify the signature of the token, not just its presence.

Pagination

Book reviews & ratings

Real payment integration (Stripe, PayPal)

Image upload (Cloudinary, etc.)

Responsive UI with Tailwind / Bootstrap.

11. Deployment (later)

Backend: Render, Railway, Heroku alternative, or VPS.

Database: MongoDB Atlas.

Frontend: Vercel, Netlify, etc.

Set environment variables in production.

If you want, next step I can do for you is:

Give you a minimal MERN book-store boilerplate structure (exact file tree + empty files)
or

Write full code for one part, like: “books API with Express + MongoDB” or “auth system for this bookstore”.

Tell me which part you want full code for first: books API, auth, cart/order, or React frontend setup.
POST request

Example using axios:

GET request

POST request

Part 2: Backend Server (Express + MongoDB) for context

We'll create a simple Express server with Mongoose to interact with MongoDB.

Part 3: Connecting React to the Backend

Let's break it down:

Create a React app (using Create React App or any other method).

In the React app, we'll make requests to the backend API.

We'll create a simple component that:

Fetches data from the backend (GET)
I've created several modern coupon button designs for your Rails ERB template! Here are 5 different styles:

Elegant Gradient - Smooth gradient with shine effect on hover
Pulsing Glow - Continuously pulsing with glow animation
Ticket-Style - Classic coupon ticket design with bouncing animation
Gradient Flash - Multi-color gradient that cycles through colors
Neon Retro - Cyberpunk-style neon blinking effect

To use these in your Rails ERB template, simply add the CSS to your stylesheet and use one of these class names:
  }
})
Key Differences in Practice
HTTP requests can be made to any web resource (websites, images, files), while API requests specifically target programmatic interfaces designed for data exchange between applications.
HTTP requests focus on the technical protocol details, while API requests focus on the business logic and data being exchanged.
In summary: API requests typically use HTTP as their underlying protocol, so most API requests are actually HTTP requests with specific formatting and endpoints designed for programmatic access.RetryClaude does not have the ability to run the code it generates yet.
