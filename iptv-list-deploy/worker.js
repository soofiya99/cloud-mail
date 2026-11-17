export default {
  async fetch(request) {
    const upstream = "https://iptv-org.github.io/iptv/index.m3u";
    const resp = await fetch(upstream, { cf: { cacheTtl: 3600, cacheEverything: true } });
    const body = await resp.text();
    return new Response(body, {
      status: resp.status,
      headers: {
        "Content-Type": "audio/x-mpegurl; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
