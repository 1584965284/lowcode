import { createSlice } from "@reduxjs/toolkit";

export const componentMenuSlice = createSlice({
  name: "componentMenu",
  initialState: {
    data: [
      {
        type: 'button',
        name: '按钮',
        args: {
          value: '按钮',
          style: {}
        }
      },
      {
        type: 'text',
        name: '文本',
        args: {
          value: '文本',
          style: {}
        }
      },
      {
        type: 'input',
        name: '输入框',
        args: {
          value: '输入框',
          style: {
            width: '200px'
          }
        }
      }
    ],
  },
  reducers: {
  },
});

export default componentMenuSlice.reducer;
