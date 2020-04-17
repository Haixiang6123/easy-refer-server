import jwt from 'jsonwebtoken'
import {parseEnv} from '@/utils/config'

parseEnv()

export const generateJWT = (userId: string) => {
  const {JWT_SECRET} = process.env

  if (!JWT_SECRET) throw new Error('环境变量 JWT_SECRET 不存在')

  return 'Bearer ' + jwt.sign({
    userId
  }, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '1m'
  })
}
