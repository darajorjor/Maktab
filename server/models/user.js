import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: 'String', required: true},
    firstName: {type: 'String'},
    lastName: {type: 'String'},
    email: {type: 'String', required: true},
    mobilePhone: {type: 'String'},
    homephone: {type: 'String'},
    classes: {type: 'Array'},
    password: {type: 'String', required: true},
    dateAdded: {type: 'Date', default: Date.now, required: true},
});

export default mongoose.model('User', userSchema);
