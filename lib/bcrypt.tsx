import bcrypt from 'bcrypt'
export const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    return hashedPassword
  } catch (error) {
    console.error('Error hashing password:', error)
    throw error
  }
}

export const verifyPassword = async (password, hashedPassword) => {
  try {
    const result = await bcrypt.compare(password, hashedPassword)
    return result
  } catch (error) {
    console.error('Error verifying password:', error)
    throw error
  }
}
