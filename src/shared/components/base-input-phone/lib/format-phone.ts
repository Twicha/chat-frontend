import { CountryCode, NumberFormat, parsePhoneNumber } from "libphonenumber-js";

export const formatPhone = (
  phoneNumber?: string,
  format: NumberFormat = "INTERNATIONAL",
  cc?: CountryCode
): string | undefined => {
  if (phoneNumber === undefined) {
    return;
  }

  try {
    const phone = parsePhoneNumber(phoneNumber, cc);

    return phone.format(format);
  } catch (e) {
    return phoneNumber;
  }
};
