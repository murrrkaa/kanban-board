export const requestHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res))
      .then((data) => res.status(data.status ?? 200).json(data.data ?? {}))
      .catch(next);
  };
};
