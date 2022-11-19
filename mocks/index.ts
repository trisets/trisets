declare global {
  interface Window {
    __vitest_worker__?: object;
  }
}

async function initMocks(): Promise<void> {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen();
    // eslint-disable-next-line no-underscore-dangle
  } else if (window?.__vitest_worker__) {
    await import('./server');
  } else {
    const { worker } = await import('./browser');
    worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
}

initMocks();

export {};
