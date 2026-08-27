# Negasa Teferi Kistana React Portfolio

A modern, executive-level React portfolio and ATS-friendly CV website for Negasa Teferi Kistana, focused on digital banking product ownership, fintech innovation, mobile banking, internet banking, payments, lending, and API-led product delivery.

This version uses React components loaded in the browser, so it has no package dependencies, build step, or backend server. The contact form opens the visitor's email application using the displayed contact address.

## Deploy static files with GitHub Pages

The repository includes a GitHub Actions workflow that publishes the static site whenever the Codespaces branch `codex/create-and-deploy-digital-portfolio-website-djty05` changes.

1. Commit and push this Codespaces branch to GitHub.
2. Open the repository's **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Open the **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to complete.
4. Open the project site at `https://nagoman.github.io/Portfolio/`.

The complete static portfolio, including the footer and contact form, is published by the workflow. This is a project site, so `https://nagoman.github.io/` is a separate user-site URL and will not display this repository.

### Custom domain troubleshooting

The **Custom domain** field must contain a complete domain that you own, such as `nagoportfoliocv.com` or `www.nagoportfoliocv.com`. `nagoportfoliocv` by itself is not valid. If you do not own a domain yet, leave the field empty and use the generated URL: `https://nagoman.github.io/Portfolio/`.

For a custom domain, add the DNS records required by your domain provider before saving the Pages setting. Use a `CNAME` record from `www` to `nagoman.github.io`, or use the apex-domain `A` records listed in GitHub's [custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
