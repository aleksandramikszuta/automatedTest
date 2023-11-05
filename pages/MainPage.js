const { I } = inject();

module.exports = {

  fields: {
    userName: "input[name='UserName']",
    password: "input[name='Password']"
  },
  submitButton: '#login',

  login(userName, password) {
    I.fillField(this.fields.userName, userName)
    I.fillField(this.fields.password, password)
    I.click(this.submitButton)
  }
}
