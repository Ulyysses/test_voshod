"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";

export function ProvidersTanstack(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient()
  );

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
