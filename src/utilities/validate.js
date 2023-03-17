const validate = {
  //* ==== 2. 檢核只可為英數字 ====
  //* 來源： Utility.js
  chkKeyValueNumEng (input) {
    const Rule = /^[A-Za-z0-9]+$/
    if (Rule.test(input)) {
      return true
    }
    if (input === '') {
      return true
    }
    return '只可輸入英數字，請重新輸入。'
  },

  //* ==== 3. 檢核輸入值(特殊符號） ====
  //* 來源： Utility.js
  chkKeyValue (input) {
    const Rule = /['"-*/=+!@#$%^&()_{}.]/
    if (!Rule.test(input)) {
      return true
    }
    return '輸入無效字元，請重新輸入。'
  },

  //* ==== 4. 檢核欄位長度(指定輸入a~b個字元) ====
  // ? 參數說明:
  // ? input(字串): v-model綁定的欄位值
  // ? FormDom(DOM元素): <Form> 標籤的 DOM，用於呼叫套件中的函式
  // ? fieldName(字串): 驗證欄位的名稱，用於設定套件錯誤訊息
  // ? intStart(數字): 最少需輸入的字數
  // ? intEnd(數字): 最多可輸入的字數
  //* 來源： Utility.js
  chkKeyValueLength (input, FormDom, fieldName, intStart, intEnd) {
    console.log(input, FormDom, fieldName, intStart, intEnd)
    FormDom.setFieldError(fieldName, '')
    const intTotal = input.length
    if ((intTotal < intStart) || (intTotal > intEnd)) {
      FormDom.setFieldError(fieldName, `${fieldName}請輸入  ${intStart} - ${intEnd}  字。`)
    }
    return true
  },

  //* ==== 5. 檢核兩欄位值不可相同 ====
  // ? orgInput: A欄位值 ； newInput: B欄位值 ； orgName:A欄位名稱 ； newName:B欄位名稱
  //* 來源： Utility.js
  // chkKeyCompareNO (orgInput, newInput, orgName, newName) {
  //   if ((orgInput !== '') && (newInput !== '')) {
  //     if (orgInput === newInput) {
  //       return `' ${orgName} '不可與' ${newName} '相同，請重新輸入。`
  //     }
  //   }
  //   return true
  // },

  //* ==== 6. 檢核兩欄位值需相同 ====
  //* 來源： Utility.js
  // chkKeyCompare (orgInput, newInput, orgName, newName) {
  //   if ((orgInput !== '') && (newInput !== '')) {
  //     if (orgInput !== newInput) {
  //       return `' ${orgName} '與' ${newName} '需相同，請重新輸入。`
  //     }
  //   }
  //   return true
  // },

  //* ==== 7. 檢核只可為數字 ====
  //* 來源： Utility.js
  // TODO 可用規則 12或22 代替
  chkKeyValueNum (value) {
    const Rule = /^[0-9]*$/
    if (Rule.test(value)) {
      return true
    }
    return '僅可輸入數字，請重新輸入。'
  },

  //* ==== 8. 檢核電子郵件 ====
  //* 來源： Utility.js
  chkEmail (input, strMsg) {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ // eslint-disable-line
    if (input !== '') {
      if (filter.test(input) === false) {
        return '格式錯誤，請重新輸入。'
      }
    }
    return true
  },

  //* ==== 9. 檢核數字欄位長度 ====
  // ? intStart: 最少輸入字元；intEnd: 最多輸入字元
  //* 來源： Utility.js
  // chkKeyNOLength (input, intStart, intEnd) {
  //   var intTotal = 0
  //   const intLen = input.length
  //   if (input !== '') {
  //     if (intStart === 0) {
  //       if (intTotal > intEnd) {
  //         return `超過欄位長度，請重新輸入(' ${intEnd} '字元)`
  //       }
  //     } else {
  //       if ((intLen < intStart) || (intLen > intEnd)) {
  //         return `請輸入' ${intStart} '-' ${intEnd} '字元。`
  //       }
  //     }
  //   }
  //   return true
  // },

  //* ==== 10. 檢核只可為英數字() ====
  //* 來源： Utility.js
  // chkKeyValueNumEngSpc (input) {
  //   let strNumFlag = '0'
  //   let strEngFlag = '0'
  //   let strSpFlag = '0'
  //   let strChk = ''
  //   const arrPWD = input.split('/')
  //   const arrP = arrPWD.pop()
  //   if (arrPWD !== '') {
  //     for (let CharCount = 1; CharCount < arrPWD.length; CharCount++) {
  //       strChk = arrPWD[CharCount] - arrP
  //       if ((strChk >= 0) && (strChk <= 9)) {
  //         strNumFlag = '1'
  //       } else if ((strChk >= 65) && (strChk <= 90)) {
  //         strEngFlag = '1'
  //       } else if ((strChk >= 97) && (strChk <= 122)) {
  //         strEngFlag = '1'
  //       } else if ((strChk === 33) || (strChk === 35) || (strChk === 36) || (strChk === 64)) {
  //         strSpFlag = '1'
  //       }
  //     }
  //     if (strNumFlag === '1' && strEngFlag === '0' && strSpFlag === '0') {
  //       return '需為英文字母(區分大小寫)、數字或符號任兩項交錯，請重新輸入。'
  //     } else if (strNumFlag === '0' && strSpFlag === '1' && strEngFlag === '0') {
  //       return '需為英文字母(區分大小寫)、數字或符號任兩項交錯，請重新輸入。'
  //     } else if (strNumFlag === '0' && strEngFlag === '1' && strSpFlag === '0') {
  //       return '需為英文字母(區分大小寫)、數字或符號任兩項交錯，請重新輸入。'
  //     } else {
  //       return true
  //     }
  //   } else {
  //     return true
  //   }
  // },

  //* ==== 11. 僅可輸入英、數字、!、@、#、$ ====
  //* 來源： Utility.js
  // ------------------------------------------------------------------------------
  OnlyNumEngPress (value) {
    const Rule = /^[a-zA-Z0-9!@#\\$]*$/g
    // const Rule = /^[A-Za-z0-9!@#$]+$/
    if (Rule.test(value)) {
      return true
    }
    return '僅可輸入英、數字、!、@、#、$，請重新輸入。'
  },

  //* ==== 12. 只可輸入數字
  //* 來源： Utility.js
  // ? 搭配@keyup事件使用，直接過濾所有輸入字元必定為數字
  OnlyNumPress (value) {
    return value.replace(/[^\d]+/g, '')
  },

  //* ==== 13. 確認辦卡地址 ====(非聯邦卡友)
  //* 來源： Utility.js
  // TODO 可用在 input 加入屬性 maxlength
  // TODO 確認辦卡地址長度 縣市10 地區10 路10 巷弄號樓5 其他100
  // ?  Address: {
  // ?   ZipCode: '',遞區號
  // ?   Dist: '',區
  // ?   Rd: '',路
  // ?   Ln: '',巷
  // ?   Aly: '',弄
  // ?   No_1: '',號1
  // ?   No_2: '',號2
  // ?   Floor: '',樓
  // ?   Other: '' 其他
  // ? },
  // * 參數說明:
  // * Address(物件): 所有地址欄位，在每一輸入框中都需要驗證所有欄位
  // * FormDom(DOM元素): <Form> 標籤的 DOM，用於呼叫套件中的函式
  // * fieldName(字串): 驗證欄位的名稱，用於設定套件錯誤訊息
  CheckAddressAll (Address, FormDom, fieldName) {
    FormDom.setFieldError(fieldName, '')
    const test = Address.Ln + Address.Aly + Address.No_1 + Address.No_2 + Address.Floor + Address.Other
    console.log(Address)
    if (test.length < 1) {
      FormDom.setFieldError(fieldName, '地址格式有誤')
    }
    if (!Address.ZipCode || !Address.Dist || !Address.Rd) {
      FormDom.setFieldError(fieldName, '地址格式有誤')
    }
    if (Address.Ln.length > 5 || Address.Aly.length > 5 || Address.No_1.length > 5 || Address.No_2.length > 5 || Address.Floor.length > 5 || Address.Other.length > 100) {
      FormDom.setFieldError(fieldName, '地址格式有誤')
    }
  },

  //* ==== 16. 檢查身分證格式 ====
  checkId (id) {
    // ? 身分證驗證
    const idRule = /^[a-z](1|2)\d{8}$/i
    if (idRule.test(id)) {
      return true
    }
    return '請輸入正確格式身份證'
  },

  //* ==== 17. 顯示錯誤訊息 ====
  // ? 參數說明:
  // ? errors: 使用套件函式取得的錯誤資訊
  showErrors (errors) {
    let errMsg = ''
    for (const [key, value] of Object.entries(errors)) {
      errMsg += `【${key}】 : ${value}\n`
    }
    alert(errMsg)
  },
  //* ==== 18. 檢查信用卡字數 ====
  checkCode (code) {
    // ? 信用卡字數驗證
    const idRule = /^\d{4}$/
    if (idRule.test(code)) {
      return true
    }
    return '請輸入正確的信用卡格式'
  },
  //* ==== 19. 輸入值強制轉大寫英文 ====
  watchToUpper (data) {
    data = data.toUpperCase()
    return data
  },
  //* ==== 20. 手機號碼驗證 ====
  checkPhone (value) {
    const Rule = /^09[0-9]{8}$/
    if (Rule.test(value)) {
      return true
    }
    return '請輸入正確的手機格式'
  },
  //* ==== 21. 中文字檢核 ====
  checkChinese (value) {
    const Rule = /[^\u4e00-\u9fa5]/
    if (!Rule.test(value)) {
      return true
    }
    return '請輸入中文'
  },
  //* ==== 22. 只可輸入數字，且首字不為零 ====
  // ? 搭配@keyup事件使用，直接過濾所有輸入字元必定為數字
  NumOnlyWithoutFirstZero (value) {
    return value.replace(/^(0+)|[^\d]+/g, '')
    // /^(0+)|[^\d]+/g 不可是 0 開頭
  },
  //* ==== 23. radio button 值為布林值時檢核 ====
  radioRequired (value) {
    if (value !== false && value !== true) {
      return '此欄位為必填'
    }
    return true
  },
  //* ==== 24. 檢查3碼信用卡安全碼 ====
  checkLast3Code (code) {
    // ? 信用卡末三碼驗證
    const idRule2 = /^\d{3}$/
    if (idRule2.test(code)) {
      return true
    }
    return '請輸入正確的信用卡安全碼格式'
  },
  //* ==== 25. 取得下拉選單日期 ====
  // ? 帶入參數為 v-model 綁定之物件，回傳為下拉年/月/日之物件包陣列
  // ? selectedDate:{
  // ?   Year:'',
  // ?   Month:'',
  // ?   Day:''
  // ? }
  getDateSelect (selectedDate, dateType) {
    console.log('selectedDate', selectedDate)
    const dateList = {
      year: [],
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      day: []
    }
    // ? 判斷為"民國"或"西元"
    if (dateType === '西元') {
      for (let i = new Date().getFullYear() - 100; i <= new Date().getFullYear(); i++) {
        dateList.year.unshift(i)
      }
    } else if (dateType === '民國') {
      for (let i = new Date().getFullYear() - 100 - 1911; i <= new Date().getFullYear() - 1911; i++) {
        dateList.year.unshift(i)
      }
    }
    // ? 判斷為大月/小月/2月
    const BigMonth = [1, 3, 5, 7, 8, 10, 12]
    const SmallMonth = [4, 6, 9, 11]
    if (BigMonth.includes(selectedDate.Month)) {
      for (let i = 1; i <= 31; i++) {
        dateList.day.push(i)
      }
    } else if (SmallMonth.includes(selectedDate.Month)) {
      for (let i = 1; i <= 30; i++) {
        dateList.day.push(i)
      }
    } else if (selectedDate.Month === 2) {
      // ? 判斷是否為閏年
      const year = selectedDate.Year > 1000 ? selectedDate.Year : selectedDate.Year + 1911
      if (year % 4 === 0) {
        for (let i = 1; i <= 29; i++) {
          dateList.day.push(i)
        }
      }
      if (year % 4 !== 0) {
        for (let i = 1; i <= 28; i++) {
          dateList.day.push(i)
        }
      }
    }
    // ? 判斷是否超出日期區間
    if (!dateList.day.includes(selectedDate.Day)) {
      selectedDate.Day = ''
    }
    console.log(dateList)
    return dateList
  },
  //* ==== 26. 檢查下拉日期格式 ====
  // ? Date:{
  // ?   Year: '',
  // ?   Month: '',
  // ?   Day: ''
  // ? }
  checkDate (Date, FormDom, fieldName) {
    FormDom.setFieldError(fieldName, '')
    if (!Date.Year || !Date.Month || !Date.Day) {
      FormDom.setFieldError(fieldName, '日期格式有誤')
    }
  },
  //* ==== 27.簡訊驗證碼驗證 ====
  checkOTP (code) {
    const idRule = /^\d{4}$/
    if (idRule.test(code)) {
      return true
    }
    return '請輸入正確簡訊驗證碼'
  }
}

export default validate
