import { useTranslation } from "react-i18next";

export default function LngSwitch() {
  const { i18n } = useTranslation();

  return (
    <select
      className="fixed bottom-0 right-0 rounded bg-gray-100 px-2 py-1 dark:bg-black"
      onChange={(event) => i18n.changeLanguage(event.target.value)}
      value={i18n.language}
    >
      {[
        ["en", "🇬🇧 English"],
        ["es", "🇪🇸 Español"],
      ].map(([key, displayName]) => (
        <option key={key} value={key}>
          {displayName}
        </option>
      ))}
    </select>
  );
}
