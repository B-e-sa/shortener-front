export default function setAuthorization(token?: string) {
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
  
  return {};
}
