
// year constants - tax bands and tax rates per year
export const year_array = [
    { id: 0, year: '2019-20', allowance: 12500, brl: 37500, hrl: 112500, br: 0.2, hr: 0.4, ar: 0.45, par: true, par_limit: 100000, ni_start: 719, ni_uel: 4167, ni_start_rate: 0.12, ni_uel_rate: 0.02 },
    { id: 1, year: '2020-21', allowance: 12500, brl: 37500, hrl: 112500, br: 0.2, hr: 0.4, ar: 0.45, par: true, par_limit: 100000, ni_start: 792, ni_uel: 4167, ni_start_rate: 0.12, ni_uel_rate: 0.02 },
]

// Calculate the take home pay for a given salary
export function calcTakeHomeFromSalary(tax_year_id, salary) {

    const brl = year_array[tax_year_id].brl
    const brate = year_array[tax_year_id].br;

    const hrl = year_array[tax_year_id].hrl
    const hrate = year_array[tax_year_id].hr;

    const arate = year_array[tax_year_id].ar;

    const par_limit = year_array[tax_year_id].par_limit

    const allow_deduct = salary - par_limit > 0 ? ((salary - par_limit) / 2) : 0

    const allowance = Math.max(0, Math.ceil(year_array[tax_year_id].allowance - allow_deduct))

    const taxable = Math.max(salary - allowance, 0)

    const tax_free_amount = Math.max(0, Math.min(allowance, salary))
    const basic_amount = Math.max(0, Math.min(taxable, brl))
    const higher_amount = Math.max(0, Math.min(taxable - brl, hrl))
    const additional_amount = Math.max(taxable - brl - hrl, 0)

    const basic_tax = Math.round(brate * basic_amount, 2);
    const higher_tax = Math.round(hrate * higher_amount, 2)
    const additional_tax = Math.round(arate * additional_amount, 2)
    const total_tax = basic_tax + higher_tax + additional_tax

    //national insurance .. to yearly 
    const ni_start = year_array[tax_year_id].ni_start * 12;
    const ni_uel = year_array[tax_year_id].ni_uel * 12;

    const ni_start_rate = year_array[tax_year_id].ni_start_rate
    const ni_uel_rate = year_array[tax_year_id].ni_uel_rate

    const nicable = salary - ni_start;
    const ni_basic = Math.max(0, Math.min(nicable, ni_uel - ni_start))
    const ni_basic_deduction = Math.round(ni_start_rate * ni_basic, 2)

    const ni_higher = Math.max(salary - ni_uel, 0)
    const ni_higher_deduction = Math.round(ni_uel_rate * ni_higher, 2)

    const total_nics = ni_basic_deduction + ni_higher_deduction

    const take_home = salary - total_tax - ni_basic_deduction - ni_higher_deduction

    const results = {
        allowance, taxable, basic_amount, basic_tax, higher_amount, higher_tax, additional_amount, additional_tax, total_tax, ni_basic,
        ni_basic_deduction, ni_higher, ni_higher_deduction, total_nics, take_home,
        tax_free_amount, basic_amount, higher_amount, additional_amount
    }

    return results

}

// Calculate the salary needed for the desired take home pay
export function calcGrossFromTakehome(tax_year_id, takehome) {

    /*
        How might you solve this using the calcTakeHomeFromSalary calculation ? 
        No need to implement anything, just think about what methods you could use. 
    */

}