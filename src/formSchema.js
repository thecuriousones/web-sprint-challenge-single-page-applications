import * as yup from 'yup'

export const schema = yup.object().shape({
    name: yup 
      .string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is Required"),
    phone: yup
      .string()
      .required("Must Be a Valid Address"),
    instructions: yup
      .string(),
    sauce: yup
        .string()
        .oneOf(['marinara sauce', 'alfredo sauce', 'roasted garlic sauce', 'bbq sauce'])
        .required('Must Choose a Sauce'),
    size: yup
        .string()
        .oneOf(['Personal', 'Medium', 'Large', 'Extra Large'])
        .required(),
    pepperoni: yup.boolean(),
    chicken: yup.boolean(),
    ham: yup.boolean(), 
    banana_pepper: yup.boolean(),
    onions: yup.boolean(),
    green_pepper: yup.boolean(),
    diced_tomatoes: yup.boolean(),
    spinach: yup.boolean(),
    pineapple: yup.boolean(),
    black_olives: yup.boolean(), 
})