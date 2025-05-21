
interface ErrorInfo {
  subCode?: number;
  SubCode?: number;
}

export const checkErrCode = (errcode: number, language: string, sucessinfo: ErrorInfo): void => {
  console.log("errcode", errcode, "language", language, "sucessinfo", sucessinfo);
  switch (sucessinfo.subCode || sucessinfo.SubCode) {
    case 20001:
      break;
  }
};
