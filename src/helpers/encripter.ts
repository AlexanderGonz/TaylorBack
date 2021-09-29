import crypto from 'crypto'

const encripter = (string: string) => {
  let encryptedString = crypto
    .createHash("md5")
    .update(string)
    .digest('hex')

  return encryptedString
}

export default encripter