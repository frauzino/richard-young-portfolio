import { useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import createPersistedState from '@plq/use-persisted-state'
import storage from '@plq/use-persisted-state/lib/storages/local-storage'

const [useColorSchemeState] = createPersistedState("colorScheme", storage);

export function useColorScheme() {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );

  const [isDarkMode, setIsDarkMode] = useColorSchemeState('isDarkMode', false);
  const value = useMemo(
    () => (isDarkMode === undefined ? !!systemPrefersDark : isDarkMode),
    [isDarkMode, systemPrefersDark]
  );

  useEffect(() => {
    if (value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [value]);

  return {
    isDarkMode: value,
    setIsDarkMode,
  };
}
