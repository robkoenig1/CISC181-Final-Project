import { Payment } from "./payment";
import { Finance } from "./finance";

export class Loan {
    //  PMT is the calculated/required PMT payment amount to make on the loan
    private pmt: number;

    //  Payments[] - Array of expected payments on the loan
    private payments: Payment[] = [];

    constructor(
        public loanAmount: number,
        public interestRate: number,
        public loanLength: number,
        public extraPayment: number,
    ) {
        //  set this.PMT using Finance.PMT.
        //  Sample call would be this.PMT = Finance.pmt(0.07/12,30*12,30000,0,0);

        let paymentNumber: number = 0;
        this.createPayments(paymentNumber, loanAmount);
    }

    /**
     * Rounds a number to a specified number of decimal places
     * @param num - number to round
     * @param places - number of decimal places to round to
     * @returns rounded number
     */
    static roundTo(num: number, places: number): number {
        const factor = 10 ** places;
        return Math.round(num * factor) / factor;
    }

    getPMT(): number {
        return Math.abs(this.pmt);
    }

    getPayments(): Payment[] {
        return this.payments;
    }

    /**
     * How much interest would be paid on the loan if no extra payments are made
     * @returns total expected interest
     */
    totalExpectedInterest(): number {
        // FixMe
        return 0;
    }

    //  TotalExpectedPayments - The total amount of expected payments, if no extra payments are made
    totalExpectedPayments(): number {
        // FixMe
        return 0;
    }

    totalPaidInterest(): number {
        // FixMe
        return 0;
    }

    totalPaidPayments(): number {
        // FixMe
        return 0;
    }

    interestSaved(): number {
        // FixMe
        return 0;
    }

    paymentsSaved(): number {
        // FixMe
        return 0;
    }

    totalPaymentCount(): number {
        // FixMe
        return 0;
    }

    totalExpectedPaymentCount(): number {
        // FixMe
        return 0;
    }

    getSpecificPayment(paymentNumber: number): Payment {
        return this.payments[paymentNumber - 1];
    }

    oneTimePayment(paymentNumber: number, lumpSumAmount: number): void {}

    createPayments(paymentNumber: number, startingLoanAmount: number): void {
        let cumulativeInterest: number = 0;
        let loanBalance: number = startingLoanAmount;

        while (loanBalance > this.pmt) {
            // FixMe:
            //  Create a payment when there's still a balance
            //  Figure out the PaymentNumber
            //  Calculate pmtInterst (loan interest) based on loanbalance * this.interestrate/12
            //  Accumulate interst in cummInterest
            //  Calculate PmtSchedulePmt
            //  Calculate PmtPrinciple
            //  Don't forget to deal with extra payment
            //  Calculate PmtEndingBalance

            //  Create a payment
            let newPayment: Payment = new Payment(
                paymentNumber,
                loanBalance,
                pmtScheduledPayment,
                pmtInterest,
                pmtPrinciple,
                pmtEndingBalance,
                cumulativeInterest,
                this.extraPayment,
            );
            this.payments.push(newPayment);

            loanBalance -= pmtPrinciple;

            //  You may have to look for really small amounts to break (0.0000000000000000000001)
            if (Loan.roundTo(loanBalance, 2) == 0) {
                break;
            }
        }

        //  Handle the final payment (if needed)
        //  Merry Christmas... I'm giving you this code...  how to handle the final payment
        //  (if there is a final payment)
        if (Loan.roundTo(loanBalance, 2) > 0.01) {
            paymentNumber++;
            let pmtInterest: number = Loan.roundTo(
                loanBalance * (this.interestRate / 12),
                2,
            );
            cumulativeInterest += pmtInterest;
            let pmtScheduledPayment = Loan.roundTo(loanBalance + pmtInterest, 2) ;
            let pmtPrinciple: number = Loan.roundTo(
                loanBalance - pmtInterest,
                2,
            );

            let newPayment: Payment = new Payment(
                paymentNumber,
                loanBalance,
                pmtScheduledPayment,
                pmtInterest,
                pmtPrinciple,
                0.0,
                cumulativeInterest,
                0,
            );
            this.payments.push(newPayment);
        }
    }
}
