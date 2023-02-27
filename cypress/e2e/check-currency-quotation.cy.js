describe('Testing currency quotation api' , () => {
  it('should get current quotation', () => {
    cy.request({
      method: 'GET',
      url: 'http://economia.awesomeapi.com.br/json/last/USD-BRL'
    })
    .then((response) => {
      const { USDBRL: res } = response.body
      const statusCode = response.status
      const bid = res.bid
      const name = res.name
      
      expect(statusCode).to.eq(200)
      expect(bid).to.eq('5.21')
      expect(name).contains('Dólar')
    })
  })
})