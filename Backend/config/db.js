import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://delivo:97262858@cluster0.myqj0ub.mongodb.net/delivo"
    )
    .then(() => console.log("DB Connected."));
};
