export declare class CpfVeri {
    firstDigit: number;
    secondDigit: number;
    totalP: number;
    totalS: number;
    private cpfLength;
    private separator;
    private digit;
    private Accumulator;
    private result;
    verify(cpf: string): boolean;
}
