export const test = () => {
  return (next: any) => (action: any) => {
    console.debug("Hello Test~");
    return next(action);
  };
};
