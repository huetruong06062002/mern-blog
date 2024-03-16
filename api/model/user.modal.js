import mongoose from 'mongoose';

const useSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  profilePicture: {
    type: String,
    default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fman-avatar-profile-picture-vector-illustration_268834-538.jpg&tbnid=DPknMIWk0qJ9zM&vet=12ahUKEwi7v53U-feEAxVEWvUHHZS7AW4QMygzegUIARDIAQ..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Funknown-profile&docid=pOEu2g4RyXBMWM&w=626&h=626&q=profile%20image&ved=2ahUKEwi7v53U-feEAxVEWvUHHZS7AW4QMygzegUIARDIAQ",
  },
},
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', useSchema);

export default User;