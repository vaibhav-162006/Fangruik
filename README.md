# Fangruik

An ecommerce storefront for beauty, skincare, and everyday self-care essentials.

## Run locally

```bash
npm install
npm run dev
```

## Deploy on Vercel (recommended)

1. Create a GitHub repository and push the `product-showcase` folder to it.
2. Open [Vercel](https://vercel.com), select **Add New → Project**, and import your repository.
3. If your repository has a parent folder, set **Root Directory** to `product-showcase`.
4. Confirm **Build Command** is `npm run build` and **Output Directory** is `dist`.
5. Click **Deploy**. Future pushes deploy automatically.

The included `vercel.json` makes direct links such as `/products/1` work in production.

## Deploy on Netlify

1. Push the project to GitHub.
2. In [Netlify](https://netlify.com), select **Add new site → Import an existing project**.
3. Select the repository; set its base directory to `product-showcase` if applicable.
4. Deploy. The included `netlify.toml` provides the correct build settings and routing support.

Contact details are configured in the Contact and Footer components.
