describe('未來卡', () => {
  it('賴點卡-非卡友', () => {
    cy.visit('http://localhost:8080/card_apply/?&GID=99&IDE=A')
    cy.get('input[name="申請人身分證字號"]').type('U121825032')
    cy.get('select[name="年"]').select('1996')
    cy.get('select[name="月"]').select('5')
    cy.get('select[name="日"]').select('31')
    cy.get('input[name="申請的信用卡"]').check()
    cy.get('input[name="有關條款"]').click()
    cy.get('#terms_box_1').scrollTo('bottom',{ duration: 500 })
    cy.get('#button_termsOpt_1').check()
    cy.get('button').contains('確定').click()
    cy.get('#agree1').check()
    cy.get('button').contains('下一步').click()


    cy.url().should('include', '/OnLineApply_Gift') 
    cy.get('.form-check').children('.form-check-input').check()
    cy.get('button').contains('下一步').click()


    cy.url().should('include', '/OnLineApply_OCR')
    cy.wait(500)
    cy.get('button').contains('關閉').click()
    cy.get('#upload1').selectFile('cypress/file/ROC_mibunsho.jpg')
    cy.get('button').contains('確認修改').click()
    cy.get('#upload2').selectFile('cypress/file/4b45d5329a362.jpg')
    cy.get('button').contains('確認修改').click()
    cy.get('button').contains('送出證件').click()
    cy.intercept('https://card-beta.uitc.com.tw/CardApply/api/OCR/UploadImage').as('UploadImage')
    cy.wait('@UploadImage')
    cy.get('select[name="homeAddr_County"]').select('臺北市')
    cy.get('select[name="homeAddr_Area"]').select('士林區')
    cy.get('select[name="homeAddr_Road"]').select('力行街')
    cy.get('input[name="homeAddr_Num"]').type('123')
    cy.get('button').contains('確認').click()


    cy.url().should('include', '/OnLineApply_n1')
    cy.get('button').eq(2).click()


    cy.url().should('include', '/OnLineApply_Chkw')
    cy.get('#mbleTelNbr').type('0963550051')
    cy.get('input[name="agreeTerms"]').check()
    cy.get('button').contains('下一步').click()


    cy.url().should('include', '/OnLineApply_Written_OTP')
    cy.intercept('https://card-beta.uitc.com.tw/CardApply/api/Otp/Send').as('Otp_Send')
    cy.wait('@Otp_Send')
    cy.wait(500)
    // cy.get('#noticeModal_2').should('have.class','show')
    cy.get('button').contains(' 關閉 ').click()
    cy.get('input[name="簡訊驗證碼"]').type('000000')
    cy.get('button').contains('下一步').click()


    cy.url().should('include', '/OnLineApply_Fillin_OT')
    cy.get('input[name="英文姓名"]').type('John')
    cy.get('select[name="出生地"]').select('臺北市')
    cy.get('select[name="國籍"]').select('本國')
    cy.get('input[id="居住地址-同戶籍地址"]').check()
    cy.get('input[id="帳單地址-同居住地址"]').check()
    cy.get('input[id="寄卡地址-同居住地址"]').check()
    cy.get('input[id="帳單形式-行動帳單(簡訊)"]').check()
    cy.get('input[name="畢業國小名稱"]').type('asd')
    cy.get('input[name="公司名稱"]').type('qwe')
    cy.get('input[id="帳單形式-行動帳單(簡訊)"]').check()
    cy.get('select[name="職業別"]').select('1天然能源業/武器製造販售業')
    cy.get('select[name="職級別"]').select('1職員')
    cy.get('select[name="主要所得及資金來源"]').select('1經營事業收入')
    cy.get('input[name="月收入"]').type('555555')
    cy.get('button').contains('下一步').click()



    cy.url().should('include', '/OnLineApply_Fillin_OT_1')
    cy.get('input[name="radioALL"]').check()
    cy.get('button').contains(' 預覽申請書 ').click()


    cy.url().should('include', '/OnLineApply_Fillin_OT_2')
    cy.get('button').contains(' 下一步 ').click()


    cy.url().should('include', '/OnLineApply_Fillin_OT_Up')
    cy.wait(1000)
    cy.get('.modal-body').eq(0).scrollTo('bottom',{ duration: 500 })
    cy.get('button').contains('關閉').click()
    cy.get('#exampleRadios1').check()
    cy.get('#upload1').selectFile('cypress/file/ROC_mibunsho.jpg')
    cy.get('button').contains(' 財力證明修改 ').click()
    cy.get('button').contains(' 送出申請 ').click()


    cy.url().should('include', '/OnLineApply_Fillin_OT_finish')
    cy.wait(1000)
    cy.get('button').contains(' 關閉 ').click()
    cy.get('button').contains('下載/列印申請書').click()
  })
})