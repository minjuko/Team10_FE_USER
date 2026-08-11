export const isDemoMode = import.meta.env.VITE_DEMO_MODE === "true";

export const startDemoWorker = async (loadWorker) => {
  const { worker } = await loadWorker();
  await worker.start({
    onUnhandledRequest(request, print) {
      if (new URL(request.url).pathname.startsWith("/api/")) return;
      print.warning();
    },
  });
};
