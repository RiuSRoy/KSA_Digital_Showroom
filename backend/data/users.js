import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'ksaworld1968.amazon@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Admin User',
    email: 'john@snow.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Admin User',
    email: 'arya@stark.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
