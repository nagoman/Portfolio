# Negasa Teferi Kistana React Portfolio

A modern, executive-level React portfolio and ATS-friendly CV website for Negasa Teferi Kistana, focused on digital banking product ownership, fintech innovation, mobile banking, internet banking, payments, lending, and API-led product delivery.

This version uses React components loaded in the browser, so a Node/npm build step is not required. Visitors open the normal website URL, so they do **not** need to type an `.html` extension.

## Run in GitHub Codespaces

1. Open this repository on GitHub.
2. Click **Code → Codespaces → Create codespace on current branch**.
3. Wait for Codespaces to finish opening the workspace.
4. In the Codespaces terminal, run one of these commands:

```bash
./run.sh
```

or:

```bash
python3 -m http.server 8000
```

5. When GitHub shows the forwarded port notification, click **Open in Browser**. You can also open the **Ports** tab and select port `8000`.
6. If prompted, set port visibility to **Public** only when you want to share the preview link with someone else.

> If you see `bash: npm: command not found`, that is okay. This project does not need npm. Use `./run.sh` instead.
>
> If you see `python3: command not found`, your Codespace image is missing Python. Run:
>
> ```bash
> sudo apt-get update
> sudo apt-get install -y python3
> ./run.sh
> ```
>
> Do not run `install python3`; that is a different Linux command and needs a destination file.

## Local Preview

```bash
./run.sh
```

Then visit `http://localhost:8000`.

## Install on GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose your branch and the `/ (root)` folder.
5. Save the settings.
6. Open the generated GitHub Pages URL. The React portfolio opens from the root URL without `/index.html`.
