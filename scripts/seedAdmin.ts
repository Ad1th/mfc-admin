// scripts/seedAdmin.ts

//this is only a one-time code to add users

import "dotenv/config";
import { connectToDB } from "../lib/db";
import Admin from "../models/Admin";
import bcrypt from "bcrypt";

async function seedAdmin() {
  await connectToDB();

  const username = "admin1";
  const plainPassword = "pwd1";
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const existing = await Admin.findOne({ username });
  if (existing) {
    console.log("⚠️ Admin user already exists");
    return;
  }

  await Admin.create({ username, password: hashedPassword });
  console.log("✅ Admin user created");
}

seedAdmin();
