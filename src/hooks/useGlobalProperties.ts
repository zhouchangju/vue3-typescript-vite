/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getCurrentInstance } from 'vue';

export default function useGlobalProperties() {
  const {
    appContext: {
      app: {
        config: { globalProperties },
      },
    },
  } = getCurrentInstance();
  return { ...globalProperties };
}
