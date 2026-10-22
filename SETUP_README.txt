Elevor360D Moving Box Tracker V5 - LICENCE TEST

1. Upload these files to a NEW GitHub Pages repository for testing. Do not overwrite the current V4 site yet.
2. Cloudflare Worker ALLOWED_ORIGINS must include https://elevor360.github.io (already configured in earlier steps).
3. Use a fresh licence issued with appId moving-box-tracker. Open the V5 site online and activate.
4. The existing V4 tracker features are retained. Existing local data is browser origin scoped: a different GitHub repository URL uses different local storage. Use V4 Export JSON backup and V5 Restore JSON backup to transfer.
5. Device identity is a browser-local identifier, not a hardware ID. Clearing storage changes it. Offline opening after initial activation is allowed; revocation cannot be enforced while offline.
6. This is a functional integration TEST, not a secure commercial release. Public GitHub Pages files are downloadable and the client-side gate can be bypassed. The existing Worker KV two-device check is not atomic; simultaneous requests may exceed the limit. Payhip is NOT automatically connected.
7. Do not publish licence keys, admin tokens or customer details in the repository.
