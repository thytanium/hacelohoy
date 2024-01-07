export function serializeDate(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function unserializeDate(serialized: string) {
  const parts = serialized.split("-");
  if (parts.length < 3) throw new Error("missing parts on the date");
  return new Date(+parts[0], +parts[1] - 1, +parts[2]);
}
