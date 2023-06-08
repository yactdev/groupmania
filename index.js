const bodyParser = require('body-parser');

const express = require('express');
const cors = require('cors');

const userRouter = require('./backend/routes/users');
const postRouter = require('./backend/routes/posts');
const commentsRouter = require('./backend/routes/comments');
//Database Connection
const db = require('.//backend/config');
const morgan = require('morgan');
const helmet = require('helmet');

db.authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch((err) => {
    console.log('Error: ' + err);
  });

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors('*'));

const PORT = process.env.PORT || 5001;
db.sync()
  .then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log('Error: ' + err));
//app.use(helmet());
//app.use(morgan('tiny'));
app.use('/api/users', userRouter);
app.use('/api/post', postRouter);
app.use('/api/comment', commentsRouter);
module.exports = app;
