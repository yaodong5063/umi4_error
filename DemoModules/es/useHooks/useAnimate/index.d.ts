import { cssExports } from "./index.less";
declare type CssExports = typeof cssExports;
interface IAnimateOptProps<T> {
    animateType: T;
    infinite?: boolean;
    delay?: 1 | 2 | 3 | 4 | 5;
    faster?: 1 | 2;
    slower?: 1 | 2;
}
declare function useAinmate<T extends keyof CssExports>(animateOpt: IAnimateOptProps<T>): string | undefined;
export default useAinmate;
