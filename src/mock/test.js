export default [
  {
    url: '/api/getUser',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: ['tom', 'jerry']
      };
    }
  }
];
