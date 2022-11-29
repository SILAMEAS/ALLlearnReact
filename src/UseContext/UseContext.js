import Test from "./test";
import { ThemeAnyWhere } from "./ThemeContext";

function UseContext() {
  return (
    <>
      <ThemeAnyWhere>
        <Test />
      </ThemeAnyWhere>
    </>
  );
}

export default UseContext;
