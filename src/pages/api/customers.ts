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
  const { page = "1", take = "10" } = req.query;
  const pageNumber = parseInt(page as string, 10);
  const takeNumber = parseInt(take as string, 10);

  const startIndex = (pageNumber - 1) * takeNumber;
  const endIndex = startIndex + takeNumber;

  const data = Array.from({ length: 150 }, (_, i) => ({
    id: i + 1,
    name: `Customer ${i + 1}`,
    email: `customer${i + 1}@gmail.com`,
    phone: 9106478000 + i,
    address: `${100 + i}, Random Street, Ahmedabad, 380001`,
  }));

  const paginatedData = data.slice(startIndex, endIndex);

  res.status(200).json({
    data: paginatedData,
    pagination: {
      total: data.length,
      page: pageNumber,
      take: takeNumber,
      totalPages: Math.ceil(data.length / takeNumber),
    },
  });
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<any>
// ) {
//   //   res.status(400).json({ message: "Failed" });
//   res.status(200).json([
//     {
//       id: 1,
//       name: "Tejas Solanki",
//       email: "tejas@gmail.com",
//       phone: 9106478998,
//       address: "343, Cipher2 city, Ahmedabad, 380001",
//     },
//     {
//       id: 2,
//       name: "Aditya",
//       email: "aditya@gmail.com",
//       phone: 9106478992,
//       address: "123, Avalon city, Ahmedabad, 380001",
//     },
//     {
//       id: 3,
//       name: "Dhruv Samani",
//       email: "dhruv@gmail.com",
//       phone: 9106478993,
//       address: "454, Startrek Apartments, Ahmedabad, 380001",
//     },
//   ]);
// }
