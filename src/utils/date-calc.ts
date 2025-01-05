import { differenceInMonths, differenceInYears } from "date-fns"

function dateDifferenceString(yearDifference: number, monthDifference: number) {
  let dateDifference = ''

  if (yearDifference > 0) dateDifference += `${yearDifference} ${yearDifference > 1 ? 'years' : 'year'} `
  if (monthDifference > 0) dateDifference += `${monthDifference} ${monthDifference > 1 ? 'months' : 'month'}`

  return dateDifference
}

export function dateDifferenceStartEndJob(startDate: string | Date, endDate: string | Date) {
  let start = startDate
  let end = endDate
  const moment = 'moment'

  if (typeof startDate === 'string') {
    start = new Date(start)
  }

  if (typeof endDate === 'string' && endDate !== moment) {
    end = new Date(end)
  }

  if (endDate === moment) {
    const yearDifference = differenceInYears(new Date(), start)
    const monthDifference = differenceInMonths(new Date(), start) - (yearDifference * 12)

    return dateDifferenceString(yearDifference, monthDifference)
  }

  const yearDifference = differenceInYears(end, start)
  const monthDifference = differenceInMonths(end, start) - (yearDifference * 12)

  return dateDifferenceString(yearDifference, monthDifference)
}