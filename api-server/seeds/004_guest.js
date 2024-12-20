exports.seed = async function (knex) {
  await knex("Guest").del();
  await knex("Guest").insert([
    // Guests for Customer 1
    {
      GuestID: 1,
      CustomerID: 1,
      FirstName: "Hoa",
      MiddleName: "Thị",
      LastName: "Nguyễn",
      DateOfBirth: "1995-08-12",
      IDNumber: "ID005", // Same as Customer
      GuardianIDNumber: null
    },
    {
      GuestID: 2,
      CustomerID: 1,
      FirstName: "An",
      MiddleName: "Văn",
      LastName: "Nguyễn",
      DateOfBirth: "2015-09-01",
      IDNumber: "ID008",
      GuardianIDNumber: "ID005"
    },

    // Guests for Customer 2
    {
      GuestID: 3,
      CustomerID: 2,
      FirstName: "Hùng",
      MiddleName: "Văn",
      LastName: "Đặng",
      DateOfBirth: "1996-12-05",
      IDNumber: "ID006", // Same as Customer
      GuardianIDNumber: null
    },
    {
      GuestID: 4,
      CustomerID: 2,
      FirstName: "Huy",
      MiddleName: "Quang",
      LastName: "Đặng",
      DateOfBirth: "2012-03-22",
      IDNumber: "ID009",
      GuardianIDNumber: "ID006"
    },

    // Guests for Customer 3
    {
      GuestID: 5,
      CustomerID: 3,
      FirstName: "Hà",
      MiddleName: "Thanh",
      LastName: "Lý",
      DateOfBirth: "1997-07-18",
      IDNumber: "ID007", // Same as Customer
      GuardianIDNumber: null
    },
    {
      GuestID: 6,
      CustomerID: 3,
      FirstName: "Khang",
      MiddleName: "Quốc",
      LastName: "Lý",
      DateOfBirth: "2010-06-15",
      IDNumber: "ID010",
      GuardianIDNumber: "ID007"
    }
  ]);
};
