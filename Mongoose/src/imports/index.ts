import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose, { Schema, model, Model, HydratedDocument } from 'mongoose';
import cors from 'cors';
const app: Application = express();




export { cors, express, mongoose, Application, Request, Response, NextFunction, Schema, model, app, Model, HydratedDocument };