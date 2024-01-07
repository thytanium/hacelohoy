import { useTranslation } from "react-i18next";

interface TodoDatePickerProps {
  date: Date;
}

export default function TodoDatePicker({ date }: TodoDatePickerProps) {
  const { i18n } = useTranslation();
  return (
    <div className="text-2xl">
      {new Intl.DateTimeFormat(i18n.language, {
        dateStyle: "medium",
      }).format(date)}
    </div>
  );
}
