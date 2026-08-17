# DBSM Page

buld a replica of the given webite 'https://dbsm.dbtech.in/' The new webpage should be dynamic landing page. when the user enters into the page, they shoul feel like they enterd into a peaceful atmosphere. Use dynamic videos and photos in background also add various bing wallpaper like images also inside.  Typography SettingsUse professional sans-serif base fonts like Inter, Roboto, or system defaults for readability.Reserve expressive script or display fonts (e.g., Dancing Script) strictly for large headers or accent titles.Define fallback stacks: font-family: 'Inter', sans-serif;.Set responsive scaling using clamp() for fluid text sizing across viewports.Image and Media SettingsServe images in next-gen formats like WebP or AVIF.Enable lazy loading (loading="lazy") for images below the fold.Use responsive image tags (srcset and sizes) to serve appropriately sized files.Compress media assets to reduce page weight before client transmission.Transmission and Performance SettingsEnable HTTP/2 or HTTP/3 protocol on your hosting server for faster multiplexed asset delivery.Turn on server-side compression (Brotli or Gzip) for HTML, CSS, and JavaScript files.Implement a Content Delivery Network (CDN) to cache and transmit assets from edge locations nearest to users.Set long-term cache control headers for static images and font files.Animation and Motion SettingsOptimize motion or "dancing" UI elements using CSS transitions or requestAnimationFrame.Use will-change: transform, opacity; sparingly in CSS settings to hint browsers to optimize animations via the GPU.Respect user preferences by wrapping motion elements in @media (prefers-reduced-motion: reduce) to disable heavy animations for accessibility.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/afdd0c90-c16f-41ba-ae1f-aa62f6cbc3c3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
