import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import path from "path";
import { Request , Response } from "express";

const __dirname = path.resolve();

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use('/',router);
app.listen(5000,() => console.log('listening on port'));

app.use(express.static(path.join(__dirname,"/build")))

app.get("*", (req :Request, res : Response) => {
    res.sendFile(path.join(__dirname,"build","index.html"));
})


const contactEmail = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "dinhthai1905@gmail.com",
        pass: "thjs doud bwqb johq",
    }
})

contactEmail.verify((error : Error | null) => {
    if(error){
        console.log(error);
    } else {
        console.log("Ready to send")
    }
})
 
router.post("/contact", async (req :Request, res : Response) => {
    const name = req.body.firstName + " " + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail  = {
        from: name,
        to: 'dinhthai1905@gmail.com',
        subject: 'Contact Form Submission - Portfolio',  
        html: ` <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p> `
    }
    contactEmail.sendMail(mail, (error : Error| null) => {
        if (error) {
            console.log(error);
        }else{
            res.json({code:200, status: 'Success'});
        }
    })
})

