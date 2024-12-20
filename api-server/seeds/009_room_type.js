exports.seed = async function (knex) {
  await knex("RoomType").del();
  await knex("RoomType").insert([
    {
      RoomTypeID: 1,
      TypeName: "Single Room",
      BasePrice: 100.0,
      MaxOccupancy: 1,
      Area: 20.0
    },
    {
      RoomTypeID: 2,
      TypeName: "Double Room",
      BasePrice: 150.0,
      MaxOccupancy: 2,
      Area: 25.0
    },
    {
      RoomTypeID: 3,
      TypeName: "Twin Room",
      BasePrice: 120.0,
      MaxOccupancy: 2,
      Area: 22.0
    },
    {
      RoomTypeID: 4,
      TypeName: "King Room",
      BasePrice: 200.0,
      MaxOccupancy: 2,
      Area: 30.0
    },
    {
      RoomTypeID: 5,
      TypeName: "Family Room",
      BasePrice: 250.0,
      MaxOccupancy: 4,
      Area: 35.0
    },
    {
      RoomTypeID: 6,
      TypeName: "Deluxe Room",
      BasePrice: 300.0,
      MaxOccupancy: 3,
      Area: 40.0
    }
  ]);
};
