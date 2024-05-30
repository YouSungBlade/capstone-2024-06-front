import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware('/ws', {
  target: `ws://${process.env.OnlyiP}`,
  ws: true, // Enable WebSocket proxy
  changeOrigin: true,
});