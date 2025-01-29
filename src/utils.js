export const isValidTask = (value) => {
  return (
    value.trim() !== "" && value.trim().length >= 1 && value.trim().length <= 30
  );
};
