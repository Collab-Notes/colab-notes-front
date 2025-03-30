import { parseISO, format, differenceInDays } from "date-fns";
import { es } from "date-fns/locale";

/**
 * Formats a date into a natural language representation in Spanish.
 *
 * @param date - The Date object to format.
 * @param args.showTime - If true, includes the time in the formatted string. Defaults to false.
 * @returns A string with the formatted date in natural language. Examples:
 *
 * + For recent dates (≤ 30 days):
 *   - "Hoy (15-09-2024)" or "Hoy (15-09-2024) a las 08:36 am" with showTime
 *   - "Ayer (14-09-2024)" or "Ayer (14-09-2024) a las 08:36 am" with showTime
 *   - "Hace 2 días (13-09-2024)" or "Hace 2 días (13-09-2024) a las 08:36 am" with showTime
 *
 * + For older dates (> 30 days):
 *   - "15 de septiembre del 2024" or "15 de septiembre del 2024 a las 08:36 am" with showTime
 */
function formatNaturalDate(date: Date, args?: { showTime: boolean }) {
  const today = new Date();
  const daysDifference = differenceInDays(today, date);

  const timeString = args?.showTime ? `a las ${format(date, "hh:mm a")}` : "";

  if (daysDifference <= 30) {
    const formattedDate = format(date, "dd-MM-yyyy");

    if (daysDifference === 0) return `Hoy (${formattedDate}) ${timeString}`;
    else if (daysDifference === 1)
      return `Ayer (${formattedDate}) ${timeString}`;
    else return `Hace ${daysDifference} días (${formattedDate}) ${timeString}`;
  } else
    return `${format(date, "d 'de' MMMM 'del' yyyy", { locale: es })} ${timeString}`;
}

/**
 * Returns a formatted date object for a given timestamp.
 *
 * @param dateString - The date to format. If null, returns { iso: null, formatted: "N/A" }.
 * @param args.showTime - If true, includes the time in the formatted string. Defaults to false.
 * @returns An object with the following properties:
 * - iso: The date as a Date object.
 * - formatted: The date formatted in natural language.
 *
 */
export function getNaturalDateObject(
  dateString: string | null,
  args?: { showTime: boolean },
): NaturalDateObjectType {
  if (!dateString) return { iso: "N/A", formatted: "N/A" };
  const date = parseISO(dateString);

  return {
    iso: date.toLocaleString(),
    formatted: formatNaturalDate(date, args),
  };
}

export type NaturalDateObjectType = {
  iso: string;
  formatted: string;
};
