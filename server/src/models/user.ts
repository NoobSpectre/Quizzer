import {
  genderEnum,
  MAX_AGE,
  MIN_AGE,
  UserSchema,
  verifyDob,
} from "@/lib/schemas/user";
import { compare, genSalt, hash } from "bcryptjs";
import { CallbackError, Model, model, Schema } from "mongoose";
import { string } from "zod";

type UserModelSchema = UserSchema &
  Document & {
    isModified: (path?: string) => boolean;
  };

type UserModelMethods = {
  isValidPassword: (pwd: string) => Promise<boolean>;
};

type UserModel = Model<UserModelSchema, {}, UserModelMethods>;

const userModelSchema: Schema = new Schema<
  UserSchema,
  UserModel,
  UserModelMethods
>(
  {
    username: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 16,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 16,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
      min: MIN_AGE,
      max: MAX_AGE,
    },
    gender: { type: String, enum: genderEnum },
    address: {
      street: { type: string, trim: true },
      state: { type: String, trim: true, required: true },
      country: { type: String, trim: true, required: true },
      _id: false,
    },
    imageUrl: { type: String, default: "" },
    dob: {
      type: String,
      length: 10,
      validate: {
        validator: v => verifyDob(v, MIN_AGE) && verifyDob(v, MAX_AGE),
        message: ({ value }) => `${value} is not a valid Date of Birth.`,
      },
    },
  },
  { timestamps: true }
);

userModelSchema.pre<UserModelSchema>("save", async function (next) {
  // `this` is the current document being saved
  if (!this.isModified("password")) {
    return next(); // Skip hashing if password is not modified
  }

  try {
    const salt = await genSalt(); // Generate salt
    const hashedPassword = await hash(this.password, salt);

    this.password = hashedPassword; // Replace the password with the hashed one
    next(); // Proceed to save the document
  } catch (error) {
    next(error as CallbackError); // Pass the error to the next middleware (error handler)
  }
});

userModelSchema.method<UserModelSchema>(
  "isValidPassword",
  async function (pwd: string) {
    try {
      return await compare(pwd, this.password);
    } catch (error) {
      throw new Error("Unable to validate password.");
    }
  }
);

const User = model<UserModelSchema, UserModel>("User", userModelSchema);

const user = new User({
  username: "Soham",
  password: "Soham@15",
  age: 22,
  // address: {
  //   state: "Tripura",
  //   country: "India",
  // },
});

export default User;
