import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import usersRouter from "./routes/users.js";
import ticketRouter from "./routes/ticket.js";
import paymentRouter from "./routes/payment.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(usersRouter);
app.use(ticketRouter);
app.use(paymentRouter);

app.listen(5000, ()=> console.log('Server up and running....'))



// app.use(bodyParser.json({ limit: '30mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
// app.use(cors());

// app.use("/user", userRouter);
// app.use("/space", spaceRouter);

// // const CONNECTION_URL = 'mongodb+srv://webrtc:uVxKOp9LM7hnMOy7@cluster0.eislk.mongodb.net/wrtc-staging?retryWrites=true&w=majority&ssl=true';
// const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false); 