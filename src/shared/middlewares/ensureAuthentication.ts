import { NextFunction, Request, Response } from "express";

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
	const authHeader = request.headers['x-api-key'];

	if (!authHeader) {
		return response.status(403).json({
			error: 'x-api-key header missing'
		})
	}

	next();
}