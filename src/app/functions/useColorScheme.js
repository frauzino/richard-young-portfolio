import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function useColorScheme() {
  const isClient = typeof window !== "undefined";

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );

  const initialColorScheme = isClient ? localStorage.getItem("color-scheme") : null;
  const defaultIsDarkMode = initialColorScheme !== null ? initialColorScheme === "dark" : systemPrefersDark;

  const [isDarkMode, setIsDarkMode] = useState(defaultIsDarkMode);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("color-scheme", isDarkMode ? "dark" : "light");
    }
  }, [isDarkMode]);

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
