# ProTracker

Daily expense tracker in kip, baht and US dollars that works with no internet.

- Add, edit and delete expenses; quick amount buttons; 9 categories
- Take or upload a receipt image and keep it with the expense
- Totals in ₭ / ฿ / $ with your own exchange rates; monthly budget; chart by day
- Export a month as a PDF report with images, or Excel (CSV) + images in a ZIP
- Backup and restore everything as one ZIP file

All data stays on the phone (browser storage). Make a backup regularly.

## Put it online with GitHub Pages (free)

1. Sign in at github.com and create a new **public** repository, for example `kip-ledger`.
2. On the repository page choose **Add file → Upload files**, drag in **everything inside this folder**
   (all files are at the top level), then **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment* set **Source: Deploy from a branch**,
   **Branch: main**, folder **/(root)**, then **Save**.
4. After a minute your app is at `https://<your-username>.github.io/kip-ledger/`.

## Install on iPhone

1. Open the link in **Safari** (with internet, once).
2. Tap **Share → Add to Home Screen → Add**.
3. Open ProTracker from the home screen. From now on it opens and works with no internet.

On Android: open the link in Chrome, then menu **⋮ → Install app** (or Add to Home screen).

## Updating the app later

Upload the changed files to the same repository, and change `VERSION` at the top of `sw.js`
(for example `kipledger-v3`) so phones pick up the new version the next time they have internet.
Your saved expenses are not affected by updates.
