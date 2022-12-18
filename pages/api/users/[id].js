import dbConnect from "../../../db/dbConnect";
import UsersSchema from "../../../models/Users";
dbConnect();

export default async function (req, res) {
  const {
    query: { id },
    method,
  } = req;
  switch (method) {
    case "GET":
      try {
        const data = await UsersSchema.findById(id);
        if (!data) {
          res.status(400).json({
            message: "Error Occured",
            userDetails: data,
          });
        }
        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({
          success: false,
          error: "Error Occured While Fetching Data",
        });
      }
      break;
    case "PUT":
      try {
        const data = await UsersSchema.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!data) {
          res.status(400).json({
            message: "Error Occured",
            userDetails: data,
          });
        }
        res
          .status(200)
          .json({ Success: "Fetched Data Successfully ", userDetails: data });
      } catch (error) {
        res.status(400).json({
          success: false,
          error: "Error Occured While Fetching Data",
        });
      }
      break;

    case "DELETE":
      try {
        const data = await UsersSchema.deleteOne({ _id: id });
        if (!data) {
          res.status(400).json({
            message: "Error Occured",
            userDetails: data,
          });
        }
        res
          .status(200)
          .json({ Success: "Data Deleted Successfully ", userDetails: data });
      } catch (error) {
        res.status(400).json({
          success: false,
          error: "Error Occured While Fetching Data",
        });
      }
      break;
    default:
      res.status(400).json({ message: "Something Went Wrong" });
      break;
  }
}
