/* Handles Callback */
exports.reset_callback_post = (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
};
