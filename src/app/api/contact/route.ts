import {
  generateEmailContent,
  mailOptions,
  transporter,
} from "@/src/lib/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);
  if (
    !data ||
    !data.name ||
    !data.email ||
    !data.company_name ||
    !data.phone_number ||
    !data.message
  ) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }
  try {
    delete data?.attacment;

    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject: "Website New Contact Message",
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.log("------ error -> ", err);
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }
  return NextResponse.json({ message: "Bad Request" }, { status: 400 });
}
