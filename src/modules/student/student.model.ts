// import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import {
  StudentModel,
  TAddress,
  TContact,
  TStudent,
} from './student.interface';

const addressSchema = new Schema<TAddress>({
  street: { type: String, required: [true, 'Street is required'], trim: true },
  city: { type: String, required: [true, 'City is required'], trim: true },
  state: { type: String, required: [true, 'State is required'], trim: true },
  zipCode: {
    type: String,
    required: [true, 'Zip code is required'],
    trim: true,
  },
});

const contactSchema = new Schema<TContact>({
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      unique: true,
      required: [true, 'ID is required'],
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User Id is required'],
      unique: true,
      ref: 'User',
    },
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      maxlength: [15, 'First name must be less than 15 characters'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      maxlength: [15, 'Last name must be less than 15 characters'],
    },
    dateOfBirth: {
      type: String,
      required: [true, 'Date of birth is required'],
      trim: true,
    },
    address: {
      type: addressSchema,
      required: [true, 'Address is required'],
    },
    contact: {
      type: contactSchema,
      required: [true, 'Contact information is required'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female'],
        message: '{VALUE} is not a valid gender',
      },
      required: [true, 'Gender is required'],
      trim: true,
    },
    emergencyContact: {
      type: contactSchema,
      required: [true, 'Emergency contact is required'],
    },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
    },
    profilePic: { type: String, trim: true },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not a valid blood group',
      },
      required: [true, 'Blood group is required'],
      trim: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// *using query middleware

studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });

  next();
});

studentSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// creating static

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

//=============== creating custom instance method ==========//

// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
