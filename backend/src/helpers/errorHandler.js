export const errorHandler = (err, req, res, next) => {
  const status = err.status ?? 500;
  const message = err.message ?? "Unknown Server Error";
  return res.status(status).json({ error: message });
};
