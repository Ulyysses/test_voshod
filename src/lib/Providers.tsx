import { ProvidersChakra } from "./ProvidersChakra";
import { ProvidersTanstack } from "./ProvidersTanstack";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProvidersChakra>
      <ProvidersTanstack>{children}</ProvidersTanstack>
    </ProvidersChakra>
  );
}
