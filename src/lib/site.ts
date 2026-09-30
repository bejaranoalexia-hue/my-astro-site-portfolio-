export const base = import.meta.env.BASE_URL;

export function url(path = "") {
    const trimmed = path.replace(/^\/+/, "");
    return trimmed ? `${base}${trimmed}` : base;
}
