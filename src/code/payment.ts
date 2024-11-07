/**
 * Represents a single payment made on a loan.
 * This class has no methods, it is simply a data class.
 * @class Payment
 */
export class Payment {
    constructor(
        /**
         * The unique identifier of the payment, assigned in increasing order (1, 2, 3...)
         * @type {number}
         * @memberof Payment
         */
        private paymentNumber: number,
        /**
         * The beginning balance of the loan before the payment is made
         * @type {number}
         * @memberof Payment
         */
        private beginningBalance: number,
        /**
         * The payment amount made
         * @type {number}
         * @memberof Payment
         */
        private paymentAmount: number,
        /**
         * The interest amount paid
         * @type {number}
         * @memberof Payment
         */
        private interestAmount: number,
        /**
         * The principal amount paid
         * @type {number}
         * @memberof Payment
         */
        private principleAmount: number,
        /**
         * The remaining balance of the loan after the payment is made
         * @type {number}
         * @memberof Payment
         */
        private remainingBalance: number,
        /**
         * The total interest paid up to this point
         * @type {number}
         * @memberof Payment
         */
        private cumulativeInterest: number,
        /**
         * The extra payment amount made
         * @type {number}
         * @memberof Payment
         */
        private extraPayment: number,
    ) {}

    // FixMe: Implement the missing getters
}
