import * as Mongoose from 'mongoose';


export const CategorySchema = new Mongoose.Schema({
  name: { type: String, required: true },
});

export interface Category extends Mongoose.Document {
  name: string;
}
