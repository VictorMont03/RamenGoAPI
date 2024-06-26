import 'reflect-metadata';

import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import cors from 'cors';

import "../../container";
import { CelebrateError } from 'celebrate';

const app = express();
const port = 5000;

app.use(cors());

app.use((req: Request, res: Response, next: NextFunction) => {
	if (req.is('text/plain')) {
		let data = '';
		req.on('data', chunk => {
			data += chunk;
		});
		req.on('end', () => {
			try {
				req.body = JSON.parse(data);
				next();
			} catch (error) {
				next(error);
			}
		});
	} else {
		next();
	}
});

app.use(express.json());
app.use(router);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof CelebrateError) {
		const errorBody = err.details.get('body');

		return res.status(400).json({
			error: errorBody?.message
		})
	}

	return res.status(500).json({
		error: `could not place order`,
		message: err?.message
	})
})

app.listen(port, () => {
	console.log(`I am running on port: ${port}`);
})