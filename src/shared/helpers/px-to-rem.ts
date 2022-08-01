const rootElem: HTMLHtmlElement | null = window
  ? document.querySelector("html")
  : null;

export const pxToRem = (px: number | string): string => {
  const remSize: string = rootElem
    ? getComputedStyle(rootElem).fontSize
    : "10px";

  const coefficient = parseFloat(remSize);

  if (typeof px === "string") {
    return `${parseFloat(px) / coefficient}rem`;
  }

  return `${px / coefficient}rem`;
};
