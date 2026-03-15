function encode(data: Record<string, string>): string {
  return Object.keys(data)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]!),
    )
    .join("&")
}

export async function submitForm(form: HTMLFormElement): Promise<Response> {
  const formData = new FormData(form)
  const data: Record<string, string> = {}
  for (const [key, value] of formData.entries()) {
    data[key] = value.toString()
  }

  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...data }),
  })
}
