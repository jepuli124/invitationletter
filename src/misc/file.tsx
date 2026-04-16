
const PASSWORD_HASH = "844347e54f00c4b97fe4736909730faaf8365292b076ea5a1378ebd1b0fd3bbb"

const toHex = (bytes: Uint8Array): string =>
  Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")

const hashText = async (value: string): Promise<string> => {
  const encoded = new TextEncoder().encode(value)
  const digest = await crypto.subtle.digest("SHA-256", encoded)
  return toHex(new Uint8Array(digest))
}

export const verifyPassword = async (value: string): Promise<boolean> => {
  const digest = await hashText(value)
  return digest === PASSWORD_HASH
}

export default verifyPassword