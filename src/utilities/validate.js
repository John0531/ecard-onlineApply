const validate = {
  //* ==== 2. 檢核只可為英數字 ====
  //* 來源： Utility.js
  chkKeyValueNumEng (input) {
    var strChk = ''
    var strChk1 = ''
    var strFlag = '0'
    if (input !== '') {
      for (let CharCount = 0; CharCount < input.length; CharCount++) {
        strChk = input.charAt(CharCount)
        strChk1 = strChk.charCodeAt(0)
        if ((strChk1 >= 48) && (strChk1 <= 57)) {
          strFlag = '1'
        } else if ((strChk1 >= 65) && (strChk1 <= 90)) {
          strFlag = '1'
        } else if ((strChk1 >= 97) && (strChk1 <= 122)) {
          strFlag = '1'
        } else if ((strChk1 === 33) || (strChk1 === 35) || (strChk1 === 36) || (strChk1 === 64)) {
          strFlag = '1'
        } else {
          strFlag = '0'
        }
      }
    } else {
      strFlag = '1'
    }
    if (strFlag === '0') {
      return '只可輸入英數字，請重新輸入。'
    } else {
      return true
    }
  },

  //* ==== 3. 檢核輸入值(特殊符號） ====
  //* 來源： Utility.js
  chkKeyValue (input) {
    let blnFlag = false
    if (input !== '') {
      if (input.indexOf("'") > -1) {
        blnFlag = true
      }
      if (input.indexOf('"') > -1) {
        blnFlag = true
      }
      if (input.indexOf('-') > -1) {
        blnFlag = true
      }
      if (input.indexOf('*') > -1) {
        blnFlag = true
      }
      if (input.indexOf('/') > -1) {
        blnFlag = true
      }
      if (input.indexOf('=') > -1) {
        blnFlag = true
      }
      if (input.indexOf('+') > -1) {
        blnFlag = true
      }
      if (input.indexOf('&') > -1) {
        blnFlag = true
      }
    }

    if (blnFlag === true) {
      return '輸入無效字元，請重新輸入。'
    } else {
      return true
    }
  },

  //* ==== 4. 檢核欄位長度(指定輸入a~b個字元) ====
  // ? intStart: 最少輸入字元；intEnd: 最多輸入字元
  //* 來源： Utility.js
  chkKeyValueLength (input, intStart, intEnd) {
    let intTotal = 0
    for (let iTxtLength = 0; iTxtLength < input.length; iTxtLength++) {
      const intcode = input.charCodeAt(iTxtLength)
      if (intcode > 255 || intcode < 0) {
        intTotal = intTotal + 2
      } else {
        intTotal = intTotal + 1
      }
    }

    if (input !== '') {
      if (intStart === 0) {
        if (intTotal > intEnd) {
          return `超過欄位長度，請重新輸入(' ${intEnd}' 字。`
        }
      } else {
        if ((intTotal < intStart) || (intTotal > intEnd)) {
          return `請輸入' ${intStart}-${intEnd} '字。`
        }
        if (((intTotal < intStart) || (intTotal > intEnd)) && (intStart === intEnd)) {
          return `請輸入' ${intStart} '字。`
        }
      }
    }
    return true
  },

  //* ==== 5. 檢核兩欄位值不可相同 ====
  // ? orgInput: A欄位值 ； newInput: B欄位值 ； orgName:A欄位名稱 ； newName:B欄位名稱
  //* 來源： Utility.js
  chkKeyCompareNO (orgInput, newInput, orgName, newName) {
    if ((orgInput !== '') && (newInput !== '')) {
      if (orgInput === newInput) {
        return `' ${orgName} '不可與' ${newName} '相同，請重新輸入。`
      }
    }
    return true
  },

  //* ==== 6. 檢核兩欄位值需相同 ====
  //* 來源： Utility.js
  chkKeyCompare (orgInput, newInput, orgName, newName) {
    if ((orgInput !== '') && (newInput !== '')) {
      if (orgInput !== newInput) {
        return `' ${orgName} '與' ${newName} '需相同，請重新輸入。`
      }
    }
    return true
  },

  //* ==== 7. 檢核只可為數字 ====
  //* 來源： Utility.js
  chkKeyValueNum (input) {
    var strChk = ''
    var strChk1 = ''
    var strFlag = '0'
    var strErrFlog = ''
    if (input !== '') {
      for (let CharCount = 0; CharCount < input.length; CharCount++) {
        strChk = input.charAt(CharCount)
        strChk1 = strChk.charCodeAt(0)
        if ((strChk1 >= 48) && (strChk1 <= 57)) {
          if ((strErrFlog !== '0')) { // 有錯不更新strFlag
            strFlag = '1'
          }
        } else {
          strFlag = '0'
          strErrFlog = '0'
        }
      }
    } else {
      strFlag = '1'
    }
    if (strFlag === '0') {
      return '只可輸入數字，請重新輸入。'
    } else {
      return true
    }
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
  chkKeyNOLength (input, intStart, intEnd) {
    var intTotal = 0
    const intLen = input.length
    if (input !== '') {
      if (intStart === 0) {
        if (intTotal > intEnd) {
          return `超過欄位長度，請重新輸入(' ${intEnd} '字元)`
        }
      } else {
        if ((intLen < intStart) || (intLen > intEnd)) {
          return `請輸入' ${intStart} '-' ${intEnd} '字元。`
        }
      }
    }
    return true
  },

  //* ==== 10. 檢核只可為英數字() ====
  //* 來源： Utility.js
  chkKeyValueNumEngSpc (input) {
    let strNumFlag = '0'
    let strEngFlag = '0'
    let strSpFlag = '0'
    let strChk = ''
    const arrPWD = input.split('/')
    const arrP = arrPWD.pop()
    if (arrPWD !== '') {
      for (let CharCount = 1; CharCount < arrPWD.length; CharCount++) {
        strChk = arrPWD[CharCount] - arrP
        if ((strChk >= 0) && (strChk <= 9)) {
          strNumFlag = '1'
        } else if ((strChk >= 65) && (strChk <= 90)) {
          strEngFlag = '1'
        } else if ((strChk >= 97) && (strChk <= 122)) {
          strEngFlag = '1'
        } else if ((strChk === 33) || (strChk === 35) || (strChk === 36) || (strChk === 64)) {
          strSpFlag = '1'
        }
      }
      if (strNumFlag === '1' && strEngFlag === '0' && strSpFlag === '0') {
        return '需為英文字母(區分大小寫)、數字或符號任兩項交錯，請重新輸入。'
      } else if (strNumFlag === '0' && strSpFlag === '1' && strEngFlag === '0') {
        return '需為英文字母(區分大小寫)、數字或符號任兩項交錯，請重新輸入。'
      } else if (strNumFlag === '0' && strEngFlag === '1' && strSpFlag === '0') {
        return '需為英文字母(區分大小寫)、數字或符號任兩項交錯，請重新輸入。'
      } else {
        return true
      }
    } else {
      return true
    }
  },

  //* ==== 11. 僅可輸入英、數字、!、@、#、$ ====
  //* 來源： Utility.js
  // ------------------------------------------------------------------------------
  OnlyNumEngPress (e) {
  // 48 ~ 57 為數字、65~90大寫英文、97~122小寫英文
  // #35、'39、"34、-45、*45、<60、>62、/47、%37、=61、(40、)41、&38、+43-->不可輸入
  //! 33、@64、#35、$36-->可輸入
    var objKeyCode = window.event ? e.keyCode : e.charCode
    if ((objKeyCode >= 48) && (objKeyCode <= 57)) {
      return true
    } else if ((objKeyCode >= 65) && (objKeyCode <= 90)) {
      return true
    } else if ((objKeyCode >= 97) && (objKeyCode <= 122)) {
      return true
    } else if (objKeyCode === 0) {
      return true
    } else {
      return false
    }
  },

  //* ==== 12. 只可輸入數字
  //* 來源： Utility.js
  OnlyNumPress (value) {
    value = value.replace(/^(0+)|[^\d]+/g, '')
    return value
    // value = value.toString().replace(/^(0+)|[^\d]+/g, '')
    // console.log(value)
    // if (value) {
    //   return parseInt(value)
    // } else {
    //   return ''
    // }
    // if (!value) {
    //   return ''
    // }
    // const a = value.toString()
    // console.log(a)
    // if (a.length > 5) {
    //   return parseInt(a.slice(0, 5))
    // }

    // console.log(e.keyCode)
    // var objKeyCode = window.event ? e.keyCode : e.charCode
    // console.log(objKeyCode)
    // // 48 ~ 57 為數字
    // if ((objKeyCode === 13) || (objKeyCode === 9)) {
    //   return true
    // }
    // if (objKeyCode === 0) {
    //   return true
    // }
    // if ((objKeyCode < 48) || (objKeyCode >= 58)) {
    //   return false
    // } else {
    //   return true
    // }
  },

  //* ==== 13. 確認辦卡地址 ====(非聯邦卡友)
  //* 來源： Utility.js
  // TODO 可用 veevalide length
  // TODO 確認辦卡地址長度 縣市10 地區10 路10 巷弄號樓5 其他100
  Address: {
    ZipCode: '', // ? 郵遞區號
    Dist: '', // ? 區
    Rd: '', // ? 路
    Ln: '', // ? 巷
    Aly: '', // ? 弄
    No_1: '', // ? 號1
    No_2: '', // ? 號2
    Floor: '', // ? 樓
    Other: ''// ? 其他
  },
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
  //* 來源： Utility.js
  checkId (id) {
    // ? 身分證驗證
    const idRule = /^[a-z](1|2)\d{8}$/i
    if (idRule.test(id)) {
      return true
    }
    return '請輸入正確格式身份證'
  },

  //* ==== 17. 顯示錯誤訊息 ====
  showErrors (errors) {
    let errMsg = ''
    for (const [key, value] of Object.entries(errors)) {
      errMsg += `【${key}】 : ${value}\n`
    }
    alert(errMsg)
  }
}

export default validate
