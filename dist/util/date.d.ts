export declare class DateManipulator {
    private createDate;
    saveFile(): string;
    YMD(): string;
    DMY(): {
        day: string;
        month: string;
        year: number;
    };
    YMDHMS(): string;
}
