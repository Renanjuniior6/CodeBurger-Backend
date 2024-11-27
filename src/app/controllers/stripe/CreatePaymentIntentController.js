import Stripe from 'stripe'
import * as Yup from 'yup'

import 'dotenv/config'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const calculateOrderAmount = (items) => {
  const total = items.reduce((acc, current) => {
    return current.price * current.quantity + acc
  }, 0)
  return total * 100
}

class CreatePaymentIntentController {
  async store (request, response) {
    const schema = Yup.object().shape({
      products: Yup.array().required().of(
        Yup.object().shape({
          id: Yup.number().required(),
          quantity: Yup.number().required(),
          price: Yup.number().required()
        })
      )
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { products } = request.body

    const amount = calculateOrderAmount(products)

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'brl',
      automatic_payment_methods: {
        enabled: true
      }
    })

    response.json({
      clientSecret: paymentIntent.client_secret,
      // [DEV]: For demo purposes only, you should avoid exposing the PaymentIntent ID in the client-side code.
      dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`
    })
  }
}

export default new CreatePaymentIntentController()
