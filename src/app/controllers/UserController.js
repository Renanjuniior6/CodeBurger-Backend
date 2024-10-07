import { v4 } from 'uuid'

import User from '../models/User'

import * as Yup from 'yup'

class UserController {
  async store (request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      admin: Yup.boolean()
    })

    /* if( !(await schema.isValid(request.body))) {

            return response.status(400).json({ error: 'Make sure your data is correct' })
        }
 */
    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { name, email, password, admin } = request.body

    const UserExists = await User.findOne({
      where: { email }
    })

    if (UserExists) {
      return response.status(409).json({ error: 'User already exists' })
    }

    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
      admin
    })

    return response.status(201).json({ id: user.id, name, admin })
  }
}

export default new UserController()
