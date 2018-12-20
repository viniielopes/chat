import next from "next";

const dev = process.env.NODE_ENV || "production";
const appNExt = next({ dev: dev });

export default appNExt;
