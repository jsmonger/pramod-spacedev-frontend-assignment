export const createProductDTO = (formFields) => {
    const dto = new FormData()

    const { name, category, price, image } = formFields

    dto.append("name", name)
    dto.append("category", category)
    dto.append("price", Number(price))

    if (image) {
        dto.append("image_url", image)
    }

    return dto
}


const errorMap = {
    name: (value) => {
        if (!value?.trim()) {
            return "Name is required"
        }
        if (value.length < 2) {
            return "Name must be at least 2 characters"
        }
        return null
    },

    category: (value) => {
        if (!value?.trim()) {
            return "Category is required"
        }
        return null
    },

    price: (value) => {
        if (value === "" || value === null || value === undefined) {
            return "Price is required"
        }
        if (Number(value) <= 0) {
            return "Price must be greater than 0"
        }
        return null
    },
}

export const validateForm = (formFields) => {
    const errors = {}
    console.log({ formFields })
    Object.entries(formFields).forEach(([field, value]) => {
        const validator = errorMap[field]

        if (!validator) return

        const error = validator(value)
        if (error) {
            errors[field] = error
        }
    })

    return errors
}
