import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: `ws://${process.env.OnlyiP}`,
  ws: true, // Enable WebSocket proxy
  changeOrigin: true,
});