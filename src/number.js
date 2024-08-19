export const formatCents = (cents) => {
  if (cents === 0) return "$ 0";
  const digits = cents.toString().split("");
  if (digits.length === 1) {
    return "$0.0" + digits[0];
  }
  if (digits.length === 2) {
    return "$0." + digits[0] + digits[1];
  }

  digits.splice(digits.length - 2, 0, ".");
  return "$" + digits.join("");
};
