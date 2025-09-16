import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto"
import PrismaClient from "@repo/db/client";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
async function sendEmail(to: string, subject: string, text: string, html: string) {
    return transporter.sendMail({ from: '"Fantasize AI" <no-reply@fantasize.ai>', to, subject, text, html });
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.text();
        const signature = req.headers.get("x-razorpay-signature");
        const expectedSignature = crypto.createHmac("sha256", process.env.razorpayWebhookSecret!).update(body).digest("hex");

        if (expectedSignature !== signature) {
            return NextResponse.json({
                error: "Invalid Signature"
            }, {
                status: 400
            })
        }

        const event = JSON.parse(body)

        console.log(body)
        if (event.event === "payment.captured") {
            const payment = event.payload.payment.entity;
            const order = await PrismaClient.orders.update({
                where: {
                    razorpayOrderId: payment.order_id
                }, data: {
                    status: "Completed"
                }
            });            

            const userTokenAccount = await PrismaClient.fAITokenAccount.upsert({
                where: {
                    userId: order.userId
                },
                update: {
                    FAI: {
                        increment: order.tokenIncrement
                    }
                },
                create: {
                    userId: order.userId,
                    FAI: order.tokenIncrement
                }
            })
            await sendEmail(order.email,"Order Confirmation - Fantasize AI",
                `Hello ${order.username},

                Your order has been successfully completed.

                Order ID: ${order.razorpayOrderId}
                Product: ${order.productName}
                Amount: ${order.amount/100} INR
                Date: ${new Date().toLocaleDateString()}
                Total Balance: ${userTokenAccount.FAI} FAIs

                Thank you for choosing Fantasize AI.
                We hope to serve you again soon!

                Best regards,  
                Team Fantasize AI
                `,
                `
                    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
                    <h2 style="color: #4F46E5;">Hello ${order.username} 👋</h2>
                    <p>We’re excited to let you know that your order has been <b style="color: green;">successfully completed</b>.</p>
                    
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <p><b>Order ID:</b> ${order.razorpayOrderId}</p>
                        <p><b>Product:</b> ${order.productName}</p>
                        <p><b>Amount:</b> ${order.amount/100} INR</p>
                        <p><b>Date:</b> ${new Date().toLocaleDateString()}</p>
                        <p><b>Total Balance:</b> ${userTokenAccount.FAI}FAIs</p>
                    </div>

                    <p>Thank you for choosing <span style="color: #4F46E5; font-weight: bold;">Fantasize AI</span>.  
                    We truly appreciate your trust in us and look forward to serving you again 🚀.</p>

                    <p style="margin-top: 30px;">Warm regards,<br/> 
                    <b>Team Fantasize AI</b></p>
                    </div>
                `
            );
        }

        if (event.event === "payment.failed") {
            const payment = event.payload.payment.entity;

            // Update order status in DB
            const order = await PrismaClient.orders.update({
                where: { razorpayOrderId: payment.order_id },
                data: { status: "Failed" },
            });
            // Send failure notification email
            await sendEmail(order.email,"Payment Failed - Fantasize AI",
            `Hello ${order.username},

            We regret to inform you that your recent payment attempt was not successful.

            Order ID: ${order.razorpayOrderId}
            Product: ${order.productName}
            Amount: ${order.amount/100} INR
            Date: ${new Date().toLocaleDateString()}

            Please try again or contact support if you need assistance.

            Thank you for choosing Fantasize AI.

            Best regards,
            Team Fantasize AI
            `,
             `
            <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
                <h2 style="color: #E11D48;">Hello ${order.username} 👋</h2>
                <p>We regret to inform you that your recent payment attempt was <b style="color: red;">unsuccessful</b>.</p>

                <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <p><b>Order ID:</b> ${order.razorpayOrderId}</p>
                    <p><b>Product:</b> ${order.productName}</p>
                    <p><b>Amount:</b> ${order.amount/100} INR</p>
                    <p><b>Date:</b> ${new Date().toLocaleDateString()}</p>
                    <p><b>Status:</b> Failed</p>
                </div>

                <p>Please try placing the order again, or contact our support team if you need assistance.</p>

                <p style="margin-top: 30px;">Warm regards,<br/> 
                <b>Team Fantasize AI</b></p>
            </div>
            `,
            );
        }


    } catch (err) {
        console.error(err)
        return NextResponse.json({
            error: "Something went wrong"
        }, {status: 500})
    }
}