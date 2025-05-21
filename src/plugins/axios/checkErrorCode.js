// import { ElMessage } from "../ElementUI";
import { ElMessage } from 'element-plus'
// import { MessageBox } from "element-ui";
import { Storage } from "../../utils/storage";
import router from "@/router";
export const checkErrorCode = (error) => {
  switch (error.subCode || error.SubCode) {
    case 20001:
    case 20003:
      const hideToast = router.history.current.meta.hideToast;
      if (hideToast) {
        Storage.deal();
        window.location.href = "/login";
      } else {
        MessageBox.alert("登录已过期,请重新登录", "提示", {
          confirmButtonText: "确定",
          callback: () => {
            Storage.deal();
            window.location.href = "/login";
          },
        });
      }
      break;
    case 40005:
      ElMessage.error("密匙输入错误，请重新输入");
      break;
    case 40006:
      ElMessage.error("查询错误，请检查参数");
      break;
    default:
      ElMessage.error(`${error.subMsg || error.SubMsg}`);
      break;
  }
};
