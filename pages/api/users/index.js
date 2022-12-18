import dbConnect from "../../../db/dbConnect";
import UsersSchema from "../../../models/Users";
dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const data = await UsersSchema.find({});
        res
          .status(200)
          .json({ Success: "Fetched userDetails ", userDetails: data });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: "Error Occured While Get Request" });
      }
      break;
    case "POST":
      try {
        const data = await UsersSchema.create(req.body);
        res
          .status(200)
          .json({ Success: "Successfully Posted ", userDetails: data });
      } catch (error) {
        res.status(400).json({ Error: "Something went Wrong" });
      }
      break;
    default:
      res.status(400).json({ Success: "Something went Wrong" });
      break;
  }
};
