import { differenceInWeeks, format, isThisYear, isToday } from "date-fns";

const locales: Record<string, string> = {
  ru: "ru",
  en: "en-US",
};

export const formatMessageTime = async (time: string, lang: string) => {
  const getLocale = async () => {
    const localLocale = await import(
      `date-fns/esm/locale/${locales[lang] || "ru"}/index.js`
    );

    return localLocale;
  };

  let locale: Locale | undefined;

  await getLocale().then((res) => {
    locale = res.default;
  });

  const messageTime = new Date(time);

  const currentTime = new Date();

  const isTodayDate: boolean = isToday(messageTime);

  const isLastWeek: boolean = differenceInWeeks(currentTime, messageTime) === 0;

  const isThisYearDate: boolean = isThisYear(messageTime);

  let dateFormat: string = "";

  if (isTodayDate) {
    dateFormat = "HH:mm";
  } else if (isLastWeek) {
    dateFormat = "EEEEEE";
  } else if (isThisYearDate) {
    dateFormat = "dd MMM";
  } else {
    dateFormat = "PP";
  }

  return format(messageTime, dateFormat, { locale });
};
