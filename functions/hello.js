// có nghĩa khi trỏ về http://localhost:8888/.netlify/functions/hello ---> xuất hiện hello
const items = [
    { id: 1, name: 'john' },
    { id: 2, name: 'susan' },
  ]

exports.handler = async function (event, context) {
    return {
      statusCode: 200,
    //   body: JSON.stringify(items)
      body: 'hello world',
    }
  }