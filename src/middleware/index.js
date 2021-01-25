import checker from "./checker";
import logger from "./logger";
import thunk from "./redux-thunk";
import { applyMidldeware } from "redux";

export default applyMidldeware(thunk, checker, logger);
