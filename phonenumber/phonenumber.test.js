const test = require('ava')
const phonenumber = require('./phonenumber')

test('phonenumber', function (t) {
  t.is(phonenumber('081-111-1111'),true)
})
