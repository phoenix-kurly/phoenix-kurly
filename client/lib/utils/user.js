const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body: null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

export const user = async (options = {}) => {
  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    headers: {...defaultOptions.headers, ...options.headers},
  };

  let response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  // console.log(response);

  return response;
};

user.get = async (url, options) => {
  return user({
    url,
    ...options,
  });
};

user.post = (url, body, options) => {
  return user({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

user.put = (url, body, options) => {
  return user({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

user.delete = (url, options) => {
  return user({
    method: 'DELETE',
    url,
    ...options,
  });
};
