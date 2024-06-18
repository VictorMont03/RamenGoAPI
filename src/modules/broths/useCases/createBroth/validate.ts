import { Joi, Segments } from "celebrate";
import { customMessage } from "../../../../utils/errors";

const createBrothValidator = {
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required().messages(customMessage('name')),
		imageInactive: Joi.string().required().messages(customMessage('imageInactive')),
		imageActive: Joi.string().required().messages(customMessage('imageActive')),
		description: Joi.string().required().messages(customMessage('description')),
		price: Joi.number().required().messages(customMessage('price'))
	})
}

export { createBrothValidator }