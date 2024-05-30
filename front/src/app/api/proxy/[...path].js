import { createProxyMiddleware } from 'http-proxy-middleware';

// export default createProxyMiddleware('/ws', {
//   target: `ws://${process.env.OnlyiP}`,
//   ws: true, // Enable WebSocket proxy
//   changeOrigin: true,
// });


import { createProxyMiddleware } from 'http-proxy-middleware';

const proxy = createProxyMiddleware('/api/proxy/**', {
   target: process.env.OnlyiP,
   ws: true, // enable proxying WebSockets
   pathRewrite: { "^/api/proxy": "" }, // remove `/api/proxy` prefix
});

export default async function handler(req, res) {
    proxy(req, res, (err) => {
        if (err) {
            throw err;
        }

        throw new Error(`Local proxy received bad request for ${req.url}`);
    });
}

export const config = {
    api: {
        // Proxy middleware will handle requests itself, so Next.js should 
        // ignore that our handler doesn't directly return a response
        externalResolver: true,
        // Pass request bodies through unmodified so that the origin API server
        // receives them in the intended format
        bodyParser: false,
    },
}
