import { Joi, Segments } from "celebrate";
import { customMessage } from "../../../../utils/errors";

const createOrderValidator = {
	[Segments.BODY]: Joi.object().keys({
		brothId: Joi.string().required().messages(customMessage('both brothId and proteinId')),
		proteinId: Joi.string().required().messages(customMessage('both brothId and proteinId')),
	})
}

export { createOrderValidator }