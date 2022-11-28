declare module 'whatwg-fetch' {
  function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}
