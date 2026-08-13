export function auth(input) {
  if (!input) throw new Error("auth: input required");
  return { ...input, checked: true };
}
