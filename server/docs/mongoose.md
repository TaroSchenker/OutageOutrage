
# Mongoose Cheat Sheet

## Connection

To connect to a MongoDB database:

javascriptCopy code

`mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true, useUnifiedTopology: true });` 

## Defining a Model

Models are defined through the `mongoose.model` function:

javascriptCopy code

`const Schema = mongoose.Schema;
const MyModelSchema = new Schema({
  name: String,
  age: Number,
  active: Boolean
});

const MyModel = mongoose.model('MyModel', MyModelSchema);` 

## Creating Documents

To create a new document, you can instantiate a new object from the model:

javascriptCopy code

`const instance = new MyModel({ name: 'John', age: 30, active: true });
instance.save((err, doc) => {
  if (err) console.log(err);
  console.log(doc);
});` 

## Querying Documents

To find documents:

javascriptCopy code

`// Find all
MyModel.find({}, (err, docs) => {});

// Find by conditions
MyModel.find({ name: 'John', active: true }, (err, docs) => {});

// Find one
MyModel.findOne({ name: 'John' }, (err, doc) => {});

// Find by id
MyModel.findById('5f8d04f5c55c233ddc2a7e9d', (err, doc) => {});` 

## Updating Documents

To update documents:

javascriptCopy code

`// Update one document
MyModel.updateOne({ name: 'John' }, { name: 'Johnny' }, (err, res) => {});

// Update many documents
MyModel.updateMany({ name: 'John' }, { name: 'Johnny' }, (err, res) => {});

// Find one and update
MyModel.findOneAndUpdate({ name: 'John' }, { name: 'Johnny' }, { new: true }, (err, doc) => {});` 

## Deleting Documents

To delete documents:

javascriptCopy code

`// Delete one document
MyModel.deleteOne({ name: 'John' }, (err) => {});

// Delete many documents
MyModel.deleteMany({ name: 'John' }, (err) => {});

// Find one and delete
MyModel.findOneAndDelete({ name: 'John' }, (err, doc) => {});` 

## Middleware

Mongoose allows you to define middleware functions:

javascriptCopy code

`MyModelSchema.pre('save', function(next) {
  // actions to do before saving
  next();
});

MyModelSchema.post('save', function(doc) {
  // actions to do after saving
});` 

## Indexing

You can define indexes in your schema for improving query performance:

javascriptCopy code

`MyModelSchema.index({ name: 1 });` 

## Validation

You can define validation rules in your schema:

javascriptCopy code

`const MyModelSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 18, max: 120 },
  email: { type: String, match: /.+\@.+\..+/ }
});` 

Please note that the callback functions in the examples above can be replaced with `async/await` or Promises, as they return a Promise if no callback is provided.

Also note that Mongoose provides many more functionalities than these, including handling relationships, virtuals, plugins, discriminators, and more. Be sure to check the [official documentation](https://mongoosejs.com/docs/guide.html) for complete information.
