export const logger = ({ getState }: { getState: any }) => {
  return (next: any) => (action: any) => {
    console.log("will dispatch", action);
    // 调用 middleware 链中下一个 middleware 的 dispatch。
    const returnValue = next(action);
    console.log("state after dispatch", getState()); // eslint-disabled-line
    // 一般会是 action 本身，除非
    // 后面的 middleware 修改了它。
    return returnValue;
  };
};
