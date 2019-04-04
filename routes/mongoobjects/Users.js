
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
        first_name: String,
        last_name: String,
        email: { type: String, unique: true, required: true },
        company: String,
        role: String
    });

var User = mongoose.model('User', userSchema);
module.exports = User;

/*// on every save, add the date
userSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});*/

/*userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};*/

/*userSchema.methods.validPassword = function(password) {
    var bool= bcrypt.compareSync(password, this.password);
    return bool;
};*/
