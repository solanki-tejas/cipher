import { NextApiRequest, NextApiResponse } from "next";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  res.status(200).json([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);
}
