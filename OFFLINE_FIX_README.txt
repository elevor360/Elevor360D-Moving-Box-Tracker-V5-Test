Elevor360D Moving Box Tracker — Payhip Test Offline Fix

Upload all files in this folder to the ROOT of your existing Elevor360D-Moving-Box-Tracker-Payhip-Test GitHub repository. Replace the old files. Do not upload the parent folder.

Fix: registers sw.js from install.js immediately on page load, before Payhip activation. Previously service worker registration was delayed until app.js was loaded after activation. Also improves offline navigation fallback and refreshes cache version.

After GitHub Pages updates: connect to internet, open the test app, wait ~30 seconds, close it, disconnect internet and reopen the installed app. The licence screen should now display offline. First activation still requires internet. Full offline tracker operation after activation remains unverified until a valid Payhip licence is tested.

Do not overwrite your working V5.1 repository. This is a test release.
