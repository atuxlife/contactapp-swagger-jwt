import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    idnumber: {
        type: Number,
        required: true
    },
    typedoc: {
        type: String,
        enum : ['CC','CE','PS'],
        default: 'CC'
    },
    address: {
        type: String,
        require: false
    },
    phone: {
        type: String,
        require: false
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum : ['admin','user'],
        default: 'user'
    }
},{ 
    timestamps: true,
    versionKey: false
});

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
};

userSchema.plugin(mongoosePaginate);

export default model('User', userSchema);