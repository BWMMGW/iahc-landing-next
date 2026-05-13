### Welcome to iahc Landing it's one of my first projects on github I hope you love it

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/BWMMGW/iahc-network)

### Installation

Install the dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpx wrangler dev
```

Your application will be available at `http://localhost:8787`.

### Building for Production

Create a production build:

```
pnpx wrangler build
pnpx wrangler start
```

### Deploying

If you don't have a Cloudflare account, [create one here](https://dash.cloudflare.com/sign-up)! Go to your [Workers dashboard](https://dash.cloudflare.com/?to=%2F%3Aaccount%2Fworkers-and-pages) to see your [free custom Cloudflare Workers subdomain](https://developers.cloudflare.com/workers/configuration/routing/workers-dev/) on `*.workers.dev`.

Once that's done, you can build your app:

```sh
pnpx wrangler build
```

And deploy it:

```sh
pnpx wrangler deploy
```

