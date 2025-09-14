import { auth, currentUser } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"
import Razorpy from "razorpay"
import PrismaClient from "@repo/db/client"
import { razorpayBody } from "@repo/common/types"

var razorpay = new Razorpy({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RazorpaySecret!
})

const variants = [
  {
    id: 1,
    type: "normal",
    name: "Starter",
    icon: "🟢",
    amount: 100,
    discountPrice: null,
    discountLabel: "(No discount)",
    FAIs: 5,
    Pros: [
      "Cheapest entry point",
      "Good for trying features",
      "Low risk",
    ],
    Cons: [
      "No discount",
      "Not enough tokens for video",
      "Runs out very fast",
    ],
  },
  {
    id: 2,
    type: "normal",
    name: "Value",
    icon: "🔵",
    amount: 250,
    discountPrice: 300,
    discountLabel: "(17% off)",
    FAIs: 14,
    Pros: [
      "Better value",
      "Enough tokens for video + images",
      "Balanced for casual use",
    ],
    Cons: [
      "Not enough for model training",
      "Discount is moderate",
    ],
  },
  {
    id: 3,
    type: "value",
    name: "Pro",
    icon: "🟣",
    amount: 500,
    discountPrice: 650,
    discountLabel: "(23% off)",
    FAIs: 30,
    Pros: [
      "Can train 1 face model (20 FAI) + have tokens left",
      "Good discount",
      "Ideal for regular users",
    ],
    Cons: [
      "Medium upfront cost",
      "Ultimate plan gives better per-token value",
    ],
  },
  {
    id: 4,
    type: "normal",
    name: "Ultimate",
    icon: "🟡",
    amount: 1000,
    discountPrice: 1400,
    discountLabel: "(29% off)",
    FAIs: 62,
    Pros: [
      "Best value (lowest rate)",
      "Multiple models/videos/images",
      "Perfect for creators & pros",
    ],
    Cons: [
      "High upfront cost",
      "Overkill for casual users",
    ],
  },
];


export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    const user = await currentUser();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
    }

    const body = await req.json();
    const parsedBody = razorpayBody.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json({ error: "Incorrect Inputs" }, { status: 400 });
    }

    const { variantId } = parsedBody.data;

    const plan = variants.find((v) => v.id === variantId);
    if (!plan) {
      return NextResponse.json({ error: "Invalid Plan" }, { status: 400 });
    }

    const order = await razorpay.orders.create({
      amount: plan.amount * 100,
      currency: "INR",
      receipt: `receipt-${Date.now()}`,
      notes: {
        productId: plan.id.toString(),

      }
    });

    const res = await PrismaClient.orders.create({
      data: {
        userId,
        razorpayOrderId: order.id,
        amount: plan.amount * 100,
        productId: plan.id,
        productName: plan.name,
        status: "Pending",
        receipt: order.receipt,
        email:  user?.emailAddresses?.[0]?.emailAddress || "",
        username: user?.username || "",
        tokenIncrement: plan.FAIs
      }
    })
    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      falAiOrderId: res.id,
      receipt: order.receipt,
      email: res.email,
      username: res.username
    });

  } catch (err) {
    console.error("Payment route error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
