import { NextApiRequest, NextApiResponse } from "next";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  //   res.status(400).json({ message: "Failed" });
  res.status(200).json([
    {
      id: 1,
      name: "Tejas Solanki",
      email: "tejas@gmail.com",
      phone: "9106478998",
      address: "343, Cipher2 city, Ahmedabad, 380001",
    },
    {
      id: 2,
      name: "Aditya",
      email: "aditya@gmail.com",
      phone: "9106478992",
      address: "123, Avalon city, Ahmedabad, 380001",
    },
    {
      id: 3,
      name: "Dhruv Samani",
      email: "dhruv@gmail.com",
      phone: "9106478993",
      address: "454, Startrek Apartments, Ahmedabad, 380001",
    },
  ]);
}
