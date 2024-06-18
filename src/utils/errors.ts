const customMessage = (field: string) => {
	return {
		'string.empty': `${field} is required`,
		'any.required': `${field} is required`
	}
}

export { customMessage }