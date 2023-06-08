describe('線上辦卡', () => {
  it('非卡友-書面',{timeout:10000},() => {
    if(Cypress.env('mode')==='dev'){
      cy.visit('http://localhost:8080/card_apply/?&GID=99&IDE=A')
    } else if(Cypress.env('mode')==='prod'){
      cy.intercept('https://cardapi-beta.uitc.com.tw/LINEBank_Co-brandedCard_SIT/chk').as('AwsSubmit')
      cy.visit('https://yesgoimages.s3.ap-northeast-1.amazonaws.com/test/EcardAWS/FeatureCard.html')
      cy.get('input[name="birth"]').type('19800101')
      cy.get('input[name="phone"]').type('0966666666')
      cy.get('button').contains(' 確認 ').click()
      cy.wait('@AwsSubmit',{timeout:30000})
    }
    onlineApply()
    OnLineApply_Gift()
    OnLineApply_OCR()
    OnLineApply_n1()
    OnLineApply_Chkw()
    OnLineApply_Written_OTP()
    OnLineApply_Fillin_OT()
    OnLineApply_Fillin_OT_1()
    OnLineApply_Fillin_OT_2()
    OnLineApply_Fillin_OT_Up()
    OnLineApply_Fillin_OT_finish()
  })
})



function onlineApply(){
  if(Cypress.env('mode')==='dev'){
    cy.get('input[name="申請人身分證字號"]').type('U121825032')
    cy.get('select[name="年"]').select('1996')
    cy.get('select[name="月"]').select('5')
    cy.get('select[name="日"]').select('31')
  }
  cy.get('input[name="申請的信用卡"]').check()
  cy.get('input[name="有關條款"]').click()
  cy.get('#terms_box_1').scrollTo('bottom',{ duration: 500 })
  cy.get('#button_termsOpt_1').check()
  cy.get('button').contains('確定').click()
  cy.get('#agree1').check()
  cy.get('button').contains('下一步').click()
}


function OnLineApply_Gift(){
  cy.url().should('include', '/OnLineApply_Gift') 
  cy.get('.form-check').children('.form-check-input').check()
  cy.get('button').contains('下一步').click()
}


function OnLineApply_OCR(){
  cy.url().should('include', '/OnLineApply_OCR')
  cy.get('.modal-dialog').should('be.visible').then(()=>{
    cy.wait(500)
    cy.get('button').contains('關閉').click()
  })
  cy.intercept('https://card-beta.uitc.com.tw/CardApply/api/OCR/UploadImage').as('UploadImage')
  cy.get('#upload1').selectFile('cypress/file/ROC_mibunsho.jpg')
  cy.get('button').contains('確認').click()
  cy.get('#upload2').selectFile('cypress/file/4b45d5329a362.jpg')
  cy.get('button').contains('確認').click()
  cy.get('button').contains('送出證件').click()
  cy.wait('@UploadImage',{timeout:30000})
  cy.get('select[name="homeAddr_County"]').should('be.visible')
  cy.get('select[name="homeAddr_County"]').select('臺北市')
  cy.get('select[name="homeAddr_Area"]').select('士林區')
  cy.get('select[name="homeAddr_Road"]').select('力行街')
  cy.get('input[name="homeAddr_Num"]').type('123')
  cy.get('button').contains('確認').click()
}


function OnLineApply_n1(){
  cy.url().should('include', '/OnLineApply_n1')
  cy.get('button').eq(2).click()
}



function OnLineApply_Chkw(){
  cy.url().should('include', '/OnLineApply_Chkw')
  cy.get('#mbleTelNbr').type('0963550051')
  cy.get('input[name="agreeTerms"]').check()
  cy.get('button').contains('下一步').click()
}



function OnLineApply_Written_OTP(){
  cy.url().should('include', '/OnLineApply_Written_OTP')
  cy.get('button').contains(' 關閉 ').should('be.visible').then(()=>{
    cy.wait(500)
    cy.get('button').contains(' 關閉 ').click()
    cy.get('input[name="簡訊驗證碼"]').type('000000')
    cy.get('button').contains('下一步').click()
  })
}



function OnLineApply_Fillin_OT(){
  cy.url().should('include', '/OnLineApply_Fillin_OT')
  cy.get('input[name="英文姓名"]').type('John')
  cy.get('select[name="出生地"]').select('臺北市')
  cy.get('select[name="國籍"]').select('本國')
  cy.get('button').contains('同戶籍地址').click()
  cy.get('input[id="帳單地址-同居住地址"]').check()
  cy.get('input[id="寄卡地址-同居住地址"]').check()
  cy.get('input[id="帳單形式-行動帳單(簡訊)"]').check()
  cy.get('input[name="畢業國小名稱"]').type('asd')
  cy.get('input[name="公司名稱"]').type('qwe')
  cy.get('input[id="帳單形式-行動帳單(簡訊)"]').check()
  cy.get('select[name="職業別"]').select('1天然能源業/武器製造販售業')
  cy.get('select[name="職級別"]').select('1職員')
  cy.get('div').contains('1經營事業收入').click()
  cy.get('div').contains('2薪資所得').click()
  cy.get('span').contains('9其他').click()
  cy.get('input[name="主要所得及資金來源-其他"]').type('租金收入')
  cy.get('input[name="月收入"]').type('555555')
  cy.get('button').contains('下一步').click()
}



function OnLineApply_Fillin_OT_1(){
  cy.url().should('include', '/OnLineApply_Fillin_OT_1')
  cy.get('input[name="radioALL"]').check()
  cy.get('button').contains(' 預覽申請書 ').click()
}



function OnLineApply_Fillin_OT_2(){
  cy.url().should('include', '/OnLineApply_Fillin_OT_2')
  cy.get('button').contains(' 下一步 ').click()
}



function OnLineApply_Fillin_OT_Up(){
  cy.url().should('include', '/OnLineApply_Fillin_OT_Up')
  cy.wait(1000)
  cy.get('.modal-body').eq(0).scrollTo('bottom',{ duration: 500 })
  cy.get('button').contains('關閉').click()
  cy.get('#exampleRadios1').check()
  cy.get('#upload1').selectFile('cypress/file/ROC_mibunsho.jpg')
  cy.get('button').contains(' 確認 ').click()
  cy.get('button').contains(' 送出申請 ').click()
}



function OnLineApply_Fillin_OT_finish(){
  cy.url().should('include', '/OnLineApply_Fillin_OT_finish')
  cy.wait(1000)
  cy.get('button').contains(' 關閉 ').click()
  cy.get('button').contains('下載/列印申請書').click()
}