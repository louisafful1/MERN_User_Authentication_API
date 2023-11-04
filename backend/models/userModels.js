import bcrypt from "bcryptjs";
import mongoose from "mongoose";



const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    } 

}, {timestamps: true });

// hashing the password before saving
userSchema.pre('save', async function (next) { //we dont use arrow because we are using the `this` keyword
    if (!this.isModified('password') ){
     next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); //passing the salt to the pwd
});

// comparing the passwords for user login
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;