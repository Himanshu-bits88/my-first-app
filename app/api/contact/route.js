import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    await connectDB();
    await Contact.create({ name, email, message });
    return Response.json({ success: true });
  } catch (e) {
    return Response.json(
      { success: false, error: "Unable to send your message. Please try again later." },
      { status: e.code === "MONGODB_NOT_CONFIGURED" ? 503 : 500 }
    );
  }
}
